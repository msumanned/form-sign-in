let popup = document.getElementById("popup");

function signup() {

    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cPassword = document.getElementById("cpassword").value;
    var Gender = document.getElementById("gender").value;
    var phoneNumber = document.getElementById("pNumber").value;
    var dateBirth = document.getElementById("dateofbirth").value;
    var address = document.getElementById("address").value;
    var postalcode = document.getElementById("postalcode").value;
    var file = document.getElementById("file").value;

    var obj = {
        userName,
        email,
        password,
        cPassword,
        Gender,
        dateBirth,
        address,
        postalcode,
        file,


    }



    if (userName.length < 2 || userName.length > 15) {
        document.getElementById('validation1').innerHTML = "*Please write correct name.";
    }

    if (userName === "") {
        document.getElementById('validation1').innerHTML = "*This field is empty";
    }
    // for email
    // if (email.length < 5 || email.length > 30) {
    //     document.getElementById('validation2').innerHTML = "*Please write correct email address.";
    // }
    // if (email === "") {
    //     document.getElementById('validation2').innerHTML = "*This field is empty";
    // }

    // // // for password

    // if (password.length < 7) {
    //     document.getElementById('validation3').innerHTML = "*your password should be 8 digits long .";
    // }

    // if (password.length > 15) {
    //     document.getElementById('validation3').innerHTML = "*your password is too long .";
    // }

    // if (cPassword != password) {
    //     document.getElementById('validation4').innerHTML = "*your password doesnt match"
    // }

    // if (cPassword === "") {
    //     document.getElementById('validation4').innerHTML = "*This field is empty";
    // }

    // // for gender

    // if (Gender === "") {
    //     document.getElementById('validation5').innerHTML = "*This field is empty";
    // }

    // if (Gender.length !== "male" || Gender.length !== "female") {
    //     document.getElementById('validation5').innerHTML = "*Enter correct gender"
    // }

    // // for phone
    // if (phoneNumber.length < 10 || phoneNumber.length > 12) {
    //     document.getElementById('validation6').innerHTML = "*number should be 11 digits";
    // }

    // if (phoneNumber === "") {
    //     document.getElementById('validation6').innerHTML = "*This field is empty";
    // }

    // if (dateBirth === "") {
    //     document.getElementById('validation7').innerHTML = "*This field is empty";
    // }


    // // for address
    // if (address.length > 25) {
    //     document.getElementById('validation8').innerHTML = "*address is too long"
    // }

    // if (address === "") {
    //     document.getElementById('validation8').innerHTML = "*This field is empty";
    // }

    // // for postalcode
    // if (postalcode.length < 4 || postalcode.length > 6) {
    //     document.getElementById('validation9').innerHTML = "*Postal code should be 6 digits";
    // }

    // if (postalcode === "") {
    //     document.getElementById('validation9').innerHTML = "*This field is empty";
    // }
    if (file === "") {
        document.getElementById('validation10').innerHTML = "*This field is empty";
    }

    else {
        let div5 = document.getElementById("div5").style.display = "flex";
        let x = document.getElementById("div2").style.display = "none";
        let y = document.getElementById("div1").style.display = "none";
        var myJSON = localStorage.setItem("obj", JSON.stringify(obj));
    }
}

function closepage(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var checkEmail = document.getElementById("cemail").value;
    var checkpass = document.getElementById("cpass").value;

    if(checkEmail == email && checkpass == password){
        document.getElementById("popup").style.display = "none";
        window.location.href = "C:/Users/Lab01R02Pc12/Desktop/cinema-dashboard-main/cinema%20work/index.html";
    } 
    else{
        document.getElementById("validationemail").innerHTML = "*Enter valid email";
        document.getElementById("validationpass").innerHTML = "*Enter valid password";
    
    }
}







// function sign_in() {
//     if

// }

// function ValidateEmail(inputText)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.text1.focus();
// return false;
// }
// }

// var myJSON = localStorage.setItem("obj", JSON.stringify(obj));
// console.log(myJSON)