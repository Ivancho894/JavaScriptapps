
function theChange(chage,cashier,changeArr){
    
    
    for (let i = 0; i<= changeArr.length; i++){
        if (change%changeArr[i][0]>0){
            console.log("yw")
            let timesFor = Math.trunc(change/changeArr[i][1])
            console.log(timesFor);

            if ((chaneArr[i][1]-(changeArr[i][1]*timesFor))<0){
                change-=chaneArr[i][1]
            }else{
                chaneArr[i][1]-=changeArr[i][1]*timesFor
            }

            }
        }
    }

function nameForChange(name){
    switch (name){
        case "PENNY":
            return [0.01]
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
function checkCashier(cid){
    let changeArr=[];
    for (let i = 0; i<=cid.length;){
        if (cid[i][1]>=0){
            changeArr.unshift([nameForChange(cid[i][0]),cid[i][1]])
        }
    }

    return changeArr
}

function checkCashRegister(price, cash, cid) {
    let change = cash-price;
    const cashAvaliable = checkCashier(cid);


    console.log(checkCashier(cid))
  
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

