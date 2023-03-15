function form() {
    var name = document.register.uname.value;
    var pass = document.register.pwd.value;
    var confirm = document.register.cpwd.value

    var unamecheck = /^[A-Za-z' ']+$/;
    var pwdcheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    if (name == '') {
        alert('Please enter your name');
    }
    else if (!unamecheck.test(name)) {
        alert(' Enter valid user name');
    }
    else if (pass == '') {
        alert('Please enter password');
    }
    else if (!pwdcheck.test(pass)) {
        alert('Enter valid password');
    }
    else if (pass != confirm) {
        alert('Password not Matched');
    }
    else if (pass.length < 8) {
        alert('Enter atleast 8 characters');
    }
    else if (pass.length > 15) {
        alert('Enter within 15 characters');
    }
    else {
        alert('Thanks for login!!!');
        display(name, pass, confirm);


    }
}

function display(name, pass) {
    document.write("<h1>Registration Details:</h1>");
    document.write("<p><strong>Name:</strong> " + name + "</p>");
    document.write("<p><strong>password:</strong> " + pass + "</p>");
    document.write("<p><strong>confirm password:</strong> " + pass + "</p>");

}