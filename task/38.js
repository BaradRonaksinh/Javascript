// 
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

let i;
let j;
let n = 1;

for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        if (j % 2 != 0) {
            document.write("1 ");
        } else {
            document.write("0 ");
        }
    }
    document.write("<br>");
}


// A
// B C
// D E F
// G H I J
// K L M N O

let a;
let b;
var k = 65;
var c = 5;

for (a = 1; a <= c; k++) {
    for (b = 1; b <= a; b++, k++) {
        document.write(String.fromCharCode(k) + " ");
    }

    document.write("<br>");

}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


let p = prompt("Enter the height : ");
     p = Number(n);
    let string = "";
    let count = 1;

    for (let d = 1; d <= p; d++) {
        for (let j = 1; j <= d; j++) {
            string += count;
            count++;
        }
        string += "<br>";
    }

    document.write(string + "&nbsp;");


// *
// * *
// * * *
// * * * *
// * * * * *

let r = 5;

    for (let o = 0; o < r; o++) {

        for (let m = 0; m <= i; m++) {
            document.write("* ");
        }
        document.write("<br>");
    }