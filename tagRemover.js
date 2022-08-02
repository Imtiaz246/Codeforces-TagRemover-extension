// starting in the Name of ALLAH(SWT), the most Kind & the most Merciful
var link = window.location.toString();
var pos = link.indexOf("https://codeforces.com/problemset/problem/");
var pos1 = link.indexOf("https://codeforces.com/problemset");
var pos2 = link.indexOf("https://codeforces.com/contest/");
var Home = link.indexOf("https://codeforces.com/");

if (Home != -1) {
   document.body.style.backgroundColor = "rgb(229 229 182)";
}
if (pos != -1 || pos2 != -1) {
   console.log("hello bhai")
   var sidebar = document.getElementById("sidebar").children;
   var sidebarProblemTagSec, found = false;
   for (i = 0; i < sidebar.length; i++) {
      classname = sidebar[i].className;
      if (classname.localeCompare("roundbox sidebox") == 0) {
         var check = sidebar[i].children;
         var text = check[2].textContent.toString();
         console.log(text);
         if (text.indexOf("Problem tags") == 2) {
            found = true;
            sidebarProblemTagSec = sidebar[i].children;
         }
      }
   }

   if (found) {
      // creating toogle button
      var label = document.createElement("label");
      label.classList.add("switch");
      var input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.onclick = function() {
         if (input.checked) sidebarProblemTagSec[3].style.display = "block";
         else sidebarProblemTagSec[3].style.display = "none";
      }
      var span = document.createElement("span");
      span.classList.add("round", "slider");
      label.appendChild(input);
      label.appendChild(span);
      // adding the custom button
      sidebarProblemTagSec[2].appendChild(label);
      sidebarProblemTagSec[3].style.display = "none";
               

      // loading css for button
      var link = document.createElement('link'); 
      link.rel = 'stylesheet'; 
      link.type = 'text/css';
      link.href = 'styleTagRemover.css'; 
      document.getElementsByTagName('HEAD')[0].appendChild(link);
   }

}
function hideTagInit(table) {
   for (i = 1; i < table.length; i++) {
      innerRow = table[i].children;
      innerRow = innerRow[1].children;
      innerRow[1].style.display = "none";
   }
}
if (pos1 != -1) {
   var sidebar = document.querySelector("#sidebar");
   var table = document.querySelector(".problems").children;
   table = table[0].children;
   hideTagInit(table);
   sidebar = sidebar.children[4];

   // creating toogle button
   var label = document.createElement("label");
   label.classList.add("switch");
   var input = document.createElement("input");
   input.setAttribute("type", "checkbox");
   input.onclick = function() {
      for (i = 1; i < table.length; i++) {
         innerRow = table[i].children;
         innerRow = innerRow[1].children;
         if (input.checked) innerRow[1].style.display = "block";
         else innerRow[1].style.display = "none";
      }
   };
   var span = document.createElement("span");
   span.classList.add("round", "slider");
   label.appendChild(input);
   label.appendChild(span);
   // adding the custom button
   sidebar.children[2].appendChild(label);

   // loading css for button
   var link = document.createElement('link'); 
   link.rel = 'stylesheet'; 
   link.type = 'text/css';
   link.href = 'styleTagRemover.css'; 
   document.getElementsByTagName('HEAD')[0].appendChild(link);
}

