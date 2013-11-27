wpcmd.config.timeOut = 1500;
wpcmd.config.breakTime = 600;
wpcmd.config.maxCommandLength = 20;

wpcmd.setCommand('test', function(){ 
	document.getElementById('container').innerHTML += "<p>Happening!</p>";
});

wpcmd.setPureCommand('7975', function(){ 
	document.getElementById('container').innerHTML += "<h3>Fancy thing happened!!</h3>";
});
