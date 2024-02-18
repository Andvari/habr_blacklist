// ==UserScript==
// @name           blacklist habr
// @namespace      habr
// @version        1.1
// @description    Clear the main page of habr.com from blacklisted authors
// @match          https://habr.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @icon           http://habr.com/favicon.ico
// @grant          none
// ==/UserScript==

var blacklist=[];
// populate blacklist with you authors
blacklist.push('author');
const articles = document.querySelectorAll('article');
for(const article of articles){
    var author = article.getElementsByClassName('tm-user-info__userpic')[0];
    var name = author.attributes.getNamedItem('title').value;
    if(blacklist.includes(name)){
        article.remove();
    }
}
