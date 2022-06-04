// Ref:
// - https://github.com/semantic-release/semantic-release
// - https://semantic-release.gitbook.io/semantic-release/extending/plugins-list
// - https://svdoscience.com/2020-10-31/versioning-with-semantic-release

module.exports = {
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
        'generateNotesCmd': 'echo "${nextRelease.notes}" > .NOTES',
        'prepareCmd': './prepare-release.sh ${nextRelease.version}',
      }
    ],
    ['@semantic-release/changelog', {
        'changelogFile': 'CHANGELOG.md',
        'changelogTitle': '# Semantic Release Changelog'
      }
    ],
    ['@semantic-release/git', {
        'assets': ['CHANGELOG.md'],
        'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
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
