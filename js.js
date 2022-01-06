const calc = document.querySelector(".calc");
const tablo = document.querySelector(".tablo");
const remove = document.querySelector(".remove")
const btn = document.querySelector(".btn");
const backspace = document.querySelector(".backspace");

calc.addEventListener("click", function(event){
  if(!event.target.classList.contains("btn")) return;
   const value = event.target.innerText;
   

   switch(value){
       case "C":
           tablo.innerText = "";
           break;
        case "🠔":
        tablo.innerText = tablo.innerText.slice(0,-1);
        break;
       case "=":
           tablo.innerText = eval(tablo.innerText);
           break;
        default:
            tablo.innerText += value
   }
});


const white = document.querySelector(".white");
const black = document.querySelector(".black");

white.addEventListener("click", function(){
    calc.style.background = "rgb(219, 219, 219)";
})

black.addEventListener("click", function(){
    calc.style.background = "#17171C";
})