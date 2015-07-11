Package.describe({
  name:    "clinical:env",
  version: "1.0.1",
  summary: "Set environment variables defined in a .env file",
  git:     "https://github.com/okgrow/meteor-dotenv/",
  contributors: [
    "pauldowman",
    "nmacmunn",
    "scottmotte",
    "meteorhacks",
    "gadicohen",
    "arunoda"
  ]
});



Npm.depends({dotenv: "0.4.0"});

Package.onUse(function (api) {
  api.use('meteor-platform');

  api.use('meteorhacks:inject-initial');
  api.use('underscore', ['server']);

  api.addFiles('lib/clinical-env.js', ['client', 'server']);
  api.addFiles('lib/clinical-env-client.js', ['client']);
  api.addFiles('lib/clinical-env-server.js', ['server']);

  //api.export('allowEnv', ['server']);
  api.export('process', ['client']);

  api.export('Env');
});



Package.on_test(function (api) {
  api.use('clinical:env');
  api.addFiles('allow-env_tests.js', ['client', 'server']);
});
