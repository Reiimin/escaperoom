document.getElementById('submit').addEventListener('click', function() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = '123'; 

    if (passwordInput === correctPassword) {
        window.location.href = 'welcome.html'; 
    } else {
        laughSound.play();
    }
}); 