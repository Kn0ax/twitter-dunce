// ==UserScript==
// @name         Twitter Dunce
// @namespace    https://lewistehminerz.dev/
// @version      0.1
// @description  Bought Twitter Blue? You're a dunce!
// @author       You
// @match        https://twitter.com/*
// @icon         data:image/webp;base64,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
// @grant        none
// ==/UserScript==

// dunce hat from the noun project - https://thenounproject.com/icon/dunce-cap-126405/
const ICON = 'data:image/webp;base64,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;

const open = XMLHttpRequest.prototype.open;
const send = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.send = function() {
    if (this.__url.match(/UserByScreenName/)) {
        this.addEventListener('load', () => {
            const responseData = JSON.parse(this.response);
            if (responseData.data.user.result.is_blue_verified) {
                console.log(responseData.data.user.result);

                // twitter's frontend is hot garbage
                const toReplace = [
                    document.querySelector('h2 > div > div > div > div > span:nth-child(2)'), // header
                    document.querySelector('div[aria-label="Provides details about verified accounts."]'), // user profile
                    ...document.querySelectorAll(`a[href="/${responseData.data.user.result.legacy.screen_name}"] > div > div:nth-child(2)`) // tweets
                ];

                for (const replacement of toReplace) {
                    replacement.innerHTML = `<img src="${ICON}" height="24" style="padding-left: 3px">`;
                }
            }
        });
    }

    send.apply(this, arguments);
}

XMLHttpRequest.prototype.open = function(_, url) {
    this.__url = url;
    return open.apply(this, arguments);
}
