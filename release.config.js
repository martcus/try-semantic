// Ref:
// - https://github.com/semantic-release/semantic-release
// - https://semantic-release.gitbook.io/semantic-release/extending/plugins-list
// - https://svdoscience.com/2020-10-31/versioning-with-semantic-release


module.exports = {
  'branches': [
    'master',
    {
      name: 'develop',
      prerelease: true
    },
  ],
  'preset': 'conventionalcommits',
  'tagFormat': 'v${version}',
  'plugins': [
    '@semantic-release/commit-analyzer',
    ['@semantic-release/release-notes-generator', {
        preset: 'conventionalcommits',
        "writerOpts": {
          "commitsSort": ["perf", "feat", "fix"],
        }
      }
    ],
    ['@semantic-release/changelog', {
        "changelogFile": "CHANGELOG.md",
      }
    ],
    ["@semantic-release/git", {
        "assets": ["CHANGELOG.md"]
      }
    ],
    ["@semantic-release/github", {
      "assets": [
        {"path": "CHANGELOG.md"},
        {"path": "dist/**", "label": "distribution"}
      ]
    }],
  ]
}
