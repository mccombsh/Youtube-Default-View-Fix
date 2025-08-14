(function() {
    'use strict';

    function switchToDefaultView() {
        document.querySelector('button.ytp-size-button')?.click();
    }

    // Run once after a delay
    setTimeout(switchToDefaultView, 3000);

    // Monitor for changes and revert theater mode if applied
    const observer = new MutationObserver(() => {
        if (document.querySelector('ytd-watch-flexy[theater]')) {
            switchToDefaultView();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();