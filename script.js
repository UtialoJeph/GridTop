function cutTopheader(){
    document.getElementById("upperheader").style.display="none";
}

window.addEventListener('scroll', reveal);

function reveal(){
     var reveals=document.querySelectorAll('.reveal');
     for(var i=0;i < reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
     }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.body.style.overflow = "hidden";
}
function openForm_inq() {
  document.getElementById("myForm-inquiry").style.display = "block";
  document.body.style.overflow = "hidden";
}
function openForm_hello() {
  document.getElementById("myForm-hello").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeForm() {
  document.body.style.overflow = "visible";
  document.getElementById("myForm").style.display = "none";
  }
 function closeForm_inq() {
  document.body.style.overflow = "visible";
  document.getElementById("myForm-inquiry").style.display = "none";
   }
 function closeForm_hello() {
  document.body.style.overflow = "visible";
  document.getElementById("myForm-hello").style.display = "none";
   }

   /*
   Loader
    */
  
   const load = document.querySelector('.loader');
   window.addEventListener("load",
   function() {
    setTimeout(function(){
    load.style.display="none";
       },5000)
});


/*clears input content from forms after clicking submit or closing the form
let btnClear = document.querySelector("submit");
let inputs = document.querySelectorAll("input");

btnClear.addEventListener('click',()=>{
  inputs.forEach(input=> input.value='');
}

);
*/
function cutMobilenav(){
document.getElementById("mobilenav").style.display='none';
}
function openMobilenav(){
  document.getElementById("mobilenav").style.display='block';
  }

  //Gets the desired card needed by our esteemd customer and displays it to the screen.
  let filters = {};
  document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.filter-button').forEach((filter)=>{
  filter.addEventListener('click',(e)=>{
  e.target.classList.toggle('active');
  let target = '' + e.target.getAttribute("data-target");
  if(!filters[target]){
  filters[target] = true
  }else{
  delete filters[target]
  }
  document.querySelectorAll('.card').forEach((card)=>{
  if(Object.keys(filters).length === 0){
  card.style.display = "block";
  } else{
  if(filters[card.getAttribute("data-id")]){
  card.style.display = "block";
  }else{
  card.style.display = "none";
  }  
  }
  })
  })
  })
  });
  //------ The end of the card ------
  //Change  first button on click

  // ----- Change Banner buttons bg color on click -----
  var count=0;
  function bgFirst(x){
    
     var x;
     if(x==1){
        count=count+1;
     }
     if(count==1){
        document.getElementById("bg").style.background="rgb(0, 116, 248)";
     }
     else if(count==2){
        document.getElementById("bg").style.background="black";
        count=0;
     }
  }
  
  
  //Change  second button on click
  var y=0;
  function bgSecond(a){
  var a;
     if(a==1){
        y=y + 1;
     }
     if(y==1){
        document.getElementById("bg2").style.background="rgb(0, 116, 248)";
     }
     else if(y==2){
        document.getElementById("bg2").style.background="transparent";
        y=0;
     }
  }
  
  
     //Change  third button on click
 
     var z=0;
  function bgThird(b){
  var b;
     if(b==1){
        z=z + 1;
     }
     if(z==1){
        document.getElementById("bg3").style.background="rgb(0, 116, 248)";
     }
     else if(z==2){
        document.getElementById("bg3").style.background="transparent";
        z=0;
     }
  }
  //----- The end --------
   // ---- Displays the chat with Jeph icon -----
   window.addEventListener("load",
   function() {
    setTimeout(function(){
        document.getElementById("myForm-chat").style.display = "block";
       },10000)
});
function closeFormchat() {
  document.getElementById("myForm-chat").style.display = "none";
}
//------- The end -------------