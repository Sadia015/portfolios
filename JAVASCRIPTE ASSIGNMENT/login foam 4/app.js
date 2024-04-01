function signup() {
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('Email', email)
    localStorage.setItem('password', pass)
    location.href = './signin.html'

}

function signin() {
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    if (localStorage.getItem('Email') == email &&
        localStorage.getItem('password') == pass)
        location.href = './welcome.html'
    
    else {
        alert('sorry signup kro')
        location.href = './signup.html'
    }
}