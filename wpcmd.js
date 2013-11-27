wpcmd = {};
wpcmd.config = {};
wpcmd.commands = {};
wpcmd.toBeClearedCommand = null;
wpcmd.toBeWritingCommand = null;

wpcmd.pressedKeys = "";
wpcmd.typedCommand = "";

wpcmd.config.timeOut = 1200;
wpcmd.config.breakTime = 500;
wpcmd.config.maxCommandLength = 15;
wpcmd.config.dontCaptureOnInputTags = true;

wpcmd.setPureCommand = function(cmdKeys, callback){
	wpcmd.commands[cmdKeys] = callback;
};

wpcmd.setCommand = function(cmdName, callback){
	wpcmd.commands[cmdName.toLowerCase()] = callback;
};

wpcmd.clearKeys = function() {
	wpcmd.pressedKeys = "";
	wpcmd.typedCommand = "";
};

wpcmd.generalKeyUp = function (event) {
	var _target = event.target || window.event.srcElement;
    if (_target.tagName.toLocaleLowerCase() !== "input" || !wpcmd.config.dontCaptureOnInputTags) {
        if (wpcmd.toBeClearedCommand !== null) {
            clearTimeout(wpcmd.toBeClearedCommand);
        }
        wpcmd.toBeClearedCommand = setTimeout(function () {
            wpcmd.clearKeys();
        }, wpcmd.config.timeOut);
		var _keyCode = event.keyCode || window.event.which;
        if (wpcmd.pressedKeys.length < wpcmd.config.maxCommandLength) {			
            wpcmd.pressedKeys += _keyCode;
			wpcmd.typedCommand += String.fromCharCode(_keyCode).toLowerCase();
        }
        else
            wpcmd.pressedKeys = _keyCode;
		if(wpcmd.toBeWritingCommand !== null) {
			clearTimeout(wpcmd.toBeWritingCommand);
		}
		wpcmd.toBeWritingCommand = setTimeout(function () {
			if (wpcmd.commands[wpcmd.pressedKeys] !== undefined) {
				wpcmd.commands[wpcmd.pressedKeys]();
				wpcmd.clearKeys();
			}
			if (wpcmd.commands[wpcmd.typedCommand] !== undefined) {
				wpcmd.commands[wpcmd.typedCommand]();
				wpcmd.clearKeys();
			}
        }, wpcmd.config.breakTime);        
    }    
};

if(document.addEventListener) {
	document.addEventListener("keyup", wpcmd.generalKeyUp, false)
}
else {
	document.attachEvent("onkeyup", wpcmd.generalKeyUp);
}
