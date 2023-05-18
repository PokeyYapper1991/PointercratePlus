// @name         Pointercrate Dark Theme
// @namespace    https://github.com/PokeyYapper1991/PointercratePlus
// @version      1.0
// @description  Provides a dark theme for the Pointercrate API Website
// @author       PokeyYapper1991
// @match        https://pointercrate.com/*
// @icon         

const logoRep = '<img src="https://raw.githubusercontent.com/PokeyYapper1991/PointercratePlus/main/assets/PointerPlus.png" style="height:15px">';

const acacia = 'https://raw.githubusercontent.com/PokeyYapper1991/PointercratePlus/main/assets/TKC.png';

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
    const darkModeCSS = `
    html {
        visibility: visable !important;
    }

    div.tooltiptext.fade {
        background-color: #303030 !important;
        color: #ffffff !important;
    }

    .hover white {
        background-color: black !important;
    }

    body {
        background-color: #202020 !important;
    }

    section {
        background-color: #080808 !important;
    }

    header {
        background-color: black !important;
    }

    #editors {
        background-color: #303030 !important;
        color: aliceblue !important;
        border-radius: 25px !important;
        border-style: none !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }

    #rules {
        background-color: #303030 !important;
        color: aliceblue !important;
        border-radius: 25px !important;
        border-style: none !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }

    #submit {
        background-color: #303030 !important;
        color: aliceblue !important;
        border-radius: 25px !important;
        border-style: none !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }

    #stats {
        background-color: #303030 !important;
        color: aliceblue !important;
        border-radius: 25px !important;
        border-style: none !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }

    #discord {
        background-color: #303030 !important;
        color: aliceblue !important;
        border-radius: 25px !important;
        border-style: none !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }

    a {
        color: aliceblue !important;
    }

    .left {
        color: #000 !important;
    }

    section[class="panel fade"] {
        background-color: #282828 !important;
        color: azure !important;
        border-style: none !important;
        border-radius: 15px !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
        transition: opacity 0.8s ease !important;
    }

    section[class="panel fade"]:hover {
        background-color: #363636 !important;
        color: azure !important;
        border-style: none !important;
        border-radius: 15px !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
        transition: opacity 0.8s ease !important;
    }

    nav[class="center collapse underlined see-through"],
    [class="nav-item hover white"] {
        background-color: #222 !important;
        color: azure !important;
        border-style: none !important;
    }

    .overlay {
        display: none !important;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        background-color: rgba(0, 0, 0, 0.8) !important;
        z-index: 1083458237 !important;
    }

    .hover, .hover:hover:not(.disabled):not([disabled]) {
        transition: opacity .8s ease !important;
    }

    #statsviewers {
        background-color: #303030 !important;
        border-style: none !important;
        border-radius: 20px !important;
    }

    #stats-viewer-pagination li i {
        padding-left: 5px !important;
        color: #fff !important;
        font-size: 70% !important;
        font-variant: small-caps !important;
    }

    #lists {
        background-color: #303030 !important;
        border-style: none !important;
        border-radius: 20px !important;
    }

    a[class="blue hover button"], [class="blue hover button js-scroll"] {
        background-color: rgb(4, 90, 55) !important;
        color: #ffffff !important;
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
        background-image:url("https://raw.githubusercontent.com/PokeyYapper1991/PointercratePlus/main/assets/squares3.png") !important;
    }

    section[class="panel fade js-scroll-anim"] {
        background-color: #282828 !important;
        color: azure !important;
        border-style: none !important;
        border-radius: 15px !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }

    div[class="panel fade js-scroll-anim js-collapse"], [class="panel fade js-scroll-anim js-collapse active"] {
        background-color: #282828 !important;
        background: #282828 !important;
        color: azure !important;
        border-style: none !important;
        border-radius: 15px !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }

    .info-yellow, .info-green {
        font-family: montserrat, sans-serif !important;
        text-align: center !important;
        background: #353535 !important;
        border-style: none !important;
        border-radius: 15px !important;
        padding: 5px 15px !important;
        color: #ffffff !important;
        margin: 25px 0 !important;
        flex-grow: 1 !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }

    .panel {
        background: #282828 !important;
        color: azure !important;
        border-style: none !important;
        border-radius: 15px !important;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }

    .arrow {
        color: #ffffff !important;
    }

    .arrow:before, .arrow:after {
        position: absolute !important;
        content: "" !important;
        display: inline-block !important;
        width: 12px !important;
        height: 3px !important;
        background-color: #fff !important;
        transition: .4s ease !important;
    }

    .blue {
        background-color: rgb(4, 90, 55) !important;
        color: #ffffff !important;
    }

    .blue.hover:not(.disabled):not([disabled]):hover, .blue.active {
        background-color: rgb(10, 113, 71) !important;
        color: #ffffff !important;
    }

    .blue.hover:not(.disabled):not([disabled]):active {
        background-color: rgb(10, 113, 71) !important;
        color: #ffffff !important;
    }

    code {
    background: rgba(0, 0, 0, 0.2) !important;
    border: none !important;
    }

    th {
        background: #222222 !important;
    }

    tr {
        background: #252525 !important;
    }

    tr:nth-child(even) {
        background: #232323 !important;
    }

    tr:nth-child(odd) {
        background: #292929 !important;
    }

    a.link {
        color: rgb(180, 85, 0) !important;
    }

    a.link:hover {
        color: rgb(255, 120, 0) !important;
    }

    #history-table tr {
        background: rgb(32, 32, 32) !important;
        color: azure !important;
    }

    #history-table tr.moved-up {
        background: #074d07 !important;
        color: #dfd !important;
    }

    #history-table tr.moved-down {
        background: #4d0707 !important;
        color: #fdd !important;
    }

    /* Front Page */

    .information-banner>* {
        background: #282828 !important;
        padding: 50px 20px !important;
        max-width: 1072px !important;
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        box-shadow: 0 0 7px 5px #282828 !important;
        color: azure !important;
    }

    .information-banner {
        background-color: rgba(0, 0, 0, 0) !important;
        display: flex !important;
        justify-content: center !important;
        font-size: 110% !important;
    }

    .information-stripe {
        background: rgb(0, 73, 43) !important;
        background-color: rgb(0, 73, 43) !important;
        text-align: center !important;
        color: #ffffff !important;
        font-weight: 700 !important;
        position: relative !important;
    }

    .search.seperated input {
    color: #ffffff !important;
    }
    `;

    // Create a new style element with the dark mode CSS rules
    const styleElement = document.createElement('style');
    styleElement.textContent = darkModeCSS;

    // Create a URL for the style element
    const styleUrl = URL.createObjectURL(new Blob([styleElement.textContent], { type: 'text/css' }));

    // Create a link element with the style URL
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = styleUrl;

    // Find the first stylesheet in the document head
    const firstStylesheet = document.head.querySelector('link[rel="stylesheet"], style');
    const firstMeta = document.head.querySelector('meta');

    // Insert the link element before the first stylesheet
    document.head.insertBefore(linkElement, document.head.querySelector('meta'));
    document.head.insertBefore(linkElement, firstStylesheet);
    document.head.appendChild(styleElement);
})();