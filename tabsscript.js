// function show1() {
//     document.getElementById("tab1-data").style.display = "block";
//     document.getElementById("tab2-data").style.display = "none";
//     document.getElementById("tab3-data").style.display = "none";
//     document.getElementById("tab4-data").style.display = "none";
//     document.getElementById("tab5-data").style.display = "none";
//     document.getElementById("tab6-data").style.display = "none";

//     var element = document.getElementById("tab-1");
//     element.classList.add("initial-active-tab");

//     var elementp1 = document.getElementById("tab-2");
//     elementp1.classList.remove("initial-active-tab");
//     var elementp2 = document.getElementById("tab-3");
//     elementp2.classList.remove("initial-active-tab");
//     var elementp3 = document.getElementById("tab-4");
//     elementp3.classList.remove("initial-active-tab");
//     var elementp4 = document.getElementById("tab-5");
//     elementp4.classList.remove("initial-active-tab");
//     var elementp5 = document.getElementById("tab-6");
//     elementp5.classList.remove("initial-active-tab");

// }

// function show2() {
//     document.getElementById("tab1-data").style.display = "none";
//     document.getElementById("tab2-data").style.display = "block";
//     document.getElementById("tab3-data").style.display = "none";
//     document.getElementById("tab4-data").style.display = "none";
//     document.getElementById("tab5-data").style.display = "none";
//     document.getElementById("tab6-data").style.display = "none";

//     var element = document.getElementById("tab-2");
//     element.classList.add("initial-active-tab");

//     var elementp1 = document.getElementById("tab-1");
//     elementp1.classList.remove("initial-active-tab");
//     var elementp2 = document.getElementById("tab-3");
//     elementp2.classList.remove("initial-active-tab");
//     var elementp3 = document.getElementById("tab-4");
//     elementp3.classList.remove("initial-active-tab");
//     var elementp4 = document.getElementById("tab-5");
//     elementp4.classList.remove("initial-active-tab");
//     var elementp5 = document.getElementById("tab-6");
//     elementp5.classList.remove("initial-active-tab");

// }

// function show3() {
//     document.getElementById("tab1-data").style.display = "none";
//     document.getElementById("tab2-data").style.display = "none";
//     document.getElementById("tab3-data").style.display = "block";
//     document.getElementById("tab4-data").style.display = "none";
//     document.getElementById("tab5-data").style.display = "none";
//     document.getElementById("tab6-data").style.display = "none";

//     var element = document.getElementById("tab-3");
//     element.classList.add("initial-active-tab");

//     var elementp1 = document.getElementById("tab-1");
//     elementp1.classList.remove("initial-active-tab");
//     var elementp2 = document.getElementById("tab-2");
//     elementp2.classList.remove("initial-active-tab");
//     var elementp3 = document.getElementById("tab-4");
//     elementp3.classList.remove("initial-active-tab");
//     var elementp4 = document.getElementById("tab-5");
//     elementp4.classList.remove("initial-active-tab");
//     var elementp5 = document.getElementById("tab-6");
//     elementp5.classList.remove("initial-active-tab");

// }

// function show4() {
//     document.getElementById("tab1-data").style.display = "none";
//     document.getElementById("tab2-data").style.display = "none";
//     document.getElementById("tab3-data").style.display = "none";
//     document.getElementById("tab4-data").style.display = "block";
//     document.getElementById("tab5-data").style.display = "none";
//     document.getElementById("tab6-data").style.display = "none";

//     var element = document.getElementById("tab-4");
//     element.classList.add("initial-active-tab");

//     var elementp1 = document.getElementById("tab-1");
//     elementp1.classList.remove("initial-active-tab");
//     var elementp2 = document.getElementById("tab-2");
//     elementp2.classList.remove("initial-active-tab");
//     var elementp3 = document.getElementById("tab-3");
//     elementp3.classList.remove("initial-active-tab");
//     var elementp4 = document.getElementById("tab-5");
//     elementp4.classList.remove("initial-active-tab");
//     var elementp5 = document.getElementById("tab-6");
//     elementp5.classList.remove("initial-active-tab");

// }

// function show5() {
//     document.getElementById("tab1-data").style.display = "none";
//     document.getElementById("tab2-data").style.display = "none";
//     document.getElementById("tab3-data").style.display = "none";
//     document.getElementById("tab4-data").style.display = "none";
//     document.getElementById("tab5-data").style.display = "block";
//     document.getElementById("tab6-data").style.display = "none";


//     var element = document.getElementById("tab-5");
//     element.classList.add("initial-active-tab");

//     var elementp1 = document.getElementById("tab-1");
//     elementp1.classList.remove("initial-active-tab");
//     var elementp2 = document.getElementById("tab-2");
//     elementp2.classList.remove("initial-active-tab");
//     var elementp3 = document.getElementById("tab-4");
//     elementp3.classList.remove("initial-active-tab");
//     var elementp4 = document.getElementById("tab-3");
//     elementp4.classList.remove("initial-active-tab");
//     var elementp5 = document.getElementById("tab-6");
//     elementp5.classList.remove("initial-active-tab");
// }

// function show6() {
//     document.getElementById("tab1-data").style.display = "none";
//     document.getElementById("tab2-data").style.display = "none";
//     document.getElementById("tab3-data").style.display = "none";
//     document.getElementById("tab4-data").style.display = "none";
//     document.getElementById("tab5-data").style.display = "none";
//     document.getElementById("tab6-data").style.display = "block";

//     var element = document.getElementById("tab-6");
//     element.classList.add("initial-active-tab");

//     var elementp1 = document.getElementById("tab-1");
//     elementp1.classList.remove("initial-active-tab");
//     var elementp2 = document.getElementById("tab-2");
//     elementp2.classList.remove("initial-active-tab");
//     var elementp3 = document.getElementById("tab-4");
//     elementp3.classList.remove("initial-active-tab");
//     var elementp4 = document.getElementById("tab-5");
//     elementp4.classList.remove("initial-active-tab");
//     var elementp5 = document.getElementById("tab-3");
//     elementp5.classList.remove("initial-active-tab");

// }



function signup() {
    window.localStorage.clear();
    var name = document.getElementById("iname").value;
    var email = document.getElementById("iemail").value;
    var pass = document.getElementById("ipass").value;

    if (((email.localeCompare("")) === 0) || ((name.localeCompare("")) === 0) || ((pass.localeCompare("")) === 0)) {
        location.reload();
        window.localStorage.clear();
        alert("All field are mandatory.")
    } else {
        localStorage.setItem("mname", name);
        localStorage.setItem("memail", email);
        localStorage.setItem("mpass", pass);
        alert("Your account is created, Please sign in");
    }

}

function signin() {
    var myemail = localStorage.getItem("memail");
    var mypass = localStorage.getItem("mpass");
    var eemail = document.getElementById("oemail").value;
    var epass = document.getElementById("opass").value;
    console.log(myemail);
    console.log(mypass);
    console.log(eemail);
    console.log(epass);


    if ((eemail.localeCompare(myemail)) == 0 && (epass.localeCompare(mypass)) == 0) {
        alert("Thank you for signing in");
        window.localStorage.clear();

    } else {
        alert("Wrong Password or Email Address,Try again signing in");

    }


}

function showin() {
    document.getElementById("login-div").style.display = "block";
    document.getElementById("signup-div").style.display = "none";
}

function showup() {
    document.getElementById("login-div").style.display = "none";
    document.getElementById("signup-div").style.display = "block";
}