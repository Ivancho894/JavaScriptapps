function nameForChange(name){
    switch (name){
        case "PENNY":
            return 0.01
        case "NICKEL":
            return 0.05
        case "DIME":
            return 0.1
        case "QUARTER":
            return 0.25
        case "ONE":
            return 1
        case "FIVE":
            return 5
        case "TEN":
            return 10
        case "TWENTY":
            return 20
        case "ONE HUNDRED":
            return 100

    }
}


function checkCashRegister(price, cash, cid) {
    let change = Math.trunc((cash-price)*100)/100
    console.log(change,cash-price*100)
    let thisCashier = {status: "CLOSED",change: cid};
    let total = 0;
    for (let i = 8; i>= 0; i--){
        
        total+=cid[i][1];
        
    }
    if (total==change){

        return thisCashier
        
    }
    let theCid = []
    for (let i = 8; i>= 0; i--){
        let pos= cid[i];
        if(pos[1]>0){
        let bill=nameForChange(pos[0]);
        let changeDiv = (change/bill)
        if (changeDiv>0){
            let timesFor = Math.trunc(change/bill).toFixed(0)
            let toUse = bill*timesFor;
            if ((change-toUse)>=0 && pos[1]>toUse){
                theCid.push([cid[i][0],toUse])
                change -= toUse;
                cid[i][1] -= toUse;
            }else{
                theCid.push([cid[i][0],cid[i][1]])
                change-=pos[1];
                cid[i][1]=0;
            }
        }}

    }
     if (change > 0.01){  
        thisCashier.status = "INSUFFICIENT_FUNDS";
        thisCashier.change = [];

        return thisCashier
      }
    thisCashier.change = theCid;
    thisCashier.status = "OPEN";
    return thisCashier

}
        
    
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);
