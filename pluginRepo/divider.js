// @name         Pointercrate Divider Plugin
// @namespace    https://github.com/PokeyYapper1991/PointercrateDarkmode
// @version      1.0
// @description  Provides a divider between the Main List and Extended List
// @author       PokeyYapper1991
// @match        https://pointercrate.com/*
// @icon         

const extDiv = '<section class="panel fade" style="overflow:hidden"><div class="flex" style="align-items: center"><div style="padding: 0px"><h2 style="text-align: center; margin: 0px; font-size: 44px;"><a style="cursor: default">★ 𝐄𝐱𝐭𝐞𝐧𝐝𝐞𝐝 𝐋𝐢𝐬𝐭 ★</a></h2></div></div></section>';

(function () {
    'use strict';

    if (window.location.href.indexOf("https://pointercrate.com/demonlist/") > -1 && window.location.href.indexOf("https://pointercrate.com/demonlist/statsviewer/) === -1) {
        const split = document.querySelector("body > div.flex.m-center.container > main > section:nth-child(78)");
        let html = extDiv;
        split.insertAdjacentHTML("afterend", html);
})()