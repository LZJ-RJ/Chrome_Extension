chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color:'#3aa757'}, function(params) {
        console.log('The color is green tmp.');
    })
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {schemes: ['https']},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });