// ==UserScript==
// @name         Cliquinho
// @namespace    http://tampermonkey.net/
// @version      1.0
// @author       Mário Neto
// @description  Script para clicar automaticamente num <button>
// @match        *://*/*
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    const alvo = ["iniciar", "início"];
    const intervalo = 2000; // milissegundos entre cada verificação
    let intervaloID = null;

    function normalizarTexto(txt) {
        return (txt || '')
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    function procurarEClickar() {
        const botoes = document.querySelectorAll("button");
        botoes.forEach(botao => {
            // percorre cada span dentro do botão
            const spans = botao.querySelectorAll("span");
            spans.forEach(span => {
                const texto = normalizarTexto(span.textContent);
                if (alvo.map(t => normalizarTexto(t)).includes(texto)) {
                    botao.click();
                    console.log("Botão clicado:", botao.textContent.trim());
                }
            });
        });
    }

    function startAutoClick() {
        if (!intervaloID) {
            intervaloID = setInterval(procurarEClickar, intervalo);
            console.log("AutoClick ativado!");
        }
    }

    function stopAutoClick() {
        if (intervaloID) {
            clearInterval(intervaloID);
            intervaloID = null;
            console.log("AutoClick desativado!");
        }
    }

    GM_registerMenuCommand("Ativar AutoClick", startAutoClick);
    GM_registerMenuCommand("Parar AutoClick", stopAutoClick);

})();
