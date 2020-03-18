chrome.tabs.onUpdated.addListener(function(_, changeInfo, _) {
    if (changeInfo) {
        if (changeInfo.status === 'loading') {
            if (changeInfo.url 
                    && !changeInfo.url.startsWith("chrome://")
                    && !changeInfo.url.startsWith("https://chrome.google.com/webstore")) {
                console.log(changeInfo);
                chrome.tabs.setZoom(undefined, 1);
                chrome.tabs.setZoomSettings(undefined, {scope: 'per-tab'});
            }
        }
    }
});