---
name: fix-dependabot
description: Fetches, analyzes, and automatically resolves open GitHub Dependabot alerts for both Python (UV) and Node.js (NPM) ecosystems.
---

# Universal Dependabot Vulnerability Resolution

This skill equips you with a strict, automated workflow to discover and fix package security vulnerabilities in the current repository without disrupting local environment stability.

## When to use this skill

- Use this whenever the user asks to check for security vulnerabilities, audit project dependencies, or fix open Dependabot alerts.
- Use this when you need to ensure that the project packages comply with GitHub security advisories.

## How to use it

### Step 1: Fetch Alerts

Call the MCP tool `check_dependabot` from the `mcp-dev-toolbox` server.

- **Parameter `repo_path`:** Dynamically determine the repository path in 'owner/repo' format by inspecting the local `.git/config` file. Do not guess or hardcode the repository name.

### Step 2: Ecosystem Detection & Context Gathering

Before applying any fixes, inspect the workspace root directory to determine the package manager and ecosystem:

- **Ecosystem A (Python/UV):** Look for `pyproject.toml`, `uv.lock`, or `requirements.txt`.
- **Ecosystem B (Node.js/NPM):** Look for `package.json` or `package-lock.json`.

### Step 3: Implement and Lock the Fix

Based on the detected ecosystem, upgrade the vulnerable package to its respective `patched_version`:

#### IF PYTHON / UV ECOSYSTEM:

1. **Modify Manifest:** Update the exact package version in `pyproject.toml` or `requirements.txt` to the secure `patched_version`.
2. **Lockfile & Sync:** Run the modern `uv` commands to update the lockfile and synchronize the local virtual environment:
   ```bash
   uv lock --update-package <package_name>
   uv sync
   ```

#### IF NODE.JS / NPM ECOSYSTEM:

1. **Automated Fix Attempt:** Try upgrading the specific package cleanly via NPM first to let it resolve sub-dependencies automatically:
   ```bash
   npm install <package_name>@<patched_version>
   ```
2. **Fallback:** If `package.json` requires manual adjustment, modify the version string directly in `package.json` and run:
   ```bash
   npm install
   ```

### Step 4: Local Verification (Run Automation Tests)

Do NOT re-fetch alerts from GitHub after applying the fix (since changes are only local and haven't been pushed or merged yet). Instead, verify the upgrade by executing the local test suite:

- **IF PYTHON / UV ECOSYSTEM:**
  Detect how tests are configured and run them (preferring `uv run pytest` or `uv run python manage.py test` for Django).
  ```bash
  uv run pytest
  ```
- **IF NODE.JS / NPM ECOSYSTEM:**
  Run the test script defined in `package.json` (usually `npm test`).
  ```bash
  npm test
  ```

## Output Format to the User

Present your final summary in a clean, scannable table layout:
| # | Package | Severity | Current Range | Patched Version | Status |
|---|---|---|---|---|---|
| 1 | ... | ... | ... | ... | Fixed |

Explain which lockfiles were updated and notify the user that the alerts will be officially closed on GitHub once they push and merge these local changes.
