const UrlParse = require('url-parse');
const ParseDomain = require('parse-domain');


/*
 * get Global URL
 */

const Globals = [];
const productionUrl = 'https://www.lib.utk.edu/';

const menuContainerElement = document.getElementById('utk-lib-header');
const SubsiteGlobals = {
    'disableSearch': menuContainerElement.getAttribute('data-disable-search'),
    'pageTitle': menuContainerElement.getAttribute('data-page-title'),
    'siteURL': menuContainerElement.getAttribute('data-url'),
    'libChat': menuContainerElement.getAttribute('data-libchat')
};

Globals.URL = SubsiteGlobals.siteURL; // left null to force relative endpoint to wp instance
Globals.libChat = SubsiteGlobals.libChat;
Globals.pageTitle = SubsiteGlobals.pageTitle;
Globals.disableSearch = SubsiteGlobals.disableSearch;

/*
 * checks if local URL, if true just get production to avoid HTTPS cert issues.
 */

let localUrl = ParseDomain(UrlParse(Globals.URL).host, {
    customTlds: /localhost|\.test/
});

if (localUrl)
    Globals.URL = productionUrl;


/*
 * export URL string
 */

export default Globals;
