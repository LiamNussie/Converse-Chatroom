const register = document.querySelector('.signup-btnx');
const signUpbox = document.querySelector('.signup-window');
const loginBox = document.querySelector('.login-window');
const back = document.querySelector('.back-login');
const nameLogo = document.querySelector('.name-logo');


register.addEventListener('click', e => {
    e.preventDefault();

    loginBox.style.animation = 'slideOut 2s linear 1';
    loginBox.style.transform = 'translateX(-500%)';
    
    signUpbox.style.animation = 'slideIn2 1s linear 1';
    signUpbox.style.transform = 'translate(0, -124%)';
    
});

back.addEventListener('click', e => {
    e.preventDefault();

    signUpbox.style.animation = 'slideOut2 0.5s linear 1';
    signUpbox.style.transform = 'translate(500%, -124%)';
    
    loginBox.style.animation = 'slideIn 1s linear 1';
    loginBox.style.transform = 'translateX(0)';
});






const homePage = document.querySelector('.home-page');
const forms = document.querySelector('.forms');
const loginError = document.querySelector('.login-error');
const status = document.querySelector('.fa-circle');
const profMail = document.querySelector('.prof-mail');


// listen for auth status changes
auth.onAuthStateChanged(user => {
    const userEmail = user.email;
    if(user) {
        homePage.style.display = 'block';
        forms.style.display = 'none';
        // profMail.innerHTML = `${userEmail}`;

        // firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL()
        //     .then(imgUrl => {
        //         img.src = imgUrl;
        //     }).catch(error => {
        //         console.log(error.message);
        //     });
    } else {
        homePage.style.display = 'none';
        forms.style.display = 'block'; 
        status.style.color = 'crimson';
    };
});







// sign up user

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
        signupForm.reset();
    })
});

// log user out
const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user logged out');
        scrollTo(0,0)
        homePage.style.display = 'none';
        forms.style.display = 'block'; 
        slideBar.style.transform = 'translateX(-100%)';    
    });
});

// log user in 
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password)
    .then(cred => {
        console.log(cred.user.uid);
        loginForm.reset();
     
    });

    auth.onAuthStateChanged(user => {
        if(user) {
            console.log('login succesful')
            
        } else {
            setTimeout(() => {
                loginError.style.display = 'block';
            }, 2000);
            setTimeout(() => {
                loginError.style.display = 'none';
            }, 3000);
              
        };
    });
});


// changing profile picture

const set = document.getElementById('set');
const img = document.getElementById('img');

let file = {};

function chooseFile(e) {
    file = e.target.files[0];
}

function signUpButtonPressed() {


    auth.onAuthStateChanged(user => {

        if(user){
            firebase.storage().ref('users/' + user.uid + '/profile.jpg').put(file)
            .then(() => {
                console.log('successfully uploaded');
            }).catch(error => {
                console.log(error.message);
            });
            firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL()
            .then(imgUrl => {
                img.src = imgUrl;
            }).catch(error => {
                console.log(error.message);
            });
        }else {

        }
    });
};


