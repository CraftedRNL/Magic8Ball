var userName = "John Doe";
userName = window.prompt('Please Enter Your Name', '');
uName = document.getElementById('name');
if (userName != null) {
    uName.innerHTML = `Hello ${userName}`;
} else {
    uName.innerHTML = `Hello John Doe`;
}


document.getElementById('circle').addEventListener("click", function () {
    const overlay = document.getElementById('darkness');
    overlay.style.opacity = 1;
  overlay.style.transform = "scale(100)";

    setTimeout(function () {
        window.location.href = '8ball.html';
    }, 900)
   
});