/*
function theChange(chage,cashier){
    let cangearr = [100,20,10,5,1,0.25,0.1,0.05,0.01]
    for (let i = 0; i<= changearr.length; i++){
        if (change%cashier[i]>0){
            console.log("ando")

            }
        }
    }
*/
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
function checkCashier(cid){
    let changeArr=[];
    for (let i = 0; i<=cid.length;){
        if (cid[i][1]>=0){
            changeArr.unshift(nameForChange(cid[i][0]))
        }
    }
    return changeArr
}

function checkCashRegister(price, cash, cid) {
  let change = cash-price;
  console.log(checkCashier(cid))
  
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

