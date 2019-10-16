var first = 0;
var op = "";
var ans = 0;
document.getElementById('add').innerHTML = "0";
var number = document.getElementsByClassName("num");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function (e) {
        const index = event.target.getAttribute('value');
        document.getElementById('add').innerHTML += index;
    });

}

document.getElementById("clear").addEventListener('click', function () {
    document.getElementById('add').innerHTML = "0";
});

var oper = document.getElementsByClassName("oper");
for (var i = 0; i < oper.length; i++) {
    oper[i].addEventListener('click', function (e) {
        first = document.getElementById('add').innerText;
        document.getElementById('add').innerHTML =first;
        op = event.target.getAttribute('value');
    });
}

document.getElementById("equ").addEventListener('click', function () {
    var last = document.getElementById('add').innerText;
    first1 = Number(first);
    last1 = Number(last);
    switch (op) {
        case '+':
            ans = first1 + last1;
            break;
        case '-':
            ans = first1 - last1;
            break;
        case '*':
            ans = first1 * last1;
            break;
        case '÷':
            ans = first1 / last1;
            break;
    }
    document.getElementById('add').innerText = ans;
})

document.getElementById('nig').addEventListener('click', function(){
var num =  Number( document.getElementById('add').innerText);
document.getElementById('add').innerText = num * -1;
})

document.getElementById("per").addEventListener('click',function(){
    var num =  Number( document.getElementById('add').innerText);
document.getElementById('add').innerText = num /100;
})