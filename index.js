let name=document.getElementById('name');
let photo=document.getElementById('photo');
let chat=document.getElementById('chat');
let button=document.getElementById('button');

let userName=document.getElementById('userName');
let userPhoto=document.getElementById('userPhoto');
let userChat=document.getElementById('userChat');

function getUserName(){let newName = name.value[0].toUpperCase() + name.value.substring(1);
return(userName.textContent=newName);
}
function checkSpam(){let antiSpam=chat.value.replace(/viagra|XXX/gi, '***');
userChat.textContent = antiSpam;}
function getComment(){
    getUserName();
    checkSpam();
    userPhoto.src=photo.value;}
button.addEventListener('click',getComment);
