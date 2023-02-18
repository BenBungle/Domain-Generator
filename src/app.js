/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "Grand", "El"];
  let adj = ["big", "theft", "tio"];
  let noun = ["kahuna", "auto", "aceite"];
  let extensions = [".us", ".etc", ".cl"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++)
      for (let b = 0; b < noun.length; b++)
        for (let c = 0; c < extensions.length; c++) {
          console.log(`${pronoun[i]}${adj[j]}${noun[b]}${extensions[c]}`);
          let div = document.createElement("div");
          div.innerText = `
            ${pronoun[i]}${adj[j]}${noun[b]}${extensions[c]}
            `;
          document.body.appendChild(div);
        }
  }
};
