document.getElementById("generate-btn").addEventListener("click",function(){

  let random = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("random-input").value = random;
  
});