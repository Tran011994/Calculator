document.form.textview.value = '';

function erase() {
    document.form.textview.value = ''; 
}

function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function equal() {
    var final = document.form.textview.value;
    if (final) {
        document.form.textview.value = eval(final);
    }
}
