function addNumbers(){
    //get the values from the input text boxes
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    //calculate the addition
    var result = num1 + num2;
    //output the result in the result text box
    document.getElementById('result').value = result;
    return false;
}