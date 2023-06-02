var isLastClickOnEqual = false;

function pressBtn1(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="1";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"1";
    }
    
}

function pressBtn2(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="2";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"2";
    }
    
}

function pressBtn3(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="3";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"3";
    }
    
}

function pressBtn4(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="4";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"4";
    }
    
}

function pressBtn5(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="5";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"5";
    }
    
}

function pressBtn6(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="6";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"6";
    }
    
}

function pressBtn7(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="7";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"7";
    }
    
}

function pressBtn8(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="8";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"8";
    }
    
}

function pressBtn9(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="9";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"9";
    }
    
}

function pressBtn0(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="0";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"0";
    }
    
}

function pressBtnAddition(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="+";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"+";
    }
    
}

function pressBtnSubstraction(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="-";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"-";
    }
    
}

function pressBtnMultiplication(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="*";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"*";
    }
    
}

function pressBtnDivision(){
    if(isLastClickOnEqual==true){
        document.getElementById("screen").innerText="/";
        isLastClickOnEqual=false;
    }else{
        var text = document.getElementById("screen").innerText;
        document.getElementById("screen").innerText=text+"/";
    }
    
}

function pressBtnClear(){
    document.getElementById("screen").innerText="";
}

function pressBtnEqual(){
    isLastClickOnEqual = true
    var text = document.getElementById("screen").innerText;
    try {
        document.getElementById("screen").innerText=eval(text);       
    } catch (error) {
        document.getElementById("screen").innerText="Syntax Error";
        
    } 

}














