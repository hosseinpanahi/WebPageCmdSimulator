wpcmd.config.timeOut = 1500;
wpcmd.config.breakTime = 600;
wpcmd.config.maxCommandLength = 20;

wpcmd.setCommand('test', function(){ 
	document.getElementById('container').innerHTML += "<p>Happening!</p>";
});

wpcmd.setPureCommand('7975', function(){ 
	document.getElementById('container').innerHTML += "<h3>Fancy thing happened!!</h3>";
});

wpcmd.setPureCommand('38384040373937396665', function(){ // up up down down lef right left right b a
	document.getElementById('container').innerHTML += "<h2>In memory of PES!!!</h2>";
});
