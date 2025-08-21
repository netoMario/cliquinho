# 🖱️ Cliquinho

É um script de **autoclick** que roda em navegadores usando a extensão **Tampermonkey**.  
Feito para clicar automaticamente em botões que contenham o texto **"Início"** ou **"Iniciar"**, e repetir essa ação a cada X segundos.  

---

## 🚀 Como funciona

- O script monitora todos os `<button>` da página.
- Se encontrar um botão com o texto **"Início"** ou **"Iniciar"**, ele faz o clique automaticamente.
- A verificação é feita em intervalos definidos pela constante `intervalo` (padrão: `2000ms` = 2 segundos).
- O script **só começa a rodar** quando você ativa manualmente pelo menu do **Tampermonkey**.  
  - Você verá duas opções:  
    - **Ativar Autoclick** → inicia o processo automático.  
    - **Parar Autoclick** → interrompe o processo.

---

## 🛠️ Instalação

1. Instale a extensão **Tampermonkey**:
   - [Chrome Web Store e Brave](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/tampermonkey/)
   - [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. Atribua as permissões de desenvolvedor para o **Tampermonkey** - [Instruções](https://www.tampermonkey.net/faq.php?locale=en#Q209) 

3. Clique no ícone do Tampermonkey na barra do navegador e selecione **"Criar novo script..."**.

4. Apague tudo o que aparecer e cole o conteúdo do arquivo [`script.js`](./script.js).

5. Salve o script (atalho: `Ctrl+S` ou `Cmd+S`).

6. Depois de salvo, recarregue a página onde deseja usar o script e ative-o pelo menu do Tampermonkey:
   - **Ativar Autoclick** para começar
   - **Parar Autoclick** para encerrar

---

## ⚙️ Configuração

Se quiser mudar o tempo de verificação, edite a constante:

```javascript
const intervalo = 2000; // tempo em milissegundos
```

## 📝 Documentação do **Tampermonkey**

Por padrão, o **cliquinho** está configurado para ser ativado em todos os sites. Para essa e outras alterações, consulte a documentação da extensão:

- [Documentação](https://www.tampermonkey.net/documentation.php)





