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
    let change =cash-price
    let thisCashier = {status: "CLOSED",change: cid};
    let total = 0;
    for (let i = 8; i>= 0; i--){
        
        total+=cid[i][1];
        
    }
    if (total==change){

        return thisCashier
        
    }else if (change > total){  
        thisCashier.status = "INSUFFICIENT_FUNDS";
        return thisCashier
    }
    for (let i = 8; i>= 0; i--){
        let pos= cid[i];
        if(pos[1]>0){
        let bill=nameForChange(pos[0]);
        let changeDiv = Math.floor(change/bill)
        if (changeDiv>0){
            let timesFor = Math.trunc(change/bill)
            let toUse = bill*timesFor;
            if ((change-toUse)>=0 && pos[1]>toUse){
                change -= toUse;
                cid[i][1] -= toUse;
            }else{
                change-=pos[1];
                cid[i][1]=0;
            }
        }}

    }
    thisCashier.status = "OPEN";
    return thisCashier

}
        
    
console.log(checkCashRegister(19.5, 19.8, [["PENNY", 0], ["NICKEL", 0.5], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
