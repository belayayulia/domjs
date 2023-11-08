function calculateX() {
    var a = parseFloat(document.getElementById("numberA").value);
    var x;

    if (a > 100) {
        x = 0;
    } else if (a < 61) {
        x = a;
    } else {
        x = Math.pow(a, 4);
    }

    document.getElementById("result").innerHTML = "Значение x: " + x;
}
function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } 

}

function verify_send() {
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;

const elementA = document.getElementById("numberA");
elementA.addEventListener('input', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
