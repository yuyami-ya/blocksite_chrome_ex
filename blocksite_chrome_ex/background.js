// background.js
// const domainRedirects = {
//     "aniwave.to": "https://excalidraw.com/",
//     "klmanga.biz": "https://excalidraw.com/"
// };
const domainRedirects = localStorage["domain_redirects"]

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
