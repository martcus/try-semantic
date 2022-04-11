# try-semantic

[![Semantic Release](https://github.com/martcus/try-semantic/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/martcus/try-semantic/actions/workflows/release.yml)

an exercise of using [semantic-release](https://github.com/semantic-release/semantic-release) and [commitlint](https://commitlint.js.org/) with [conventionalcommit](https://www.conventionalcommits.org/en/v1.0.0/)

## workflows
- `pr.yml`: dispatch on a pr [opened, synchronize, reopened, edited], checks the commit messages associated if are conform to the conventional commmit specs
- `release.yml`: dispatch manually, performs a complete release process
- `release-dryrun`: dispatch manually, performs a simulation (aka dry-run) of the release process
- `release-custom.yml`: dispatch manually, performs a complete release process config by a config.release.js write during the workflow run
- `release-dryrun-custom.yml`: dispatch manually, performs a simulation (aka dry-run) of the release process config by a config.release.js write during the workflow run
