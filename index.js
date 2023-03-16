const height1 = document.getElementById("height")
const weight1 = document.getElementById("weight")
const btn1 = document.getElementById("btn")
const res = document.getElementById("result")
const weightCondition = document.getElementById("weight-condi")

function output(){
  const heightValue = document.getElementById("height").value/100
  const weightValue = document.getElementById("weight").value
  const bmi = weightValue /( heightValue*heightValue)

  res.value= bmi;

  if(bmi < 18.5){
    weightCondition.value= "UnderWeight"
  }
  else if(bmi >= 18.5 && bmi <= 24.9){
    weightCondition.value="Normal"
  }
  else if(bmi >= 25 && bmi <= 29.9){
    weightCondition.value="Normal"
  }
  else {
    weightCondition.value = "Obesity"
  }


}

btn1.addEventListener("click",output)