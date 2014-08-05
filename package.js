Package.describe({
  summary: "Wrapper for phaser.io to use in meteor"
});

Package.on_use(function (api, where) {
	api.export('phaserio');
  api.add_files('phaser/build/phaser.js', ['client']);
});

Package.on_test(function (api) {
  api.use('phaserio');

//  api.add_files('phaserio_tests.js', ['client', 'server']);
});
