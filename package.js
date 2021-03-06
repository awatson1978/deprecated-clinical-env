Package.describe({
  name:    "clinical:env",
  version: "2.1.5",
  summary: "Set environment variables defined in a .env file",
  git:     "https://github.com/awatson1978/clinical-env",
  contributors: [
    "pauldowman",
    "nmacmunn",
    "scottmotte",
    "meteorhacks",
    "gadicohen",
    "arunoda",
    "possibilities",
    "TomWiJ",
    "panphora"
  ]
});



Npm.depends({dotenv: "0.4.0"});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform@1.2.2');
  api.use('meteorhacks:inject-initial@1.0.2');
  api.use('underscore@1.0.3', ['server']);

  api.addFiles('lib/clinical-env.js', ['client', 'server']);
  api.addFiles('lib/clinical-env-client.js', ['client']);
  api.addFiles('lib/clinical-env-server.js', ['server']);

  //api.export('allowEnv', ['server']);
  api.export('process', ['client']);

  api.export('Env');
});



Package.on_test(function (api) {
  api.use('meteor-platform@1.2.2');
  api.use('clinical:env');
  api.use('clinical:verification');
  api.addFiles('tests/clinical-env.js');
});
