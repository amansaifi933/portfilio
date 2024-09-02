//airmatic opration 
/*let b = 5;
let k = 2;
console.log("b-k=",b-k);*/
/*console.log("b=",b, "& k=",k);
console.log("b-k=",b-k);
console.log("b+k=",b+k);
console.log("b=",b, "& k=",k);
console.log("b*k=",b*k);
console.log("b/k=",b/k);
console.log("b%k=",b%k);
console.log("b**K=", b**k);//25
console.log("b=",b,"& k=",k);*/
/*console.log("b=",b," & k=",k);

console.log("b--=",b--);
console.log("b=",b);*/

/*let a = 5;
let c = 2;
a **= 3;
console.log("a=",a);*/
/*let a = 5;
let b = "3";
console.log("a > b",a > b);
*/
/*let a = 5;
let b = 2;
 
let cond1 = a > b; //true
let cond2 = a === 5;
console.log("cond1 && cond2", cond1 && cond2);*/
/*let a = 5;
let b = 2;

let cond1 = a > b;
let cond2 = a === 5;
 console.log("cond1 && cond2",cond1 && cond2);

let c = 2;
let d = 5;

let cond3 = c < d;
let cond4 = d === 6;
console.log("cond3 || cond4", cond3 || cond4);

let e = 4;
let f =5;
let cond5 = e > f;
let cond6 = e===5;
console.log("cond5 || cond6", cond5 || cond6);*/

//let age = 18;
//if (age >= 18) {
  //  console.log("accept");
//}
//if (age < 18) {
  //  console.log("rejact");
//}
 
/*let mood = "light";
let color;
if(mood==="dark") {
    color = "black";
}
if( mood ==="light") {
    color = "white";
}  
console.lo

"g(color);*/
/*let num = 11
if (num%2 ===0){
  console.log(num,"is even");}
  else{
    console.log(num, "is odd");
  }*/

  /*let mood = "dark";
  let color;
if(mood === "dark"){
  color= "black";

}
else if (mood === "red"){
  color="red";
}
else if (mood === "blue"){
  color="blue";
}
else {
  color="white";
}
console.log(color);*/
/*let age = 12
let result = age >= 18 ? "adult":"not adult";
console.log(result);*/
/*let num = prompt("enter the number");
if (num%5 ===0){
  console.log(num,"number is multipl 5");
} else {
  console.log(num,"number is not multipal 5");
}*/
/*let score = 22;
let grate = 22;
if (score >= 90 && score <=100) {
  grate = "A";
}
else if ( score >= 70 && score <=89) {
  grate ="B";
} else if (score >=60 && score <=69){
  grate= "C";
}
else if ( score >=50 && score <=59)
  grate ="D";
}
else if( score >=0 && score <=49){
  grate ="F";

}

console.log ("accoddin your grate number in score",   grate);*/
 
/*for (let count = 1; count <=5; count++){
  console.log("count=",count);
 }*/


 /*let sum = 0;
 let n = 100;
 for(let i =1; i <= n; i++) {
  sum = sum+ i;
 }
 console.log("sum=",sum);
 console.log("loop has ended");*/
/*let marks = [ 85,97,44,37,76,60];
let sum=0;
for(let val of marks) {
  sum += val;

} 
let avg = sum /marks.length;
console.log(`avg marks of the sum= ${avg}`);*/
/*let itembike =[ "tvs", "tata","yama",];

let deleteditem =  itembike.pop();
console.log(deleteditem);
console.log(itembike);*/
/*let motor = ["yama", "tvs", "tata", "bajaj", "hero"];

let deleteditem = motor.pop();
console.log("delet leter on java sckrpy=",deleteditem);
console.log(motor);
console.log(deleteditem);
console.log(motor);*/

/*let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
  let date = new Date();

  let hh = date.getHo urs();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30*hh + mm/2;
  let mRotation = 6*mm;
  let sRotation = 6*ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime,1000);*/
/*let amrica=["spiderman","batman"];
let india =["saktiman","baalveer",];
let africa =["bravo,","polard"];
let hero = amrica.concat(india,africa);
console.log(hero);*/

 /*console.log(hero);
 console.log(hero);
 console.log(hero);
 console.log(hero);
 console.log(hero);
 console.log(hero);
 console.log(hero);
 let hhh=[ "salman","sharuk","aman"];
 hhh.push("shavej","juned");
 console.log(hhh);
 let a =[ "savej", "sameer", "suhak"];
 let deleteditem=a.pop();
 console.log(a);
 console.log(deleteditem);*/
 /*
 let name =["salman ", "sahil", "sareem"];
  name.push("sakeel");
  console.log(name); 
  let hero = [ "sLMAN","srk","rkf"];
  let deleteditem=hero.pop();
  console.log(hero);
  console.log(deleteditem);*/
  /*let mhero =[ "super","spider","bat",];
  let deleteditem=mhero.shift();
  console.log(mhero);
  console.log(deleteditem);*/

 /*let shero=["super","spider","bat","mankey"];
  shero.unshift("antman");
  console.log(shero);*/

/////----practice set---------------------------------------

  /*let company=["blooming","microsoft","uber","google","ibm","netflex"];
  company.push("amazon");
  console.log(company);*/

  /*function sum(x,y){
    console.log(x);
    console.log(y);
    console.log(x+y);
    
  }
  sum(728,272);*/ 
  /*function sum(a,b){
    return a + b;

  }
 const arrowSum= (a, b) => {
    console.log(a + b);
  };
  console.log(arrowSum);*/
  // ptactice set -----------------------------------------------
      
          //count the vowles-------------------------------

  /*function vowles(str){
    let count = 0;
    for(let char of str){
      if (
        char === "a"||
        char === "e"||
        char === "i"||
        char === "o"||
        char === "u"
      ) {
        count++;
      }
    }
  console.log(count);
}
vowles("aona college");*/




/*let nums = [1,2,3,4,5,6,7];
   let newarr=nums.map((val)=>{
    console.log(val*val);
   })

console.log(newarr);*/


/*let nums = [1,2,3,4,5,6,7];
   let newarr=nums.filter((val)=>{
    return val %2 === 0;
   });

console.log(newarr);*/
/*let arr = [1,666,3,4,5,6];
 let cont = arr.reduce((res,val)=>{
  return res < val ? res:val;
 })

console.log(cont);*/
let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");
 
setInterval(()=>{
  
 let day = new Date();
 let hh = day.getHours() *30;
 let mm = day.getMinutes() *6;
 let ss = day.getSeconds() *6;
 hr.style.transform =`rotatez(${hh+(mm/12)}deg)`;
 mn.style.transform =`rotatez(${mm}deg)`;
 sc.style.transform =`rotatez(${ss}deg)`;


})





























  
