// DOM queries
const chatList =document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');
const buttons = document.querySelectorAll('.room-btn');
const profName = document.querySelector('.profile-name');
const newChat = document.querySelector('.scroll-to');


// add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
    
});

window.addEventListener('load', e => {
    setTimeout(() => {
        newChat.scrollIntoView({ behavior: 'smooth', block: 'end'});
    }, 2000)
    
    const newName = localStorage.userName ? localStorage.userName : 'Anon'
    profName.innerHTML = `Hello ${newName},`;

});


// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();

    localStorage.getItem('newName');

    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();

    profName.innerHTML = `Hello ${newName},`;

    localStorage.setItem('userName', newName);

    nameChange.style.animation = 'slideOut 2s linear 1';
    nameChange.style.transform = 'translateX(-1000%)';
    nameChange0.style.display = 'block';
    nameChangex.style.display = 'none';

    updateMssg.innerText = `Your username has been changed to ${newName}!`;
    setTimeout(() => updateMssg.innerText = ``, 2000)
});


// update chatroom
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
});

for (button in buttons) {
   buttons[button].onclick = function() {
       buttons.forEach(function(btn){
         btn.classList.remove('highlight');
       })
       this.classList.add('highlight');
   }
}


// check local storage for a name
const username = localStorage.username ? localStorage.username : 'Anon'

// class instances

const chatroom = new Chatroom('general', username);

// get chats and render
chatroom.getChats(data => chatUI.render(data));



const navOpen = document.querySelector('.fa-bars');
const slideBar = document.querySelector('.slider-wrapper');
const navClose = document.querySelector('.fa-times');
const roomSlide = document.querySelector('.middle-area');
const roomArea = document.querySelector('.room-alt');
const defaultBtn = document.querySelector('.default-room');
// more DOM queries
const secondaryBtnx = document.querySelector('.general-line');
const secondaryBtn1 = document.querySelector('.sports-line');
const secondaryBtn2 = document.querySelector('.music-line');
const secondaryBtn3 = document.querySelector('.gaming-line');
const secondaryBtn4 = document.querySelector('.lifestyle-line');
const temp1 = document.querySelector('.sports');
const temp2 = document.querySelector('.song');
const temp3 = document.querySelector('.gaming');
const temp4 = document.querySelector('.lifestyle');
// switching to day mode
const dayMode = document.querySelector('.fa-lightbulb');
const darkMode = document.querySelector('.fa-moon');
const body = document.querySelector('body');
const slideArea = document.querySelector('.slide-bar');
const header = document.querySelector('.site-name');
const headerIcon = document.querySelector('.fa-comment-dots');
const instruction = document.querySelector('.instruction');
const bars = document.querySelector('.fa-bars');
const updateText = document.querySelector('.update-mssg');
const userIcon = document.querySelector('.fa-user');

const topBorder = document.querySelector('.top-area');
const bottomBorder = document.querySelector('.middle-area');
const roomsIcon = document.querySelector('.fa-users');
const roomsText = document.querySelector('.users');
const generalIcon = document.querySelector('.fa-globe');
const generalText = document.querySelector('.globex');
const sportsIcon = document.querySelector('.fa-futbol');
const sportssText = document.querySelector('.futbolx');
const musicIcon = document.querySelector('.fa-music');
const musicText = document.querySelector('.musicx');
const gamingIcon = document.querySelector('.fa-gamepad');
const gamingText = document.querySelector('.gamepadx');
const lifestyleIcon = document.querySelector('.fa-praying-hands');
const lifestyleText = document.querySelector('.praying-handsx');
const logoutIcon = document.querySelector('.fa-gamepad');
const logoutText = document.querySelector('.logout');
const tempSwitch = document.querySelector('.name-logo');
const scrollUp = document.querySelector('.fa-arrow-up');
const scrollDown = document.querySelector('.fa-arrow-down');
const nameChange = document.querySelector('.rexit');
const nameChangex = document.querySelector('.rexitx');
const nameChange0 = document.querySelector('.alt-x');
const nameLogox = document.querySelector('.main-page-logo');
const nameLogoD = document.querySelector('.main-page-logo-alt');
const profMail1 = document.querySelector('.prof-mail');

const siteIconD = document.querySelector('.fa-comment-dots-alt');
const siteNameD = document.querySelector('.site-name-alt');




nameChange0.addEventListener('click', () => {
    nameChange0.style.display = 'none';
    nameChangex.style.display = 'block';
    nameChange.style.animation = 'slideIn 1s linear 1';
    nameChange.style.transform = 'translateX(0)'
});



navOpen.addEventListener('click', e => {
    slideBar.style.transform = 'translateX(0)';
    slideBar.style.opacity = '1';
});

navClose.addEventListener('click', e => {
    slideBar.style.transform = 'translateX(-100%)';
    slideBar.style.opacity = '0';
});

slideBar.addEventListener('click', e => {
    let x = document.getElementsByTagName('DIV')[4];
    // if(x.id === 'overlay'){
    //     slideBar.style.transform = 'translateX(-100%)';
    // }
});

roomArea.addEventListener('click', e => {
    if(e.target.tagName === 'SPAN' || e.target.tagName === 'I'){
        slideBar.style.transform = 'translateX(-100%)';
        slideBar.style.opacity = '0';
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }

});

secondaryBtn1.addEventListener('click', e => {
    temp4.style.display = 'none';
    temp3.style.display = 'none';
    temp2.style.display = 'none';
    temp1.style.display = 'block';
    defaultBtn.style.display = 'none';
});
secondaryBtn2.addEventListener('click', e => {
    temp4.style.display = 'none';
    temp3.style.display = 'none';
    temp2.style.display = 'block';
    temp1.style.display = 'none';
    defaultBtn.style.display = 'none';
});
secondaryBtn3.addEventListener('click', e => {
    temp4.style.display = 'none';
    temp3.style.display = 'block';
    temp2.style.display = 'none';
    temp1.style.display = 'none';
    defaultBtn.style.display = 'none';
});
secondaryBtn4.addEventListener('click', e => {
    temp4.style.display = 'block';
    temp3.style.display = 'none';
    temp2.style.display = 'none';
    temp1.style.display = 'none';
    defaultBtn.style.display = 'none';
});
secondaryBtnx.addEventListener('click', e => {
    temp4.style.display = 'none';
    temp3.style.display = 'none';
    temp2.style.display = 'none';
    temp1.style.display = 'none';
    defaultBtn.style.display = 'block';
});



dayMode.addEventListener('click', e => {
        
        slideBar.style.transform = 'translateX(-100%)';
        slideBar.style.opacity = '0';
        dayMode.style.display = 'none';
        darkMode.style.display = 'block';
        body.style.backgroundColor = 'rgb(240, 248, 255)';
        slideArea.style.backgroundColor = 'rgb(240, 248, 255)'
        slideBar.style.backgroundColor = 'rgba(17, 22, 63, 0.5)'
        navClose.style.color = '#352f5b'
        profMail1.style.color = '#352f5b'
        navOpen.style.color = '#352f5b'
        profName.style.color = '#352f5b'
        topBorder.style.color = '#352f5b'
        bottomBorder.style.color = '#352f5b'
        roomsIcon.style.color = '#352f5b'
        roomsText.style.color = '#352f5b'
        generalIcon.style.color = '#352f5b'
        generalText.style.color = '#352f5b'
        sportsIcon.style.color = '#352f5b'
        sportssText.style.color = '#352f5b'
        musicIcon.style.color = '#352f5b'
        musicText.style.color = '#352f5b'
        gamingIcon.style.color = '#352f5b'
        gamingText.style.color = '#352f5b'
        lifestyleIcon.style.color = '#352f5b'
        lifestyleText.style.color = '#352f5b'
        logoutIcon.style.color = '#352f5b'
        logoutText.style.color = '#352f5b'
        darkMode.style.color = '#352f5b'
        nameLogox.style.display = 'none'
        nameLogoD.style.display = 'block'
        tempSwitch.style.animation = 'fadeBounce2 1.5s linear 1'
        updateText.style.color = '#352f5b'
        userIcon.style.color = '#352f5b'
        bars.style.color = '#352f5b'
        
});

darkMode.addEventListener('click', e => {
        slideBar.style.transform = 'translateX(-100%)';
        slideBar.style.opacity = '0';
        darkMode.style.display = 'none';
        dayMode.style.display = 'block';
        body.style.backgroundColor = '#352f5b';
        instruction.style.color = 'white'
        bars.style.color = 'white'
        updateText.style.color = 'white'
        slideArea.style.backgroundColor = '#161235'
        slideBar.style.backgroundColor = 'rgba(17, 22, 63, 0.5)'
        navClose.style.color = 'white'
        userIcon.style.color = 'white'
        profName.style.color = 'white'
        topBorder.style.color = 'white'
        bottomBorder.style.color = 'white'
        roomsIcon.style.color = 'white'
        roomsText.style.color = 'white'
        generalIcon.style.color = 'white'
        generalText.style.color = 'white'
        sportsIcon.style.color = 'white'
        sportssText.style.color = 'white'
        musicIcon.style.color = 'white'
        musicText.style.color = 'white'
        gamingIcon.style.color = 'white'
        gamingText.style.color = 'white'
        lifestyleIcon.style.color = 'white'
        lifestyleText.style.color = 'white'
        logoutIcon.style.color = 'white'
        logoutText.style.color = 'white'
        darkMode.style.color = 'white'
        nameLogox.style.display = 'block'
});


scrollUp.addEventListener('click', () => {
    // navOpen.scrollIntoView({ behavior: 'smooth', block: 'end'});
    scrollTo(0,0);
});

scrollDown.addEventListener('click', () => {
    newChat.scrollIntoView({ behavior: 'smooth', block: 'end'});
});



