var obj = {};

var dotenv = Npm.require('dotenv');
dotenv._getKeysAndValuesFromEnvFilePath(process.env.PWD + "/.env");
dotenv._setEnvs();

// NODE_ENV DEFAULTS
if(dotenv.environment() == "production"){
  Env.isProduction = true;
  Env.isDevelopment = false;
  Env.isTesting = false;
  Env.isTraining = false;
  Env.isStaging = false;
}else if (dotenv.environment() == "development"){
  Env.isProduction = false;
  Env.isDevelopment = true;
  Env.isTesting = false;
  Env.isTraining = false;
  Env.isStaging = false;
}

// METEOR_ENV OVERRIDES
if(dotenv.keys_and_values.METEOR_ENV == "production"){
  Env.isProduction = true;
  Env.isDevelopment = false;
  Env.isTesting = false;
  Env.isTraining = false;
  Env.isStaging = false;
}else if(dotenv.keys_and_values.METEOR_ENV == "development"){
  Env.isProduction = false;
  Env.isDevelopment = true;
  Env.isTesting = false;
  Env.isTraining = false;
  Env.isStaging = false;
}else if(dotenv.keys_and_values.METEOR_ENV == "testing"){
  Env.isProduction = true;
  Env.isDevelopment = false;
  Env.isTesting = true;
  Env.isTraining = false;
  Env.isStaging = false;
}else if(dotenv.keys_and_values.METEOR_ENV == "training"){
  Env.isProduction = false;
  Env.isDevelopment = false;
  Env.isTesting = false;
  Env.isTraining = true;
  Env.isStaging = false;
}else if(dotenv.keys_and_values.METEOR_ENV == "staging"){
  Env.isProduction = false;
  Env.isDevelopment = false;
  Env.isTesting = false;
  Env.isTraining = false;
  Env.isStaging = true;
}

// DEBUG
if((dotenv.keys_and_values.DEBUG == "true") ||
   (dotenv.keys_and_values.DEBUG == "TRUE") ||
   (dotenv.keys_and_values.DEBUG == "1")){
     Env.isDebug = true;
}else{
  Env.isDebug = false;
}

// TRACE
if((dotenv.keys_and_values.TRACE == "true") ||
   (dotenv.keys_and_values.TRACE == "TRUE") ||
   (dotenv.keys_and_values.TRACE == "1")){
     Env.isTrace = true;
}else{
  Env.isTrace = false;
}



Env.allow =  function (variables) {
  _.each(variables, function (value, key) {
      obj[key] = value ? process.env[key] : undefined;
  });
  obj['isProduction'] = Env.isProduction;
  obj['isDevelopment'] = Env.isDevelopment;
  obj['isTesting'] = Env.isTesting;
  obj['isTraining'] = Env.isTraining;
  obj['isDebug'] = Env.isDebug;
  obj['isTrace'] = Env.isTrace;

  Inject.obj('env', obj);
}
Env.display = function(){
  console.log(Env.variables());
}
Env.variables = function(){
  return process.env;
}
