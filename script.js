
//hamburger section

var menu = document.getElementsByClassName("menu")[0]
var list = document.getElementsByTagName("ul")[0]

menu.addEventListener("click", (e) => {
  
    if(e.target.getAttribute("src") == 'assets/shared/mobile/icon-hamburger.svg')
  {  e.target.src = 'assets/shared/mobile/icon-close.svg'
     list.style.display = "flex" 
     
    }
  else {
    e.target.src = 'assets/shared/mobile/icon-hamburger.svg'
    list.style.display = ""
  }

})



var inputs = document.getElementsByTagName("input")
var textarea = document.getElementsByTagName("textarea")[0]
var submitBtn = document.getElementById("submit")


submitBtn.addEventListener("click", (e) => {
   
   for(let i=0; i < inputs.length -1 ; i++)
   { 
        if(inputs[i].value == "") {
         inputs[i].placeholder = "Can't be empty"
         e.preventDefault()
        }
   }
   if(textarea.value == "")
   {
     textarea.placeholder = " Can't be empty"
     e.preventDefault()
   }
 
})