console.log("[YT Shorts Closer] content script loaded");

function extractShortsId() {
  const match = location.pathname.match(/^\/shorts\/([^\/?#]+)/);
  return match ? match[1] : null;
}

let lastId = extractShortsId();

setInterval(() => {
  const currentId = extractShortsId();
  if (currentId && currentId !== lastId) {
    console.log(`[YT Shorts Closer] ID changed: ${lastId} → ${currentId}`);
    chrome.runtime.sendMessage({ closeTab: true });
    lastId = currentId;
  }
}, 100);
