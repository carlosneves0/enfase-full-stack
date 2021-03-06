#!/usr/bin/env bash
set -euo pipefail

export PACKAGE_ID='backend/database'

repository_root="$(git rev-parse --show-toplevel)"
package_root="$repository_root/$PACKAGE_ID"

cd "$package_root"

bash scripts/kill.bash

bash scripts/start.bash
