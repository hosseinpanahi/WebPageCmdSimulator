Web Page CMD Simulator
===================

Javascript super lightweight library for executing commands on keyup events in a web page, for example user types in "go" then a callback function will be fired



Add javascript file (wpcmd.js) to the page.
Set the configuration or leave it to be as its default.
Use wpcmd.setCommand to set a keyword to a callback function.

#Sample:
wpcmd.setCommand('ok', function(){ alert('ok'); });

Use wpcmd.setPureCommand to set a collection of key codes to a callback function.

#Sample:
wpcmd.setPureCommand('7975', function(){ alert('ok'); });

Configurations:

wpcmd.config.timeOut > time out for reseting the captured keys, default value is 1200ms
wpcmd.config.breakTime > miliseconds to wait for capturing the next key or excute the command, defaul value is 500ms
wpcmd.config.maxCommandLength > maximum size of commands name length, default value is 15
wpcmd.config.dontCaptureOnInputElements > do not capture the keys when typing in an input, default value is true
