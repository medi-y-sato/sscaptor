var webPage = require('webpage');
var page = webPage.create();

system = require('system');

if (system.args.length === 1) {
  console.log('Usage: index.js <some URL>');
  phantom.exit();
}

address = system.args[1];

page.viewportSize = {
  width: 320,
  height: 480
}
page.settings.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4'

page.open(address, function(status) {
  console.log("status = " + status);

  if (status === "success") {
    page.evaluate(function() {
      document.body.bgColor = 'white';
    })
    window.setTimeout(function() {
      page.render("ss.png",{format: 'png', quality: '100'});
      phantom.exit();
    }, 1000)
  }
});
