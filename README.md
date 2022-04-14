# try-semantic [![semantic-release: angular](https://img.shields.io/badge/semantic--release-convetionalcommit-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

[![Conventional Commit](https://github.com/martcus/try-semantic/actions/workflows/pr.yml/badge.svg)](https://github.com/martcus/try-semantic/actions/workflows/pr.yml)
[![Full Release](https://github.com/martcus/try-semantic/actions/workflows/release.yml/badge.svg)](https://github.com/martcus/try-semantic/actions/workflows/release.yml)
[![Full release dry-run](https://github.com/martcus/try-semantic/actions/workflows/release-dryrun.yml/badge.svg)](https://github.com/martcus/try-semantic/actions/workflows/release-dryrun.yml)
[![Real-time config release](https://github.com/martcus/try-semantic/actions/workflows/release-custom.yml/badge.svg)](https://github.com/martcus/try-semantic/actions/workflows/release-custom.yml)
[![Real-time dry-run config release](https://github.com/martcus/try-semantic/actions/workflows/release-dryrun-custom.yml/badge.svg)](https://github.com/martcus/try-semantic/actions/workflows/release-dryrun-custom.yml)

an exercise of using [semantic-release](https://github.com/semantic-release/semantic-release) and [commitlint](https://commitlint.js.org/) with [conventionalcommit](https://www.conventionalcommits.org/en/v1.0.0/)

## workflows
- `pr.yml`: dispatch on a pr [opened, synchronize, reopened, edited], checks the commit messages associated if are conform to the conventional commmit specs
- `release.yml`: dispatch manually, performs a complete release process
- `release-dryrun`: dispatch manually, performs a simulation (aka dry-run) of the release process
- `release-custom.yml`: dispatch manually, performs a complete release process config by a config.release.js write during the workflow run
- `release-dryrun-custom.yml`: dispatch manually, performs a simulation (aka dry-run) of the release process config by a config.release.js write during the workflow run


## Test
commit to increase patch
commit to increase minor
commit to increase minor
