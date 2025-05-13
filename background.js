chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.closeTab && sender.tab && sender.tab.id) {
    console.log("[YT Shorts Closer] Closing tab:", sender.tab.id);
    chrome.tabs.remove(sender.tab.id);
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes("youtube.com/shorts/")) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["content.js"]
    });
  }
});
