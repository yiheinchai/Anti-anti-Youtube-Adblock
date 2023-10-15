async function detectAndResolveAntiAdblock() {
    const popup = document.querySelector('tp-yt-paper-dialog')
    const backdrop = document.querySelector('tp-yt-iron-overlay-backdrop')
    if (popup != null) {
        popup.remove()
        backdrop.remove()
        document.querySelector('.ytp-fullscreen-button').click()
        await new Promise(r => setTimeout(r, 200));
        document.querySelector('.ytp-fullscreen-button').click()
    }
}


setInterval(detectAndResolveAntiAdblock,100)
