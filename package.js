Package.describe({
  summary: 'This is a tiny phantom wrapper',
  version: '0.9.0',
  git: 'https://github.com/zaku-eu/meteor-phantom.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('zaku:phantom.js');
});
