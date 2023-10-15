// ==UserScript==
// @name         YoutubeAntiAntiAdblock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stop Youtube blocking your Adblock
// @author       You
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    async function detectAndResolveAntiAdblock() {
    const popup = document.querySelector('tp-yt-paper-dialog')
    const backdrop = document.querySelector('tp-yt-iron-overlay-backdrop')
    if (popup != null) {
        popup.remove()
        backdrop.remove()
        document.querySelector('.ytp-fullscreen-button').click()
        await new Promise(r => setTimeout(r, 200));
        document.querySelector('.ytp-fullscreen-button').click()
        await new Promise(r => setTimeout(r, 200));
        document.querySelector('.ytp-play-button').click()
    }
}


setInterval(detectAndResolveAntiAdblock,100)


    // Your code here...
})();
