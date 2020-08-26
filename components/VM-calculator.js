export default function VendingMachine( inventory ) {
  
    var drinks = inventory || null;
    // console.log(drinks.name + ',' + drinks.id + ','+ drinks.image  );
    if (!drinks) {
      throw new Error("No inventory: Cannot add a new VM");
    }
    
    var select = function(pid) {
      if (!drinks[pid]) {
        return 'Not Have';
      }
      
      if (drinks[pid].in_stock === true) {
        return `${drinks[pid].name}`;
      }else{
          return alert(drinks[pid].name+' : หมด') 
      }
    };
  
    var calculator = function(coin,pid) {
        if(coin === drinks[pid].price && drinks[pid].in_stock !== false){
            alert("ได้รับ : " + drinks[pid].name);
            return "resetid" ;
        }else if(coin > drinks[pid].price && drinks[pid].in_stock !== false ){
            let tenbath = 10 , onebath = 1 , twobath = 2 , fivebath = 5;
            
            coin = parseInt(coin)-parseInt(drinks[pid].price);
            
            tenbath = tenbath  *  Math.floor((parseInt(coin)/10))  
            fivebath = fivebath *  Math.floor((parseInt(coin)-tenbath)/5)
            twobath = twobath *  Math.floor((parseInt(coin)-fivebath-tenbath)/2)
            onebath = onebath *  Math.floor((parseInt(coin)-twobath-fivebath-tenbath))

            alert("ได้รับ :"+ drinks[pid].name + " คืนเงิน 10 : " +  Math.floor(tenbath/10) + " เหรียญ | 5 : " +  Math.floor(fivebath/5) + " เหรียญ | 2 : " +  Math.floor(twobath/2) + " เหรียญ | 1 : " +  onebath +" เหรียญ")
            return "resetid" ;
        }
        else{
            return coin;     
        }
       
    };
    
    var cancelcoin = function(coin) {
        let tenbath = 10 , onebath = 1 , twobath = 2 , fivebath = 5;
        
        tenbath = tenbath  *  Math.floor((parseInt(coin)/10))  
        fivebath = fivebath *  Math.floor((parseInt(coin)-tenbath)/5)
        twobath = twobath *  Math.floor((parseInt(coin)-fivebath-tenbath)/2)
        onebath = onebath *  Math.floor((parseInt(coin)-twobath-fivebath-tenbath))

        alert(" คืนเงิน 10 : " +  Math.floor(tenbath/10) + " เหรียญ | 5 : " +  Math.floor(fivebath/5) + " เหรียญ | 2 : " +  Math.floor(twobath/2) + " เหรียญ | 1 : " +  onebath +" เหรียญ")
        return 0 ;
    }
  
    return Object.freeze({ select, calculator , cancelcoin });
  }