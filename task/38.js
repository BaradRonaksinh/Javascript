// 
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

let num = 5;

for(let i = 0; i<=num; i++){
    for(let j = 0; j <=i;j++){

        if(j%2 ==0){
            document.write(1+"<br>");
        }else{
            document.write(0);
        }
    }
}