var containerEle = document.body.querySelector(".container");

var num1=Number(prompt("Enter a number"));
if(isNaN(num1)){
  containerEle.innerHTML= num1 + " is invalid number.";
}else{
  containerEle.innerHTML= num1 + " is a number.";
}
var num2=Number(prompt("Enter another number."));
if(isNaN(num2)){
  containerEle.innerHTML= num2 + " is invalid number.";
}else{
  containerEle.innerHTML= num2 + " is a number.";
}
var operations1=prompt("Choose an operator +,-,*,/");

if(operations1=="+"){
  var total = (num1+num2)
  containerEle.innerHTML=total
}
if(operations1=="-"){
  var total = (num1-num2)
  containerEle.innerHTML=total
}
if(operations1=="*"){
  var total = (num1*num2)
  containerEle.innerHTML=total
}else if (operations1=="/"){
  var total = (num1/num2)
  containerEle.innerHTML=total
}