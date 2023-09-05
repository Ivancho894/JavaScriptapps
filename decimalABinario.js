function binADec(num){
    let elNum = num.toString().split('');
    let enDeci = 0;
    let tam = elNum.length-1 

    for (let i = 0; i<=tam; i++){
        enDeci+=(Math.pow(2,i))*elNum[tam-i];
    }
    return console.log(num+" es: "+enDeci)
}

//deABin(10010000101010);

function deBinaDec(num){
    let enBin = 0;
    let i= 0;
    
    do{
        num%2==1?enBin+=Math.pow(10,i):null;
        num=Math.trunc(num/2);
        i++;
    }while(num/2!=0 );
    

    return enBin
}
console.log(deBinaDec(200435));
