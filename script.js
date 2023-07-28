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
        document.getElementById("bg").style.background="transparent";
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

function dispHov(){
   document.getElementById("collaborate").style.display="block";
   document.getElementById("create").style.display="none";
   document.getElementById("develop").style.display="none";
   document.getElementById("deploy").style.display="none";
   document.getElementById("collb").style.background="rgb(0, 116, 248)";
   document.getElementById("createb").style.background="transparent";
   document.getElementById("devb").style.background="transparent";
   document.getElementById("depb").style.background="transparent";
}
function dispHov1(){
   document.getElementById("collaborate").style.display="none";
   document.getElementById("create").style.display="block";
   document.getElementById("develop").style.display="none";
   document.getElementById("deploy").style.display="none";
   document.getElementById("collb").style.background="transparent";
   document.getElementById("createb").style.background="rgb(0, 116, 248)";
   document.getElementById("devb").style.background="transparent";
   document.getElementById("depb").style.background="transparent";
}
function dispHov2(){
   document.getElementById("collaborate").style.display="none";
   document.getElementById("create").style.display="none";
   document.getElementById("develop").style.display="block";
   document.getElementById("deploy").style.display="none";
   document.getElementById("collb").style.background="transparent";
   document.getElementById("createb").style.background="transparent";
   document.getElementById("devb").style.background="rgb(0, 116, 248)";
   document.getElementById("depb").style.background="transparent";
}
function dispHov3(){
   document.getElementById("collaborate").style.display="none";
   document.getElementById("create").style.display="none";
   document.getElementById("develop").style.display="none";
   document.getElementById("deploy").style.display="block";
   document.getElementById("collb").style.background="transparent";
   document.getElementById("createb").style.background="transparent";
   document.getElementById("devb").style.background="transparent";
   document.getElementById("depb").style.background="rgb(0, 116, 248)";
}
//First sausage
var f=0;
function dispDur(g){
   
   var g;
   if(g==1){
      f=f + 1;
   }
   if(f==1){
      document.getElementById("duration").style.display="block";
      document.getElementById("plus").style.display="none";
      document.getElementById("x").style.display="block";
   }
   else if(f==2){
      document.getElementById("duration").style.display="none";
      document.getElementById("plus").style.display="block";
      document.getElementById("x").style.display="none";
      f=0;
   }
}
//-- The end of spicy sausages --

//second sausage
var l=0;
function dispDur1(x){
   
   var x;
   if(x==1){
      l=l + 1;
   }
   if(l==1){
      document.getElementById("own").style.display="block";
      document.getElementById("plus1").style.display="none";
      document.getElementById("x1").style.display="block";
   }
   else if(l==2){
      document.getElementById("own").style.display="none";
      document.getElementById("plus1").style.display="block";
      document.getElementById("x1").style.display="none";
      l=0;
   }
}
//-- The end of spicy sausages --
 
//Third sausage
var s=0;
function dispDur2(x){
   
   var x;
   if(x==1){
      s=s + 1;
   }
   if(s==1){
      document.getElementById("update").style.display="block";
      document.getElementById("plus2").style.display="none";
      document.getElementById("x2").style.display="block";
   }
   else if(s==2){
      document.getElementById("update").style.display="none";
      document.getElementById("plus2").style.display="block";
      document.getElementById("x2").style.display="none";
      s=0;
   }
}
//-- The end of spicy sausages --
 //Fourth sausage
var r=0;
function dispDur3(x){
   
   var x;
   if(x==1){
      r=r + 1;
   }
   if(r==1){
      document.getElementById("ssl").style.display="block";
      document.getElementById("plus3").style.display="none";
      document.getElementById("x3").style.display="block";
   }
   else if(r==2){
      document.getElementById("ssl").style.display="none";
      document.getElementById("plus3").style.display="block";
      document.getElementById("x3").style.display="none";
      r=0;
   }
}

//-- The end of spicy sausages --
  //5th sausage
  var com=0;
  function dispDur4(x){
     
     var x;
     if(x==1){
        com=com + 1;
     }
     if(com==1){
        document.getElementById("comm").style.display="block";
        document.getElementById("plus4").style.display="none";
        document.getElementById("x4").style.display="block";
     }
     else if(com==2){
        document.getElementById("comm").style.display="none";
        document.getElementById("plus4").style.display="block";
        document.getElementById("x4").style.display="none";
       com=0;
     }
  }
  //-- The end of spicy sausages --
   
    
  
  
  //6th sausage
var o=0;
function dispDur5(x){
   
   var x;
   if(x==1){
      o=o + 1;
   }
   if(o==1){
      document.getElementById("google").style.display="block";
      document.getElementById("plus5").style.display="none";
      document.getElementById("x5").style.display="block";
   }
   else if(o==2){
      document.getElementById("google").style.display="none";
      document.getElementById("plus5").style.display="block";
      document.getElementById("x5").style.display="none";
     o=0;
   }
}
//-- The end of spicy sausages --
 
  


   //7th sausage
var e=0;
function dispDur6(x){
   
   var x;
   if(x==1){
      e=e + 1;
   }
   if(e==1){
      document.getElementById("seoppc").style.display="block";
      document.getElementById("plus6").style.display="none";
      document.getElementById("x6").style.display="block";
   }
   else if(e==2){
      document.getElementById("seoppc").style.display="none";
      document.getElementById("plus6").style.display="block";
      document.getElementById("x6").style.display="none";
     e=0;
   }
}
//-- The end of spicy sausages --
 
  

