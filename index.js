var webPage = require('webpage');
var page = webPage.create();

system = require('system');
var userAgents = require('./useragent.json')
var ua, address, outputFileName;

if (system.args.length === 1) {
  console.log('Usage: index.js <some URL>');
  phantom.exit();
}

var args = {}
for(var i in system.args){
  if (i != 0){
    switch(true){
      case /^(.*)=(.*)/.test(system.args[i]):
        var argPair = system.args[i].match(/^(.*)=(.*)/)
        key = argPair[1]
        value = argPair[2]
        args[key] = value
        break;
      default:
        address = address || system.args[i]
    }
  }
}

page.viewportSize = {
  width: 320,
  height: 480
}

page.settings.userAgent = userAgents[args.device] || userAgents.default
outputFileName = args.o || 'ss.png'

page.open(address, function(status) {
  if (status === "success") {
    page.evaluate(function() {
      document.body.bgColor = 'white';
    })
    window.setTimeout(function() {
      page.render(outputFileName,{format: 'png', quality: '100'});
      phantom.exit();
    }, 1000)
  } else {
    console.error(status)
  }
});
