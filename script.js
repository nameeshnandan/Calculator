// Calculator ON and OFF 


const btns=document.querySelectorAll('.byn');
function offscr(){
    result.value=""
    result.style.background="#636361"
    document.getElementsByName('results')[0].placeholder=' ';
  
    // result.style.border="1px solid red"
    btns.forEach(btn=>{
        btn.disabled=true;
    })
}
// offscr()

function onscr() {
    clearScreen();
    result.style.background="#a7af7c"
    document.getElementsByName('results')[0].placeholder='0';

    btns.forEach(btn=>{
        btn.disabled=false
    })
    
}
onscr()


// to display the num in screen 

function displayNum(num){
    result.value+=num
}
function square(){
    result.value=Math.pow(result.value,2);
}
function factorial(){
    x=result.value
    sum=1;
    for(let i=2;i<=x;i++){
        sum=sum*i;

    }
    result.value=sum;
}


// to clear the screen 
function clearScreen(){

    result.value=""
}


//   to do mathematical operations 
function equal(){
    // var exp=result.value
    // var output=eval(exp)
    // result.value=output
    // //    OR 
    // result.value=eval(result.value)
    if(result.value==('-')||result.value==('+')||result.value==('*')||result.value==('/')){
        result.value="Syntax Error"
    }
    else{
        result.value=eval(result.value)
    }
}


// to delete the last item in screen

function clearText(){

    var screenData=result.value
    result.value=screenData.slice(0,-1)
}