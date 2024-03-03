// background.js
const domainRedirects = {
    "aniwave.to": "https://excalidraw.com/",
    "klmanga.biz": "https://excalidraw.com/"
    // Add more domains and their corresponding redirect URLs here
};

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        for (const domain in domainRedirects) {
            if (details.url.includes(domain)) {
                return { redirectUrl: domainRedirects[domain] };
            }
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);
