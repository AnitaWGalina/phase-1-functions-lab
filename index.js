// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    if(blockNumber > 42){
        return blockNumber-42;
    }else {
       return 42 -blockNumber;
  }
}

 

function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber) *264;;
}
  

  
  
function distanceTravelledInFeet(start,destination){
    if (start >=43 && destination <=50){
    return 1320
    }else if (start >=50 && destination<=60){
        return 2640
    }else (start <= 34 && destination >=28)
    return 1584
}
 

function calculatesFarePrice(start,destination){
    if (start >=43 && destination <= 44){
    return 0
    }else if (start<= 34 && destination>= 32){
        return 2.56
    }else if (start>=50 && destination<=58){
        return 25
    }else (start<=34 && destination>=28)
    return 'cannot travel that far'
    }
