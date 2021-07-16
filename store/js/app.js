var $$ = Dom7;

var app = new Framework7({
	  // App Root Element
    root: '#app',
		// App Name
    name: 'InstaHub',
		//Theme
    theme: 'ios',
		// Enable Swipe Panel
		panel: {
			swipe: 'left',
		}, 
		// Add Default Routes
    routes: routes,
    dialog: {
        title: "Unsupported Version",
        buttonOk: "Yes",
        buttonCancel: "No"
    }
});

function checkVersion() {
    var agent = window.navigator.userAgent,
        start = agent.indexOf('OS ');
    if ((agent.indexOf('iPhone') > -1 || agent.indexOf('iPad') > -1) && start > -1) {
        return window.Number(agent.substr(start + 3, 3).replace('_', '.'));
    }
    return 0;
}

var version = checkVersion();

function checkCHI() {
    if (version >= 12.0 && version < 12.2) {
        // Running iOS 12.0 to 12.1.4
        window.location.href = "itms-services://?action=download-manifest&url=https://iphoenixapp.com/plists/Chimera12.plist";
    } else if (version >= 12.2 && version < 13.0) {
        // Running iOS 12.2 to 12.5.1
        window.location.href = "itms-services://?action=download-manifest&url=https://iphoenixapp.com/plists/Chimera122.plist";
    } else {
        app.dialog.confirm("Chimera is not supported on your device. Would you like to install the app anyways?", function() {
            window.location.href = "itms-services://?action=download-manifest&url=https://iphoenixapp.com/plists/Chimera122.plist";
        });
    }
}

function checkODY() {
    if (version >= 13.0 && version <= 13.7) {
        // Running iOS 13.0 to 13.7
        window.location.href = "itms-services://?action=download-manifest&url=https://instahub.app/plists/Odyssey.plist";
    } else {
        // Running Incompatible Version
        app.dialog.confirm("Odyssey is not supported on your device. Would you like to install the app anyways?", function() {
            window.location.href = "itms-services://?action=download-manifest&url=https://instahub.app/plists/Odyssey.plist";
        });
    }
}

function checkRJB() {
    if (version >= 12.0 && version < 12.5) {
        // Running iOS 12.0 to 12.4.8
        window.location.href = "itms-services://?action=download-manifest&url=https://iphoenixapp.com/plists/RootlessJB4.plist";
    } else {
        // Running Incompatible Version
        app.dialog.confirm("RootlessJB 4 is not supported on your device. Would you like to install the app anyways?", function() {
            window.location.href = "itms-services://?action=download-manifest&url=https://iphoenixapp.com/plists/RootlessJB4.plist";
        });
    }
}

function checkU0() {
    if (version >= 11.0 && version <= 14.5) {
        // Running iOS 11.0 to 14.3
        window.location.href = "itms-services://?action=download-manifest&url=https://instahub.app/plists/unc0ver.plist";
    } else {
        // Running Incompatible Version
        app.dialog.confirm("Unc0ver is not supported on your device. Would you like to install the app anyways?", function() {
            window.location.href = "itms-services://?action=download-manifest&url=https://instahub.app/plists/unc0ver.plist";
        });
    }
}

//Toggle Light Theme
function toggleWhiteTheme() {
      var element = document.body;
			var element2 = document.getElementById("allapps")
	  element.classList.toggle("theme-dark");
    element.classList.toggle("light");
		element2.classList.toggle("allappstop");
		element2.classList.toggle("allappstopl")
		
}

//Follow us on twitter
//app.dialog.confirm("Follow us on Twitter to get our notification in time.","InstaHub",function(){
 // window.location.href="https://twitter.com/instahubapp";
//});

//block inspect element
document.onkeydown = function (e) { 
            if (event.keyCode == 123) { 
                return false; 
            } 
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { 
                return false; 
            } 
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { 
                return false; 
            } 
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { 
                return false; 
            } 
            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { 
                return false; 
            } 
					} 
//Disable right click
document.onmousedown=disableclick;status="Right Click Disabled";function disableclick(event){  if(event.button==2)   {     alert(status);     return false;       }} 

// Create dynamic Popup
var dynamicPopup = app.popup.create({
  content: '<div class="popup">'+
              '<div class="block">'+
                '<p><a href="#" class="link popup-close">Close</a></p>'+
                'document.write ("html lol");'+
              '</div>'+
            '</div>',
  // Events
  on: {
    open: function (popup) {
      console.log('Popup open');
    },
    opened: function (popup) {
      console.log('Popup opened');
    },
  }
});
// Events also can be assigned on instance later
dynamicPopup.on('close', function (popup) {
  console.log('Popup close');
});
dynamicPopup.on('closed', function (popup) {
  console.log('Popup closed');
});

// Open dynamic popup
$$('.dynamic-popup').on('click', function () {
  dynamicPopup.open();
});
