// @name         Pointercrate Dark Theme
// @namespace    https://github.com/PokeyYapper1991/PointercratePlus
// @version      1.3
// @description  Provides a dark theme for the Pointercrate API Website
// @author       PokeyYapper1991
// @match        https://pointercrate.com/*
// @icon         

const logoRep = '<img src="https://raw.githubusercontent.com/PokeyYapper1991/PointercratePlus/main/assets/PointerPlus.png" style="height:15px">';

(function () {
    'use strict';

    var logo = document.querySelector("body > header > nav > div.nav-icon.nav-nohide > a");
    logo.innerHTML = logoRep;

    // Define the dark mode CSS rules
    const darkModeCSS = `
    :root {
        --white: #ffffff;
        --black: #000000;
        --grayDark: #202020;
        --boxCol: #303030;
    }
    
    html {
      visibility: visable !important;
    }
    
    div.tooltiptext.fade {
      background-color: var(--boxCol) !important;
      color: var(--white) !important;
    }
    
    .hover white {
      background-color: var(--black) !important;
    }
    
    body {
      background-color: var(--grayDark) !important;
    }
    
    section {
      background-color: #080808 !important;
    }
    
    header {
      background-color: var(--black) !important;
    }
    
    #editors {
      background-color: var(--boxCol) !important;
      color: var(--white) !important;
      border-radius: 25px !important;
      border-style: none !important;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }
    
    #rules {
      background-color: var(--boxCol) !important;
      color: var(--white) !important;
      border-radius: 25px !important;
      border-style: none !important;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }
    
    #submit {
      background-color: var(--boxCol) !important;
      color: var(--white) !important;
      border-radius: 25px !important;
      border-style: none !important;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }
    
    #stats {
      background-color: var(--boxCol) !important;
      color: var(--white) !important;
      border-radius: 25px !important;
      border-style: none !important;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }
    
    #discord {
      background-color: var(--boxCol) !important;
      color: var(--white) !important;
      border-radius: 25px !important;
      border-style: none !important;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }
    
    a {
      color: var(--white) !important;
    }
    
    .left {
      color: var(--black) !important;
    }
    
    section[class="panel fade"] {
      background-color: #282828 !important;
      color: var(--white) !important;
      border-style: none !important;
      border-radius: 15px !important;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
      transition: opacity 0.8s ease !important;
    }
    
    section[class="panel fade"]:hover {
      background-color: #363636 !important;
      color: var(--white) !important;
      border-style: none !important;
      border-radius: 15px !important;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
      transition: opacity 0.8s ease !important;
    }
    
    nav[class="center collapse underlined see-through"],
    [class="nav-item hover white"] {
      background-color: #222222 !important;
      color: var(--white) !important;
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
    
    .hover,
    .hover:hover:not(.disabled):not([disabled]) {
      transition: opacity 0.8s ease !important;
    }
    
    #statsviewers {
      background-color: var(--boxCol) !important;
      border-style: none !important;
      border-radius: 20px !important;
    }
    
    #stats-viewer-pagination li i {
      padding-left: 5px !important;
      color: var(--white) !important;
      font-size: 70% !important;
      font-variant: small-caps !important;
    }
    
    #lists {
      background-color: var(--boxCol) !important;
      border-style: none !important;
      border-radius: 20px !important;
    }
    
    a[class="blue hover button"],
    [class="blue hover button js-scroll"] {
      background-color: rgb(4, 90, 55) !important;
      color: var(--white) !important;
    }
    
    .white {
      background-color: var(--grayDark) !important;
      color: var(--white) !important;
    }
    
    .white:hover {
      background-color: var(--boxCol) !important;
      color: var(--white) !important;
    }
    
    body > div:first-child {
      background-image: url("https://raw.githubusercontent.com/PokeyYapper1991/PointercratePlus/main/assets/squares3.png") !important;
    }
    
    section[class="panel fade js-scroll-anim"] {
      background-color: #282828 !important;
      color: var(--white) !important;
      border-style: none !important;
      border-radius: 15px !important;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }
    
    div[class="panel fade js-scroll-anim js-collapse"],
    [class="panel fade js-scroll-anim js-collapse active"] {
      background-color: #282828 !important;
      background: #282828 !important;
      color: var(--white) !important;
      border-style: none !important;
      border-radius: 15px !important;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }
    
    .info-yellow,
    .info-green {
      font-family: montserrat, sans-serif !important;
      text-align: center !important;
      background: #353535 !important;
      border-style: none !important;
      border-radius: 15px !important;
      padding: 5px 15px !important;
      color: var(--white) !important;
      margin: 25px 0 !important;
      flex-grow: 1 !important;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }
    
    .panel {
      background: #282828 !important;
      color: var(--white) !important;
      border-style: none !important;
      border-radius: 15px !important;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5) !important;
    }
    
    .arrow {
      color: var(--white) !important;
    }
    
    .arrow:before,
    .arrow:after {
      position: absolute !important;
      content: "" !important;
      display: inline-block !important;
      width: 12px !important;
      height: 3px !important;
      background-color: var(--white) !important;
      transition: 0.4s ease !important;
    }
    
    .blue {
      background-color: rgb(4, 90, 55) !important;
      color: var(--white) !important;
    }
    
    .blue.hover:not(.disabled):not([disabled]):hover,
    .blue.active {
      background-color: rgb(10, 113, 71) !important;
      color: var(--white) !important;
    }
    
    .blue.hover:not(.disabled):not([disabled]):active {
      background-color: rgb(10, 113, 71) !important;
      color: var(--white) !important;
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
      color: var(--white) !important;
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
    
    .information-banner > * {
      background: #282828 !important;
      padding: 50px 20px !important;
      max-width: 1072px !important;
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      box-shadow: 0 0 7px 5px #282828 !important;
      color: var(--white) !important;
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
      color: var(--white) !important;
      font-weight: 700 !important;
      position: relative !important;
    }
    
    .search.seperated input {
      color: var(--white) !important;
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