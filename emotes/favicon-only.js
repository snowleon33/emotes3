// ==UserScript==
// @name         CyTubePlus - Solo cambiar favicon
// @description  Cambia el icono de la pestaña sin alterar nada más.
// ==/UserScript==

(function() {
    'use strict';

    // URL del icono personalizado (debe ser accesible públicamente)
    const faviconURL = 'https://snowleon33.github.io/emotes3/emotes/iconget1.png'; // 🎉 ejemplo de prueba

    // Elimina cualquier favicon existente
    const oldFavicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
    oldFavicons.forEach(f => f.remove());

    // Crea y agrega el nuevo favicon
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.type = 'image/png';
    newFavicon.href = faviconURL;
    document.head.appendChild(newFavicon);
})();
