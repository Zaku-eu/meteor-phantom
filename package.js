Package.describe({
    summary: "This is a tiny phantom wrapper"
});

Npm.depends({
  "shoe": "https://github.com/bluekeyes/shoe/tarball/45429420fece517b6df9ffc856aa5ba661a10741",
  "phantom": "0.6.1"
});

// even though we're serving minified, dynamic loading would be nice
Package.on_use(function (api) {
  api.export('phantom');
  api.add_files('phantom.js', 'server');
});
