




var n=1;
     var img=document.getElementsByTagName("img")[1];
 var array=["1667391343413.jpg","1667391347210.jpg","1667391351500.jpg","1667391359281.jpg","1667391355345.jpg","1667391362968.jpg","1667391366425.jpg","1667391376573.jpg","1667391380344.jpg","1667391391499.jpg"]
      function trocar(){
      if(n < (array.length)){
          img.src="./arquivos/Arte/"+array[n];
          
          n+= 1;
      }else if(n >= (array.length)){
       n=0;
      
      }
        
      }
      
var time = setInterval(trocar,10000);


var a = 1;
var aquario=["visita-estudo-oceanario-2020-11.jpg","Oceanario-de-Lisboa-13.jpg","manta_diabo_teresa_aires.jpg","peixe_palhao_pedro_a._pina.jpg","71.jpg","dicas-de-Lisboa.jpg","6320f962a3e99714b5a6d987e7d62b42.jpg","A-r-cópia.jpg","visiter-aquarium-lisbonne-3.jpg","oceanario-de-lisboa.jpg"];
var aqua=document.querySelectorAll(".tur")[0];
function aquari(){
    if(a < (aquario.length)){
          aqua.src ="./arquivos/aquariodelisboa/"+aquario[a];          
          a+= 1;
      }else if(a >= (aquario.length)){
      console.log(aquario.length);
       a=0;    
      }
} 

var timer = setInterval(aquari,10000);
 
