function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6TBEkaIboY4":
        Script1();
        break;
      case "5xQQTKf0YJ0":
        Script2();
        break;
      case "60VE5cloKrP":
        Script3();
        break;
      case "5k0xfzSM0pq":
        Script4();
        break;
      case "5krZL1gPuxE":
        Script5();
        break;
      case "6QD0KKocKf8":
        Script6();
        break;
      case "5uLCPUOBBAI":
        Script7();
        break;
      case "6H1fVJKu2b5":
        Script8();
        break;
      case "5bEPXybjPhu":
        Script9();
        break;
      case "6jlhxL2L6mI":
        Script10();
        break;
      case "5m2igjMCdoO":
        Script11();
        break;
      case "5csyjRoNXCB":
        Script12();
        break;
      case "6oztmhGx2QT":
        Script13();
        break;
      case "5eUFp1VW8aU":
        Script14();
        break;
      case "6aSgat2Iofn":
        Script15();
        break;
      case "5k5EDvcx8ws":
        Script16();
        break;
      case "6ROBFdJbqiu":
        Script17();
        break;
      case "5q23Imap3pE":
        Script18();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // xapi.ly v1.1.1

var thisWindow = window;

(function() {
  thisWindow.xapiConfig = thisWindow.xapiConfig || {
    platform: 'storyline',
    
    context: {
      revision: '1.0.0',
      platform: 'Articulate Storyline | xapi.ly',
      language: 'en-US',
    },
    
    track: {
      videos: false,
      completionThreshold: 0.8,      
      resources: true,
    },

    allowManualSignIn: true,

    rootExtURL: "",
  };

  /* =========================================*/

  var xapilyScriptId = 'xapily-script';
  var existing = document.getElementById(xapilyScriptId);

  if (existing) { return; }

  function loadScriptSync(id, src, cb) {
    if (document.getElementById(id)) { return; }

    var s = document.createElement('script');
    s.src = src;
    s.id = id;
    s.type = "text/javascript";
    s.async = false;

    document.body.appendChild(s);

    s.onload = function (e) {
      console.log(id + ' loaded:', src);
      cb && cb();
    }
  }

  function _addXapilyScript() {
    var xapilyScript = 'https://d3vebnggr793qr.cloudfront.net/download/js/1.1.1/xapily_storyline.min.js';
    loadScriptSync(xapilyScriptId, xapilyScript);
  }

  function _addTinCanScript(cb) {
    var tincanScript = 'https://cdn.jsdelivr.net/npm/tincanjs@0.50.0/build/tincan-min.js';
    var tincanScriptId = 'tincan-script';

    loadScriptSync(tincanScriptId, tincanScript, cb);
  }

  window.TinCan ? _addXapilyScript() : _addTinCanScript(_addXapilyScript);
})();

}

window.Script2 = function()
{
  // xapi.ly v1.1.1

var thisWindow = window;

(function() {
  thisWindow.xapiConfig = thisWindow.xapiConfig || {
    platform: 'storyline',
    
    context: {
      revision: '1.0.0',
      platform: 'Articulate Storyline | xapi.ly',
      language: 'en-US',
    },
    
    track: {
      videos: false,
      completionThreshold: 0.8,      
      resources: true,
    },

    allowManualSignIn: true,

    rootExtURL: "",
  };

  /* =========================================*/

  var xapilyScriptId = 'xapily-script';
  var existing = document.getElementById(xapilyScriptId);

  if (existing) { return; }

  function loadScriptSync(id, src, cb) {
    if (document.getElementById(id)) { return; }

    var s = document.createElement('script');
    s.src = src;
    s.id = id;
    s.type = "text/javascript";
    s.async = false;

    document.body.appendChild(s);

    s.onload = function (e) {
      console.log(id + ' loaded:', src);
      cb && cb();
    }
  }

  function _addXapilyScript() {
    var xapilyScript = 'https://d3vebnggr793qr.cloudfront.net/download/js/1.1.1/xapily_storyline.min.js';
    loadScriptSync(xapilyScriptId, xapilyScript);
  }

  function _addTinCanScript(cb) {
    var tincanScript = 'https://cdn.jsdelivr.net/npm/tincanjs@0.50.0/build/tincan-min.js';
    var tincanScriptId = 'tincan-script';

    loadScriptSync(tincanScriptId, tincanScript, cb);
  }

  window.TinCan ? _addXapilyScript() : _addTinCanScript(_addXapilyScript);
})();

}

window.Script3 = function()
{
  // xapi.ly v1.1.1

var thisWindow = window;

(function() {
  thisWindow.xapiConfig = thisWindow.xapiConfig || {
    platform: 'storyline',
    
    context: {
      revision: '1.0.0',
      platform: 'Articulate Storyline | xapi.ly',
      language: 'en-US',
    },
    
    track: {
      videos: false,
      completionThreshold: 0.8,      
      resources: true,
    },

    allowManualSignIn: true,

    rootExtURL: "",
  };

  /* =========================================*/

  var xapilyScriptId = 'xapily-script';
  var existing = document.getElementById(xapilyScriptId);

  if (existing) { return; }

  function loadScriptSync(id, src, cb) {
    if (document.getElementById(id)) { return; }

    var s = document.createElement('script');
    s.src = src;
    s.id = id;
    s.type = "text/javascript";
    s.async = false;

    document.body.appendChild(s);

    s.onload = function (e) {
      console.log(id + ' loaded:', src);
      cb && cb();
    }
  }

  function _addXapilyScript() {
    var xapilyScript = 'https://d3vebnggr793qr.cloudfront.net/download/js/1.1.1/xapily_storyline.min.js';
    loadScriptSync(xapilyScriptId, xapilyScript);
  }

  function _addTinCanScript(cb) {
    var tincanScript = 'https://cdn.jsdelivr.net/npm/tincanjs@0.50.0/build/tincan-min.js';
    var tincanScriptId = 'tincan-script';

    loadScriptSync(tincanScriptId, tincanScript, cb);
  }

  window.TinCan ? _addXapilyScript() : _addTinCanScript(_addXapilyScript);
})();

}

window.Script4 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:07:14 PM
============================== */

xapily.sendStatement({
  "verb": "viewed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script5 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:07:14 PM
============================== */

xapily.sendStatement({
  "verb": "viewed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script6 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:07:14 PM
============================== */

xapily.sendStatement({
  "verb": "viewed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script7 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:07:14 PM
============================== */

xapily.sendStatement({
  "verb": "viewed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script8 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:07:14 PM
============================== */

xapily.sendStatement({
  "verb": "viewed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script9 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:07:14 PM
============================== */

xapily.sendStatement({
  "verb": "viewed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script10 = function()
{
  // xapi.ly v1.1.1

var thisWindow = window;

(function() {
  thisWindow.xapiConfig = thisWindow.xapiConfig || {
    platform: 'storyline',
    
    context: {
      revision: '1.0.0',
      platform: 'Articulate Storyline | xapi.ly',
      language: 'en-US',
    },
    
    track: {
      videos: false,
      completionThreshold: 0.8,      
      resources: true,
    },

    allowManualSignIn: true,

    rootExtURL: "",
  };

  /* =========================================*/

  var xapilyScriptId = 'xapily-script';
  var existing = document.getElementById(xapilyScriptId);

  if (existing) { return; }

  function loadScriptSync(id, src, cb) {
    if (document.getElementById(id)) { return; }

    var s = document.createElement('script');
    s.src = src;
    s.id = id;
    s.type = "text/javascript";
    s.async = false;

    document.body.appendChild(s);

    s.onload = function (e) {
      console.log(id + ' loaded:', src);
      cb && cb();
    }
  }

  function _addXapilyScript() {
    var xapilyScript = 'https://d3vebnggr793qr.cloudfront.net/download/js/1.1.1/xapily_storyline.min.js';
    loadScriptSync(xapilyScriptId, xapilyScript);
  }

  function _addTinCanScript(cb) {
    var tincanScript = 'https://cdn.jsdelivr.net/npm/tincanjs@0.50.0/build/tincan-min.js';
    var tincanScriptId = 'tincan-script';

    loadScriptSync(tincanScriptId, tincanScript, cb);
  }

  window.TinCan ? _addXapilyScript() : _addTinCanScript(_addXapilyScript);
})();

}

window.Script11 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:09:18 PM
============================== */

xapily.sendStatement({
  "verb": "accessed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script12 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:09:18 PM
============================== */

xapily.sendStatement({
  "verb": "accessed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script13 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:09:18 PM
============================== */

xapily.sendStatement({
  "verb": "accessed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script14 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:09:18 PM
============================== */

xapily.sendStatement({
  "verb": "accessed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script15 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:09:18 PM
============================== */

xapily.sendStatement({
  "verb": "accessed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script16 = function()
{
  /* ===========================
HOLA-SG-2: CataractBasics-M1
------------------------------
Generated by xapi.ly
4/9/2024, 6:09:18 PM
============================== */

xapily.sendStatement({
  "verb": "accessed",
  "activity": {
    "name": "CataractBasics-M1",
    "type": "interaction"
  }
});
}

window.Script17 = function()
{
  // xapi.ly v1.1.1

var thisWindow = window;

(function() {
  thisWindow.xapiConfig = thisWindow.xapiConfig || {
    platform: 'storyline',
    
    context: {
      revision: '1.0.0',
      platform: 'Articulate Storyline | xapi.ly',
      language: 'en-US',
    },
    
    track: {
      videos: false,
      completionThreshold: 0.8,      
      resources: true,
    },

    allowManualSignIn: true,

    rootExtURL: "",
  };

  /* =========================================*/

  var xapilyScriptId = 'xapily-script';
  var existing = document.getElementById(xapilyScriptId);

  if (existing) { return; }

  function loadScriptSync(id, src, cb) {
    if (document.getElementById(id)) { return; }

    var s = document.createElement('script');
    s.src = src;
    s.id = id;
    s.type = "text/javascript";
    s.async = false;

    document.body.appendChild(s);

    s.onload = function (e) {
      console.log(id + ' loaded:', src);
      cb && cb();
    }
  }

  function _addXapilyScript() {
    var xapilyScript = 'https://d3vebnggr793qr.cloudfront.net/download/js/1.1.1/xapily_storyline.min.js';
    loadScriptSync(xapilyScriptId, xapilyScript);
  }

  function _addTinCanScript(cb) {
    var tincanScript = 'https://cdn.jsdelivr.net/npm/tincanjs@0.50.0/build/tincan-min.js';
    var tincanScriptId = 'tincan-script';

    loadScriptSync(tincanScriptId, tincanScript, cb);
  }

  window.TinCan ? _addXapilyScript() : _addTinCanScript(_addXapilyScript);
})();

}

window.Script18 = function()
{
  // xapi.ly v1.1.1

var thisWindow = window;

(function() {
  thisWindow.xapiConfig = thisWindow.xapiConfig || {
    platform: 'storyline',
    
    context: {
      revision: '1.0.0',
      platform: 'Articulate Storyline | xapi.ly',
      language: 'en-US',
    },
    
    track: {
      videos: false,
      completionThreshold: 0.8,      
      resources: true,
    },

    allowManualSignIn: true,

    rootExtURL: "",
  };

  /* =========================================*/

  var xapilyScriptId = 'xapily-script';
  var existing = document.getElementById(xapilyScriptId);

  if (existing) { return; }

  function loadScriptSync(id, src, cb) {
    if (document.getElementById(id)) { return; }

    var s = document.createElement('script');
    s.src = src;
    s.id = id;
    s.type = "text/javascript";
    s.async = false;

    document.body.appendChild(s);

    s.onload = function (e) {
      console.log(id + ' loaded:', src);
      cb && cb();
    }
  }

  function _addXapilyScript() {
    var xapilyScript = 'https://d3vebnggr793qr.cloudfront.net/download/js/1.1.1/xapily_storyline.min.js';
    loadScriptSync(xapilyScriptId, xapilyScript);
  }

  function _addTinCanScript(cb) {
    var tincanScript = 'https://cdn.jsdelivr.net/npm/tincanjs@0.50.0/build/tincan-min.js';
    var tincanScriptId = 'tincan-script';

    loadScriptSync(tincanScriptId, tincanScript, cb);
  }

  window.TinCan ? _addXapilyScript() : _addTinCanScript(_addXapilyScript);
})();

}

};
