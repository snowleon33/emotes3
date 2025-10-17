// ==UserScript==
// @name         CyTubePlus - Favicon robusto
// @description  Cambia el favicon del canal asegurándose de que se aplique después de que se cargue.
// ==/UserScript==

(function() {
    'use strict';

    const faviconURL = 'https://raw.githubusercontent.com/snowleon33/emotes3/main/emotes/iconget1.png'; // tu icono

    function setFavicon() {
        // eliminar los existentes
        document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]').forEach(f => f.remove());

        // agregar el nuevo
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.href = faviconURL;
        document.head.appendChild(link);
    }

    // aplicar inmediatamente
    setFavicon();

    // observar cambios en el head, por si CyTube agrega un favicon después
    const observer = new MutationObserver(setFavicon);
    observer.observe(document.head, { childList: true });
})();
