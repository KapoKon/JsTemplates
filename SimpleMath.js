
var a = (Math.floor(Math.random()*10)); //random number 1~10
var b = (Math.floor(Math.random()*10));
function checkEqual(a,b){
   return a===b;
  //ternary:return a===b? true : false;
}
checkEqual(a,b);
console.log(checkEqual(a,b));