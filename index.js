var webPage = require('webpage');
var page = webPage.create();

system = require('system');

var userAgents = {
  'iphone6' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4',
  'default' : 'Mozilla/5.0 (Linux; U; Android 1.5; ja-jp; GDDJ-09 Build/CDB56) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1'
}
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
