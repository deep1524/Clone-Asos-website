import {header, navbar, section, footer, last} from './Import Export/navbar.js'
  
  document.getElementsByTagName("header")[0].innerHTML=header();
  document.getElementById("navbar").innerHTML=navbar();
  document.getElementById("section").innerHTML=section();
  document.getElementsByTagName("footer")[0].innerHTML=footer();
  document.getElementById("last").innerHTML=last();
  document.querySelector("#cancel").addEventListener("click", ()=>{
    console.log('i')
    
    document.querySelector("#A").removeAttribute("display", "");
  })