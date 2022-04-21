'use strict';

if (window.location.href.indexOf('index.html') > 0) {
  window.location = window.location.href.replace('index.html', '');
}

if (typeof hljs !== 'undefined') {
  hljs.initHighlightingOnLoad();
}

/* Loads JS and CSS depending on domain (github or localhost) */
var baseURL = window.location.hostname.indexOf('github.') !== -1 ? '//rawcdn.githack.com/Alex-D/Cookies-EU-banner/2.0.0/' : '../../../';
document.write('<link rel="stylesheet" href="' + baseURL + 'css/cookies-eu-banner.default.css"/>');
document.write('<script src="' + baseURL + 'dist/cookies-eu-banner.min.js"></script>');

