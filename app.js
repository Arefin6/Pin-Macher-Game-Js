//Random Number part
document.getElementById("generate-btn").addEventListener("click",function(){

  let random = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("random-input").value = random;

});
//Number Buttons Stuffs
var tryLeft = 3;
let numBtns = document.getElementsByClassName("number");
  
  var result=[];
     for(let i=0; i<numBtns.length;i++){
    
      numBtns[i].addEventListener("click",function(){
         
          var value = numBtns[i].innerText;
           result.push(value);
        
          document.getElementById("number-input").value = result.join("");

        }) ; 
        //document.getElementById("number-input").value = value;
    }
    //Stuffs for submit do check mach 
    document.getElementById("submit-btn").addEventListener("click",function(){
       
        var randomInput = document.getElementById("random-input").value;
        var numberInput =  document.getElementById("number-input").value;
         if(randomInput == numberInput){
             document.getElementById("success").style.display="block";
             
         }
         else{
            document.getElementById("danger").style.display="block";
            tryLeft -= 1;
          
            document.getElementById("try").innerText = tryLeft;
            if(tryLeft === 0){
                document.getElementById("submit-btn").disabled=true;
            }
         }
        
       

    });
    //clear btn
    document.getElementById("clear").addEventListener("click",function(){
        document.getElementById("number-input").value ="";
        result = [];   
  
        document.getElementById("success").style.display="none";
        document.getElementById("danger").style.display="none";
    });
    //backspace btn
    document.getElementById("back-space").addEventListener("click",function(){
       var value = document.getElementById("number-input").value;
       document.getElementById("number-input").value = value.substr(0, value.length - 1); 
         result.pop();
       document.getElementById("danger").style.display="none";
       document.getElementById("success").style.display="none";
    });
     

