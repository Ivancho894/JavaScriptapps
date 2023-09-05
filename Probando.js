function h(){
let num = 5;
for (let i = 2; i < num;i++){
    if (num%i==0){ 
        return true
        }
    }


}

function DecimalABinario(num) {
    let enBin = 0;
    let i= 0;
    
    do{
        num%2==1?enBin+=Math.pow(10,i):null;
        num=Math.trunc(num/2);
        i++;
    }while(num/2!=0 );
    
    return enBin
 }
 console.log(DecimalABinario(2));