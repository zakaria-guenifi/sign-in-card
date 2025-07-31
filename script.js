const eyeBtn = document.querySelector("#eye-icon");
const passWord = document.querySelector("#pw");
const crossedEye = document.querySelector("#crossed-eye");

eyeBtn.addEventListener('click', () => {
    passWord.type = "text";
    passWord.style.fontWeight = "700";
    eyeBtn.style.display = "none";
    crossedEye.style.display = "block";
    setTimeout(() => {
        passWord.type = "password";
        eyeBtn.style.display = "block";
        crossedEye.style.display = "none";
    }, 8000);
}); 
crossedEye.addEventListener('click', () => {
    passWord.type = "password";
    passWord.style.fontWeight = "500";
    eyeBtn.style.display = "block";
    crossedEye.style.display = "none";

}); 