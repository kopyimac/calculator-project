
let operator = document.getElementById("operator");
let claculte = document.getElementById("calculate");
let result  = document.getElementById("result");
let finalResult;
let errorOne = document.getElementById("errorOne")
let errorTwo = document.getElementById("errorTwo")
let operatorError = document.getElementById("operatorError")

errorOne.style.display = 'none'
errorTwo.style.display = 'none'
operatorError.style.display='none'
let numOneStatus,numTwoStatus,operatorStatus = false;
claculte.addEventListener("click" ,function(){
    
    let numberOne =document.getElementById("numberOne");
    let numberTwo = document.getElementById("numberTwo");
    let operator = document.getElementById("operator");
    let num1 = parseInt(numberOne.value);
    let num2 = parseInt(numberTwo.value);
    if (numberOne.value==""||numberOne.value==null||numberOne.value==undefined){
        errorOne.style.display ='block';
        numOneStatus = true;
    }else{
        errorOne.style.display ='none';
        numOneStatus = false;
    }
    if (numberTwo.value==""||numberTwo.value==null||numberTwo.value==undefined){
        errorTwo.style.display ='block';
        numTwoStatus = true;
    }else{
        errorTwo.style.display ='none';
        numTwoStatus = false;
    }
    if(operator.value=='empty'|| operator.value==null ||operator.value==undefined){
        operatorError.style.display='block'
        operatorStatus = true;
    }else{
        operatorError.style.display='none'
        operatorStatus = false;
    }
    if(numOneStatus ==false&& numTwoStatus==false&& operatorStatus==false){
        switch(operator.value){
            case"add":
                finalResult =num1+num2;
                break;
            case"minus":
                finalResult =num1-num2;
                break;
            case"multi":
                finalResult =num1*num2;
                break;
            case"divison":
                finalResult =num1/num2;
                break;
            default:
                console.log('error')
        }
        result.innerHTML = finalResult
    }
    
    
   
    
});