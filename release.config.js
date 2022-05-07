// Ref:
// - https://github.com/semantic-release/semantic-release
// - https://semantic-release.gitbook.io/semantic-release/extending/plugins-list
// - https://svdoscience.com/2020-10-31/versioning-with-semantic-release

const { execSync } = require('child_process');

module.exports = isDryRun() ? getDryRunConfig() : getReleaseConfig();

console.log(getReleaseConfig2(isDryRun()))

function getReleaseConfig2(isDryRun) {
  console.log("isDryRun": isDryRun)
  branches = ""
  if (isDryRun == false) {
    branches = {
      'branches': [
        'master',
        {
          'name': 'develop',
          'channel': 'channel-${name}',
          'prerelease': true
        },
     ],
    }
  } else {
    branches: getCurrentBranch()
    console.log(branches)
  }

  return {
     branches,
    'repositoryUrl': 'https://github.com/martcus/try-semantic',
    'tagFormat': 'v${version}',
    'preset': 'conventionalcommits',
    'plugins': [
      ['@semantic-release/commit-analyzer', {
        }
      ],
      ['@semantic-release/release-notes-generator', {
          'writerOpts': {
            'commitsSort': ['perf', 'feat', 'fix'],
          }
        }
      ],
      ['@semantic-release/exec', {
          'verifyReleaseCmd': 'echo ${nextRelease.version} > .VERSION',
          'prepareCmd': './prepare-release.sh ${nextRelease.version}'
        }
      ],
      ['@semantic-release/changelog', {
          'changelogFile': 'CHANGELOG.md',
          'changelogTitle': '# Semantic Release Changelog'
        }
      ],
      ['@semantic-release/git', {
          'assets': ['CHANGELOG.md']
        }
      ],
      ['@semantic-release/github', {
        'assets': [
          {'path': 'CHANGELOG.md'},
          {'path': 'dist/**', 'label': 'distribution'}
        ]
      }],
    ]
  }
}

function getReleaseConfig() {
  return {
    'branches': [
      'master',
      {
        'name': 'develop',
        'channel': 'channel-${name}',
        'prerelease': true
      },
    ],
    'repositoryUrl': 'https://github.com/martcus/try-semantic',
    'tagFormat': 'v${version}',
    'preset': 'conventionalcommits',
    'plugins': [
      ['@semantic-release/commit-analyzer', {
        }
      ],
      ['@semantic-release/release-notes-generator', {
          'writerOpts': {
            'commitsSort': ['perf', 'feat', 'fix'],
          }
        }
      ],
      ['@semantic-release/exec', {
          'verifyReleaseCmd': 'echo ${nextRelease.version} > .VERSION',
          'prepareCmd': './prepare-release.sh ${nextRelease.version}'
        }
      ],
      ['@semantic-release/changelog', {
          'changelogFile': 'CHANGELOG.md',
          'changelogTitle': '# Semantic Release Changelog'
        }
      ],
      ['@semantic-release/git', {
          'assets': ['CHANGELOG.md']
        }
      ],
      ['@semantic-release/github', {
        'assets': [
          {'path': 'CHANGELOG.md'},
          {'path': 'dist/**', 'label': 'distribution'}
        ]
      }],
    ]
  }
}

function getDryRunConfig() {
  return {
    branches: getCurrentBranch(),
    'repositoryUrl': 'https://github.com/martcus/try-semantic',
    'tagFormat': 'v${version}',
    'preset': 'conventionalcommits',
    'plugins': [
      ['@semantic-release/commit-analyzer', {
        }
      ],
      ['@semantic-release/release-notes-generator', {
          'writerOpts': {
            'commitsSort': ['perf', 'feat', 'fix'],
          }
        }
      ],
      ['@semantic-release/exec', {
          'verifyReleaseCmd': 'echo ${nextRelease.version} > .VERSION',
          'prepareCmd': './prepare-release.sh ${nextRelease.version}'
        }
      ],
      ['@semantic-release/changelog', {
          'changelogFile': 'CHANGELOG.md',
          'changelogTitle': '# Semantic Release Changelog'
        }
      ],
      ['@semantic-release/git', {
          'assets': ['CHANGELOG.md']
        }
      ],
      ['@semantic-release/github', {
        'assets': [
          {'path': 'CHANGELOG.md'},
          {'path': 'dist/**', 'label': 'distribution'}
        ]
      }],
    ]
  };
}

function isDryRun() {
  return process.argv.includes('--dry-run');
}

function getCurrentBranch() {
  currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  console.log(currentBranch)
  return currentBranch
}
