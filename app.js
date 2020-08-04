document.getElementById("generate-btn").addEventListener("click",function(){

  let random = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("random-input").value = random;

});

let numBtns = document.getElementsByClassName("number");
  //console.log(numBtns);
  var result=[];
     for(let i=0; i<numBtns.length;i++){
         //console.log(numBtns[i]);
      numBtns[i].addEventListener("click",function(){
         
          var value = numBtns[i].innerText;
           result.push(value);
        
          document.getElementById("number-input").value = result.join("");

        }) ; 
        //document.getElementById("number-input").value = value;
    }
    document.getElementById("submit-btn").addEventListener("click",function(){
        var randomInput = document.getElementById("random-input").value;
        var numberInput =  document.getElementById("number-input").value;
         if(randomInput == numberInput){
             document.getElementById("success").style.display="block";
             
         }
         else{
            document.getElementById("danger").style.display="block";
         }

    });
     

