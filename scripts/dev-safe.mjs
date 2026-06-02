import { spawn } from "node:child_process";
import { execSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PORTS = [3000, 3001, 3002, 3003];
const shouldClean = process.argv.includes("--clean");

function killDevPorts() {
  if (process.platform === "win32") {
    for (const port of PORTS) {
      try {
        const output = execSync(
          `powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique"`,
          { encoding: "utf8", cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] },
        );
        for (const pid of output.split(/\s+/).filter(Boolean)) {
          const id = Number(pid);
          if (id > 0) {
            try {
              execSync(`taskkill /PID ${id} /F`, { stdio: "ignore" });
            } catch {
              /* process may already be gone */
            }
          }
        }
      } catch {
        /* no listeners on this port */
      }
    }
    return;
  }

  for (const port of PORTS) {
    try {
      execSync(`lsof -ti:${port} | xargs -r kill -9`, { stdio: "ignore" });
    } catch {
      /* no listeners on this port */
    }
  }
}

async function cleanNextCache() {
  const nextDir = path.join(ROOT, ".next");
  if (!existsSync(nextDir)) return;

  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      rmSync(nextDir, {
        recursive: true,
        force: true,
        maxRetries: 5,
        retryDelay: 300,
      });
      return;
    } catch {
      if (attempt === 4) throw new Error("Failed to remove .next cache. Close other dev servers and retry.");
      await delay(500);
    }
  }
}

async function main() {
  killDevPorts();
  await delay(800);

  if (shouldClean) {
    await cleanNextCache();
  }

  const nextBin = path.join(ROOT, "node_modules/next/dist/bin/next");
  const child = spawn(process.execPath, [nextBin, "dev"], {
    cwd: ROOT,
    stdio: "inherit",
    env: process.env,
  });

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }
    process.exit(code ?? 0);
  });
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
