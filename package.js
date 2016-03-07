Package.describe({
  name: 'valedaemon:bad-words',
  version: '0.0.1',
  summary: 'Implementation of npm bad-words by webmech',
  git: 'https://github.com/valedaemon/meteor-bad-words',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('bad-words.js');
  api.export("BannedFilter", 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('valedaemon:bad-words');
  api.addFiles('bad-words-tests.js');
  api.export("BannedFilter", 'server');
});

Npm.depends({"bad-words": "1.3.1"});