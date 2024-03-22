// 
function add (num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please Enter A Number';
    }
    return num1 + num2;
}
const result = add (15, 17);
console.log(result);