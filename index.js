  const values=document.querySelector(".mybox");
   


          function update(){
            
             const inputvalue=document.getElementById("input").value
             if(inputvalue == false){
               alert("please enter any value");
             }
            else if(inputvalue){
            const mydiv=document.createElement("div");
            mydiv.setAttribute("class","js_div");
          const pera=document.createElement("p");
          pera.innerText=inputvalue;
          const button=document.createElement("p");
          button.innerHTML=`<button onclick ="deletebutton(this)" class="buttons"  >Delete</button>`;
               values.appendChild(mydiv);
               mydiv.appendChild(pera);
            mydiv.appendChild(button);
               input.value="";
          }
        }
             function deletebutton(elem){
              elem.parentElement.parentElement.remove();
        }
        
        function mode(){
    let model=document.querySelector(".mybox");
     model.classList.toggle("active");
}

