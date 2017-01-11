// ==UserScript==
// @name        Веломания
// @namespace   веломания, куплю, продам, чтонового
// @description Удаление куплю-продам из "Что нового?"
// @include     http://forum.velomania.ru/search.php*
// @match       http://forum.velomania.ru/search.php*
// @version     1.2
// @grant       none
// @author      BaNru
// @license     GNU GPL v3
// ==/UserScript==

var els = document.querySelectorAll('.prefix.understate'),
	elar = [
		'Продам',
		'Куплю',
		'Продаю хардтейл',
		'Продаю двухподвес'
	];

[].forEach.call(els, function(el) {
	var elt = el.textContent.trim();
	if(elar.indexOf(elt) >= 0){
    	el.closest('li').remove();
  	}
});