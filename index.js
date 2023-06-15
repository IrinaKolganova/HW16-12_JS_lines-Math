const name = document.getElementById('name');
const photo = document.getElementById('photo');
const chat = document.getElementById('chat');
const button = document.getElementById('button');

const userName = document.getElementById('userName');
const userPhoto = document.getElementById('userPhoto');
const userChat = document.getElementById('userChat');

function getUserName() {
    const newName = name.value[0].toUpperCase() + name.value.substring(1).toLowerCase();
    const p = document.createElement('p');
    p.textContent = newName;
    userName.appendChild(p);
    name.value = '';
}

function checkSpam() {
    const antiSpam = chat.value.replace(/viagra|xxx|ххх/gi, '***');
    const antiP = document.createElement('p');
    antiP.textContent = antiSpam;
    userName.appendChild(antiP);
    chat.value = '';
}

function getPic() {
    userPhoto.src = photo.value;
    // const newPic = document.createElement('img');
    // newPic.src = photo.value;
    // userPhoto.appendChild(newPic);
    photo.value = '';
}

function getComment() {
    getUserName();
    getPic();
    checkSpam();

}
button.addEventListener('click', getComment);


// 1я версия кода:

// const name = document.getElementById('name');
// const photo = document.getElementById('photo');
// const chat = document.getElementById('chat');
// const button = document.getElementById('button');

// const userName = document.getElementById('userName');
// const userPhoto = document.getElementById('userPhoto');
// const userChat = document.getElementById('userChat');

// function getUserName() {
//     const newName = name.value[0].toUpperCase() + name.value.substring(1).toLowerCase();
//     return (userName.textContent = newName);
// }

// function checkSpam() {
//     const antiSpam = chat.value.replace(/viagra|xxx|ххх/gi, '***');
//     return (userChat.textContent = antiSpam);
// }

// function getComment() {
//     getUserName();
//     checkSpam();
//     userPhoto.src = photo.value;
// }
// button.addEventListener('click', getComment);