// src/index.js
import "./styles/index.scss";
import "./styles/reset.scss";
import getData from "./scripts/get_data"



window.addEventListener("DOMContentLoaded", () => {
    
    
    document.getElementById("stock-search-button").onclick = function() {getData()}

    d3.csv("src/data/test.csv").then(function(data) {
        console.log(data);
    });
  
    

})
