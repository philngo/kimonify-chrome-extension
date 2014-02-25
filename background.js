chrome.browserAction.onClicked.addListener(function(tab) {
    var kimonify_url = 'http://kimonify.kimonolabs.com/kimload?url='+encodeURIComponent(tab.url);
    chrome.tabs.update(tab.id, {url: kimonify_url});
});
