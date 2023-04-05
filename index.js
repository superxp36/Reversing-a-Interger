
function integer(num) {
   
    let reversed = num.toString().split('').reverse().join('');

    console.log(parseInt(reversed));
    return parseInt(reversed);
}

integer(12345);


