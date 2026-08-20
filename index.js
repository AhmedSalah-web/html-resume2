let buttons = document.querySelectorAll(".button").length;
for (let i= 0; i < buttons; i++){
document.querySelectorAll(".button")[i].addEventListener("click", function(){
    let boxanimation = this;
     boxanimation.classList.add("pressed");

setTimeout(function() {
  boxanimation.classList.remove("pressed");
}, 100);
  });
}
  