clinical:env
-----------------

An environemnt variable based replacement of ``Meteor.settings`` which exposes ``process.env`` on both server and client.  Supports .env files and a [twelve-factor app](http://www.12factor.net/) application architecture.


========================================
#### Installation

``meteor add clinical:env``


========================================
#### Environment Config Files  

You can create a `.env` file in the root directory of your project, which acts somewhat like an application specific ``bash_profile`` file.  Simply add the environment variables you want for the app, as if you were specifying ``export`` or ``setenv`` commands. A sample ``.env`` file might look something like this:

```
  DEBUG=true
  TRACE=false
  DOMAIN=http://www.foo.com
  METEOR_ENV=development
  SECRET_KEY=ao8v7d8c8vcdi98vekd
```


========================================
#### Server Usage



```javascript
  var secret_key = process.env.SECRET_KEY;  

  Meteor.startup(function(){
    console.log("Starting up " + process.env.DOMAIN + " in " + process.env.METEOR_ENV);

    if(Env.isDevelopment){
      console.log("Logged in user is: " + Meteor.userId());
    }

    if(process.env.DEBUG){
      Env.display();
    }
  });
```

```javascript
  Env.allow({
    DEBUG: true,
    TRACE: true,
    METEOR_ENV: true,
    DOMAIN: true,
    SECRET_KEY: false
  });
```

========================================
#### Client Usage

```javascript
  if(process.env.METEOR_ENV){
    console.log("Running in " + process.env.METEOR_ENV);
  }
  if(Env.isDevelopment){
    console.log("Logged in user is: " + Meteor.userId());
  }
  if(process.env.DEBUG){
    Env.display();
  }
```


========================================
#### Environment Precedent  

We can specify environment variable in a few different ways (which is exactly why environment variables are so handy); each with a different precedent.  

**1.  Environment Profile**  
The most insistent way to define the variable.  Will override any other setting.
````bash
nano ~/.profile
  METEOR_ENV="development"
````

**2.  Export Variable**  
As insistent as setting the variable in the ``~/.profile`` file, but is temporary to the shell session.  
````bash
export METEOR_ENV="staging"
````

**3.  Inline Variable**  
Probably the most convenient way of specifying an environment variable; particularly for debugging and development purposes.  Setting an inline variable will override a ``.env`` file, but will be ignored if the variable has been specified in ``~/.profile`` or defined via ``export``.
````bash
METEOR_ENV="testing" meteor -p 4000
````

**4.  .env Variable**
The ``.env`` file is similar to ``~/.profile``, but is application specific.  Think of it as a way to mix-and-match a ``~/.profile`` file on a per-app basis.  
````bash
METEOR_ENV="dev"
````

**Node Over Meteor**  
NODE_ENV takes precedent over METEOR_ENV  


========================================
#### API


**Env.display()**
Anywhere

**Env.variables()**
Anywhere

**Env.allow(envObject)**
Server

**Env.isProduction**  
Boolean, Server  

**Env.isDevelopment**  
Boolean, Server  

**Env.isTesting**
Boolean, Server  

**Env.isTraining**
Boolean, Server

**Env.isStaging**  
Boolean, Server

**Env.isDebug**  
Boolean, Server

**Env.isTrace**  
Boolean, Server


========================================
#### Should I commit my .env file?  

Try not to commit your .env file to version control. It is best to keep it local to your machine and local on any machine you deploy to. Keep production credential .envs on your production machines, and keep development .envs on your local machine.

Also, beware environment variables that have been sent to the client, and which wind up getting stored in cache.  You may need to debug using incognito mode.

========================================
#### Licensing  

MIT.  Use as you will.
