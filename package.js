Package.describe({
  summary: "REPLACEME - What does this package (or the original one you're wrapping) do?"
});

Package.on_use(function (api, where) {
	api.export('phaserio');
  api.add_files('phaser/build/phaser.js', ['client']);
});

Package.on_test(function (api) {
  api.use('phaserio');

  api.add_files('phaserio_tests.js', ['client', 'server']);
});
