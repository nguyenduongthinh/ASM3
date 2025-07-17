// === File: script.js ===
// File này xử lý logic động cho web, ví dụ như mở/đóng mục, hiệu ứng, validate,...
// Khai báo biến
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
// Khai báo biến
const handleSubmit = () => {
// Khai báo biến
    let emailValue = document.getElementById('email').value;
// Khai báo biến
    let personalInfo = document.querySelector('.info-group');
// Khai báo biến
    let emailForm = document.querySelector('.email-input-group');

    if(validateEmail(emailValue)){
        personalInfo.style.display = 'block';
        emailForm.style.display = 'none';
    }
}
// Khai báo biến
const handleClose = () => {
// Khai báo biến
    let personalInfo = document.querySelector('.info-group');
// Khai báo biến
    let emailForm = document.querySelector('.email-input-group');
// Khai báo biến
    let emailInput = document.getElementById('email');
    personalInfo.style.display = 'none';
    emailForm.style.display = 'block';
    emailInput.value = "";
    emailInput.focus();
}
// Khai báo biến
const handleInputChange = () => {
// Khai báo biến
    let emailValue = document.getElementById('email').value;
// Khai báo biến
    let errMessage = document.querySelector('.message');
    if(validateEmail(emailValue)){
        errMessage.textContent = "";
    }else if(emailValue.length === 0){
        errMessage.textContent = "Vui lòng nhập email";
        errMessage.style.color = 'red';
    }else {
        errMessage.textContent = "Sai định dạng email";
        errMessage.style.color = 'red';
    }
}
// Khai báo biến
const handleShowHide = (element) => {
// Khai báo biến
    let jobContent = element.parentNode.parentNode.childNodes[3];
    if(window.getComputedStyle(jobContent).display === "none"){
        jobContent.style.display = 'block';
        element.textContent = "View less";
    }else{
        jobContent.style.display = 'none';
        element.textContent = "View more";
    }
}
// Tác động đến phần tử HTML qua DOM
// Lắng nghe sự kiện (ví dụ click, submit,...)
document.getElementById('submit-btn').addEventListener('click', handleSubmit);
// Tác động đến phần tử HTML qua DOM
// Lắng nghe sự kiện (ví dụ click, submit,...)
document.getElementById('email').addEventListener('input', handleInputChange);
// Tác động đến phần tử HTML qua DOM
// Lắng nghe sự kiện (ví dụ click, submit,...)
document.querySelector('.close-btn').addEventListener('click', handleClose);