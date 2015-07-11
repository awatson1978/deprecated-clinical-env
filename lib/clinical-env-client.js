process = {
  env: Injected.obj('env')
}
Env.variables = function(){
  return Injected.obj('env');
}
Env.display = function(){
  console.log(Env.variables());
}

Env.isDebug = Injected.obj('env').isDebug;
Env.isTrace = Injected.obj('env').isTrace;
Env.isProduction = Injected.obj('env').isProduction;
Env.isDevelopment = Injected.obj('env').isDevelopment;
Env.isTesting = Injected.obj('env').isTesting;
Env.isStaging = Injected.obj('env').isStaging;
