// @name         Pointercrate Dark Theme
// @namespace    https://github.com/PokeyYapper1991/PointercrateDarkmode
// @version      1.0
// @description  Provides a dark theme for the Pointercrate API Website
// @author       PokeyYapper1991
// @match        https://pointercrate.com/*
// @icon         

const logoRep = '<img src="https://raw.githubusercontent.com/PokeyYapper1991/PointercrateDarkmode/main/images/PointerPlus.png" style="height:15px">';

const acacia = 'https://raw.githubusercontent.com/PokeyYapper1991/PointercrateDarkmode/main/images/TKC.png';

const acaciaHide = '<li><a target="_blank" href="https://www.youtube.com/@acaciadoor"><i>Acacia</i></a></li>';

(function () {
    'use strict';

    if (window.location.href.indexOf("https://pointercrate.com/demonlist/") > -1 && window.location.href.indexOf("https://pointercrate.com/demonlist/statsviewer/") === -1) {
        const acaciaHelpy = document.querySelector("#editors > ul:nth-child(6) > li:nth-child(5)");
        let html = acaciaHide;
        acaciaHelpy.insertAdjacentHTML("afterend", html);
}

    var logo = document.querySelector("body > header > nav > div.nav-icon.nav-nohide > a");
    logo.innerHTML = logoRep;

    // Define the dark mode CSS rules
    const darkModeCSS = 
    `
    .hover white {
        background-color: black;
    }

    body {
        background-color: #202020;
    }

    section {
        background-color: #080808;
    }

    header {
        background-color: black;
    }

    #editors {
        background-color: #303030;
        color: aliceblue;
        border-radius: 25px;
        border-style: none !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    }

    #rules {
        background-color: #303030;
        color: aliceblue;
        border-radius: 25px;
        border-style: none !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    }

    #submit {
        background-color: #303030;
        color: aliceblue;
        border-radius: 25px;
        border-style: none !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    }

    #stats {
        background-color: #303030;
        color: aliceblue;
        border-radius: 25px;
        border-style: none !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    }

    #discord {
        background-color: #303030;
        color: aliceblue;
        border-radius: 25px;
        border-style: none !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    }

    a {
        color: aliceblue;
    }

    .left {
        color: #000;
    }

    section[class="panel fade"] {
        background-color: #282828;
        color: azure;
        border-style: none !important;
        border-radius: 15px;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
        transition: opacity 0.8s ease;
    }

    section[class="panel fade"]:hover {
        background-color: #363636;
        color: azure;
        border-style: none !important;
        border-radius: 15px;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
        transition: opacity 0.8s ease;
    }

    nav[class="center collapse underlined see-through"],
    [class="nav-item hover white"] {
        background-color: #222;
        color: azure;
        border-style: none !important;
    }

    .overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1083458237
    }

    .hover, .hover:hover:not(.disabled):not([disabled]) {
        transition: opacity .8s ease
    }

    #statsviewers {
        background-color: #303030 !important;
        border-style: none !important;
        border-radius: 20px !important;
    }

    #stats-viewer-pagination li i {
        padding-left: 5px;
        color: #fff;
        font-size: 70%;
        font-variant: small-caps
    }

    #lists {
        background-color: #303030 !important;
        border-style: none !important;
        border-radius: 20px !important;
    }

    a[class="blue hover button"], [class="blue hover button js-scroll"] {
        background-color: rgb(4, 90, 55);
        color: #ffffff;
    }

    .white {
        background-color: #202020 !important;
        color: azure !important;
    }

    .white:hover {
        background-color: #303030 !important;
        color: azure !important;
    }

    body>div:first-child {
        background-image:url("https://raw.githubusercontent.com/PokeyYapper1991/PointercrateDarkmode/main/images/squares39.png");
    }

    section[class="panel fade js-scroll-anim"] {
        background-color: #282828 !important;
        color: azure;
        border-style: none !important;
        border-radius: 15px;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);

    }

    div[class="panel fade js-scroll-anim js-collapse"], [class="panel fade js-scroll-anim js-collapse active"] {
        background-color: #282828 !important;
        background: #282828 !important;
        color: azure;
        border-style: none !important;
        border-radius: 15px;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);

    }

    .info-yellow, .info-green {
        font-family: montserrat, sans-serif;
        text-align: center;
        background: #353535;
        border-style: none !important;
        border-radius: 15px;
        padding: 5px 15px;
        color: #ffffff;
        margin: 25px 0;
        flex-grow: 1;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    }

    .panel {
        background: #282828 !important;
        color: azure !important;
        border-style: none !important;
        border-radius: 15px;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);

    }

    .arrow {
        color: #ffffff !important;
        opacity
    }

    .arrow:before, .arrow:after {
        position: absolute;
        content: "";
        display: inline-block;
        width: 12px;
        height: 3px;
        background-color: #fff;
        transition: .4s ease;
    }

    .blue {
        background-color: rgb(4, 90, 55);
        color: #ffffff;
    }

    .blue.hover:not(.disabled):not([disabled]):hover, .blue.active {
        background-color: rgb(10, 113, 71);
        color: #ffffff;
    }

    .blue.hover:not(.disabled):not([disabled]):active {
        background-color: rgb(10, 113, 71);
        color: #ffffff;
    }

    code {
    background: rgba(0, 0, 0, 0.2);
    border: none;
    }

    th {
        background: #222222;
    }

    tr {
        background: #252525;
    }

    tr:nth-child(even) {
        background: #232323;
    }

    tr:nth-child(odd) {
        background: #292929;
    }

    a.link {
        color: rgb(180, 85, 0);
    }

    a.link:hover {
        color: rgb(255, 120, 0);
    }

    #history-table tr {
        background: rgb(32, 32, 32);
        color: azure;
    }

    #history-table tr.moved-up {
        background: #074d07;
        color: #dfd;
    }

    #history-table tr.moved-down {
        background: #4d0707;
        color: #fdd;
    }

    /* Front Page */

    .information-banner>* {
        background: #282828 !important;
        padding: 50px 20px;
        max-width: 1072px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 7px 5px #282828;
        color: azure;
    }

    .information-banner {
        background-color: rgba(0, 0, 0, 0);
        display: flex;
        justify-content: center;
        font-size: 110%
    }

    .information-stripe {
        background: rgb(0, 73, 43);
        background-color: rgb(0, 73, 43);
        text-align: center;
        color: #ffffff;
        font-weight: 700;
        position: relative
    }

    /* body > div.flex.m-center.container > main > section:nth-child(39) > div > div.thumb.ratio-16-9.js-delay-css:hover { 
        background-image: url("https://raw.githubusercontent.com/PokeyYapper1991/PointercrateDarkmode/main/images/TKC.png") !important;
        } */

    .search.seperated input {
    color: #ffffff;
    }
    `;

    // Create a new style element with the dark mode CSS rules
    const styleElement = document.createElement('style');
    styleElement.innerHTML = darkModeCSS;

    // Add the style element to the document head
    document.head.appendChild(styleElement);
}

)();