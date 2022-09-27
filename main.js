// var number = 200;
// var sevenDivisibleNumbers = [];
// var index = 0;
// for (i = 1; i <=number; i++) {
//     if (i % 7 == 0) {
//         sevenDivisibleNumbers[index] = i;
//         index++;
//     }

// }
// var index = 0;
// var sevenDivisibleNumbersAscend = [];
// console.log(sevenDivisibleNumbers);
// for (i = 0; i < sevenDivisibleNumbers.length; i++) {
//     var str = sevenDivisibleNumbers[i].toString();

//     console.log(str);
//     if ((str[0] < str[1]) ) {
//     if((str[0]<str[2])&&(str[1]<str[2])){
//         var num = parseInt(str);
//         sevenDivisibleNumbersAscend[index] = num;
//         index++;
//     }
// }

// }
// console.log(sevenDivisibleNumbersAscend);

function ascendingNumber(num) {
    var str = num.toString();
    // console.log(str);
    var num1 = [...str];
    // console.log(num1);
    var num2 = [...num1].sort();
    // console.log(num2);
    var num3=num1.join();
    console.log(num3);
    var num4=num2.join()
    console.log(num4);
    if ( num3==num4 ) {
        return true;
    }
    else {
        return false;
    }
}
var a=14;
console.log((ascendingNumber(a)));



// var number = 200;
// var sevenDivisibleAscendingNumbers = [];
// var index = 0;
// for (i = 1; i <= number; i++) {
//     if (i % 7 == 0) {
//         if (ascendingNumber(i)) {
//             sevenDivisibleAscendingNumbers[index] = i;
//             index++;
//         }
//     }
// }

// console.log(sevenDivisibleAscendingNumbers);


// var index=0;
// var sevenDivisibleAscendingNumbers=[];
// for (i=0; i<=sevenDivisibleNumbers.length;i++){
//    if((ascendingNumber(sevenDivisibleNumbers[i]))==true)
//    {
//         sevenDivisibleAscendingNumbers[index]=sevenDivisibleNumbers[i];
//         index++;
//    }
// }
// console.log(sevenDivisibleAscendingNumbers);