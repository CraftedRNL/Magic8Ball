setTimeout(function () {
        const overlay = document.getElementById('darkness2');
        overlay.style.opacity = 1;
      overlay.style.transform = "scale(0)";
    }, 900);

var rng = Math.floor((Math.random()*8));

document.getElementById('button').addEventListener("click", function () {
  if(!document.getElementById('input').value == ''){
    // document.getElementById('eye').animate('vibrate-1');
    setTimeout(function () {
      
      if (rng == 0) {
        document.getElementById('text').innerHTML = 'It is certain';
      }else if(rng == 1){
        document.getElementById('text').innerHTML = 'It is decidedly so';
      }else if(rng == 2){
        document.getElementById('text').innerHTML = 'Reply hazy try again';
      }else if(rng == 3){
        document.getElementById('text').innerHTML = 'Cannot predict now';
      }else if(rng == 4){
        document.getElementById('text').innerHTML = 'Do not count on it';
      }else if(rng == 5){
        document.getElementById('text').innerHTML = 'My sources say no';
      }else if(rng == 6){
        document.getElementById('text').innerHTML = 'Outlook not so good';
      }else if(rng == 7){
        document.getElementById('text').innerHTML = 'Signs point to yes';
      }
      rng = Math.floor((Math.random()*8));
      var question = document.getElementById('input').value;
      console.log(question);
  }, 900)
 
}

});
