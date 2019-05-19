// let ar=["fidan","aynur","gunel","samir","vugar","kamuran"];
// let we=document.getElementsByClassName("main");

// for(let i=0;i<we.length;i++){
//     we[i].addEventListener("click", function(){
//    console.log(this.innerText)
//     })

// };
// we[0].addEventListener("click", function(){
//     alert("1")
//      });
//      we[0].addEventListener("click", function(){
//         alert("2")
//          })
//          we[0].addEventListener("click", function(){
//             alert("3")
//              })

// we[0].onclick=function(){
//     alert("men")
// }
// we[0].onclick=function(){
//     alert("sen")
// }
// we[0].onclick=function(){
//     alert("biz")
// }

// let myButton = document.getElementsByClassName("btn")[0];
// let input1 = document.getElementById("Y");
// let input2 = document.getElementById("A");



// myButton.addEventListener("click", function () {
   
//     let in1 = input1.value;
//     let in2 = input2.value;

//     console.log(in1, in2);
// })


// function topla(eded1,eded2){
// return eded1+eded2;
// }
// console.log(topla(3,5));

// function cem(){
//     for(let i=0;i<arguments.length;i++)
//     console.log(arguments[i]);
// }

// cem("samir","aynur");

// function cem(){
//      let sum=0;

//     for (let i=0;i<arguments.length;i++){
//         sum+=arguments[i];
       
   
// }
// return sum;
// }
// console.log(cem(3,5,8,5));




// 3cu hisse
 let canada=document.querySelectorAll(".main");
 let randomColors=["teal","magenta","black","#ccc","#eee","#555","blue","yellow","pink","purple"]

function randomNumberGenerator(min,max){
    return Math.round(min+Math.random()*(max-min));
}
for(let i=0;i<canada.length;i++){
    canada[i].style.backgroundColor=randomColors[ randomNumberGenerator(0,randomColors.length-1)];
}




 // for(let i=0;i<canada.length;i++){
//   if(i%2==0){
//     canada[i].style.backgroundColor="teal";
//   }
//   else{
//     canada[i].style.backgroundColor="magenta";
//   }
// }

