/*  ************************************************************************
 * Created by Wontae Han, Alejandro Romero, Shafayat Alam and Jeff Schrock.
 * Copyright © 2018 De-Bux. All rights reserved.
 **************************************************************************/

console.log('background.js');
/* eslint no-var: off, camelcase: off, max-len: off, prefer-arrow-callback: off,
no-useless-return: off, max-len: off, no-console: off, prefer-const: off,
no-unused-vars: off, eqeqeq: off */
const connections = {};

// Background page -- background.js
// inject content script when dev tools are opened
chrome.extension.onConnect.addListener((devToolsConnection) => {
  // assign the listener function to a variable so we can remove it later
  var devToolsListener = (message, sender, sendResponse) => {
    // Inject a content-script
    chrome.tabs.executeScript(message.tabId, { file: 'content-script.js' });
  };
  // add the listener
  devToolsConnection.onMessage.addListener(devToolsListener);

  devToolsConnection.onDisconnect.addListener(() => {
    devToolsConnection.onMessage.removeListener(devToolsListener);
  });
});

chrome.extension.onConnect.addListener(function (port) {
  let extensionListener = (message, sender, res) => {
    // creates a new key/value pair of current window & devtools tab when a new devtools tab is opened
    if (message.name == 'connect' && message.tabId) {
      // sends a message to content-scripts when a new tab is opened to instantiate the tree
      chrome.tabs.sendMessage(message.tabId, message);
      connections[message.tabId] = port;
      return;
    }
    // other message handling
  };
  // Listens to messages sent from devtools
  port.onMessage.addListener(extensionListener);
  port.onDisconnect.addListener(function (port) {
    port.onMessage.removeListener(extensionListener);

    let tabs = Object.keys(connections);
    for (let i = 0; i < tabs.length; i += 1) {
      if (connections[tabs[i]] == port) {
        delete connections[tabs[i]];
        break;
      }
    }
  });
});

// Receives message from content-scripts and checks for valid connections before posting to devtools
chrome.extension.onMessage.addListener(function (req, sender, res) {
  if (sender.tab) {
    let tabId = sender.tab.id;
    if (tabId in connections) {
      connections[tabId].postMessage(req);
    }
  }
  return true;
});
