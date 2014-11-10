Package.describe({
  summary: 'This is a tiny phantom wrapper',
  version: '0.9.0_3',
  git: 'https://github.com/zaku-eu/meteor-phantom.git'
});

Npm.depends({
  "shoe": "https://github.com/bluekeyes/shoe/tarball/45429420fece517b6df9ffc856aa5ba661a10741",
  "phantom": "0.6.1"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('zaku:phantom.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zaku:phantom');
  api.addFiles('zaku:phantom-tests.js', 'server');
});
