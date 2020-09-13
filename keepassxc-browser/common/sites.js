'use strict';

const PREDEFINED_SITELIST = [
    'https://accounts.google.com/*',
    'https://www.paypal.com/*',
    'https://*.live.com/*',
    'https://www.amazon.com/*',
    'https://www.amazon.de/*',
    'https://www.amazon.co.uk/*',
    'https://signin.aws.amazon.com/*',
    'https://www.upwork.com/ab/*',
    'https://home.personalcapital.com/*',
    'https://auth.services.adobe.com/*',
    'https://idmsa.apple.com/*',
    'https://*.soundcloud.com/*',
    'https://icloud.com/*',
    'https://signin.ebay.de/*',
    'https://signin.ebay.com/*'
];

const kpxcSites = {};
kpxcSites.googlePasswordFormUrl = 'https://accounts.google.com/signin/v2/challenge/password';
kpxcSites.googleUrl = 'https://accounts.google.com';
kpxcSites.savedForm = undefined;

// Handles a few exceptions for certain sites where password form is inside a div
// or another element that is not detected directly. Triggered by MutationObserver.
// Returns true if an Element has a matching classList.
kpxcSites.exceptionFound = function(classList) {
    if (!classList || classList.length === 0) {
        return;
    }

    // Apple ID
    if (document.location.origin === 'https://idmsa.apple.com'
        && [ 'password', 'form-row', 'show-password' ].every(c => classList.contains(c))) {
        return true;
    }

    return false;
};
