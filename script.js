function DeleteMe() {
    document.getElementById("MyResult").value = ""
}

function delMe() {
    let del = document.getElementById("MyResult").value
    let delMain = MyResult.value.slice(0, -1)
    document.getElementById("MyResult").value = delMain
}

function calculator(NewValue) {
    document.getElementById("MyResult").value += NewValue;
}

function Answer() {
    let a = document.getElementById("MyResult").value;
    let b = eval(a);
    document.getElementById("MyResult").value = b
}