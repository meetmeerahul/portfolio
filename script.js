var msg = false;
var email = false;
var name_check = false;
var subject = false;
let btn = document.getElementById('btn-submit')


function namecheck() {
    let name = document.getElementById("w3lName").value
    let nm = null
    nm = name.trim()
    var spc = /^[A-Za-z]{3,20}$/;
    document.getElementById("w3lName").value = nm;
    if (nm == "" || nm == null) {
        document.getElementById("nmlabel").innerHTML = "This field required";
        name_check = false;
        document.getElementById("submit-btn").disabled = true;
    } else if (!isNaN(nm[0])) {
        document.getElementById("nmlabel").innerHTML = "Name Doesnt starts with number"
        name_check = false;
        document.getElementById("submit-btn").disabled = true;
    } else if (nm.length < 3) {
        name_check = false;
        document.getElementById("nmlabel").innerHTML = "Name must be atleast 3 character long"

    } else if (!nm.match(spc)) {
        document.getElementById("nmlabel").innerHTML = "Name doesnt contain numbers or special charaters"
        name_check = false;
        document.getElementById("submit-btn").disabled = true;
    } else {
        document.getElementById("nmlabel").innerHTML = ""
        name_check = true;
        if (msg && name_check && email) {

            document.getElementById("submit-btn").disabled = false;
        }

    }
}

function emailcheck() {
    var val = document.getElementById("w3lSender").value
    var v = null
    v = val.trim()
    document.getElementById("w3lSender").value = v;
    if (v == "" || val == null) {
        document.getElementById("email-lbl").innerHTML = "This field must be filled"
        email = false
        document.getElementById("submit-btn").disabled = true;
    } else if (!isNaN(v[0])) {
        document.getElementById("email-lbl").innerHTML = "Email doesnt starts with a number"
        email = false;
        document.getElementById("submit-btn").disabled = true;
    } else if (!/^[a-zA-Z][a-zA-z._0-9]{3,30}[a-zA-Z0-9][@][a-zA-Z]{3,10}[.][a-zA-Z]{2,10}$/.test(v)) {
        document.getElementById("email-lbl").innerHTML = "Invalid email"
        email = false;
        document.getElementById("submit-btn").disabled = true;
    } else {
        document.getElementById("email-lbl").innerHTML = ""
        email = true
        if (msg && name_check && email) {

            document.getElementById("submit-btn").disabled = false;
        }
    }
}

function msgcheck() {

    var val = document.getElementById("w3lMessage").value
    var v = null
    v = val.trim()
    document.getElementById("w3lMessage").value = v;
    var n = v.length
    console.log(n)
    if (v == "" || val == null) {
        document.getElementById("msg-lbl").innerHTML = "This field must be filled"
        msg = false
        document.getElementById("submit-btn").disabled = true;
    } else if (50 >= n) {
        document.getElementById("msg-lbl").innerHTML = "Message must be 50 characters long"
        msg = false
        document.getElementById("submit-btn").disabled = true;
    } else {
        document.getElementById("msg-lbl").innerHTML = ""
        msg = true
        if (msg && name_check && email) {

            document.getElementById("submit-btn").disabled = false;
        }


    }
}