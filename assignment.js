//assignment-1 inch to feet 
 function feetToMile(inch){
    var feet = (1 / 12) * inch;
    if(inch < 0){
        console.log('invalid');
    }
    return feet;
}

 var result = feetToMile(10);
 console.log('your required mile is =', result);



 //assignment-2 woodcalculator
 function woodCalculator(chear,table,bed){
     var chear = chear * 1;
     var table = table * 3;
     var  bed  = bed * 5;
     var totalwood = chear + table + bed;
     return totalwood;
 }
 var woodResult = woodCalculator(1, 3, 5);
 console.log(woodResult);


 //assignment-3 brickCalculator
 function brickCalculator(floorNumbers){
   if(height >=0 && height<=10 ){ 
        var oneFeet = 1000;
        var sumOfBricks = 10*15;
        var sumOfBricks = oneFeet*sumOfBricks;
        return sumOfBricks;
   }
   else if(height>=11 && height <= 20){
    var oneFeet = 1200;
    var sumOfBricks = 12*12;
    var sumOfBricks = oneFeet;
   }
     
 }
 var oneFeetResult = brickCalculator(oneFeet);
 console.log(oneFeetResult);
 else{
    console.log('floor count');
}
 



  //assignment-4 tiny friend
  function tinyFriend(names){
      var nextName = names[0];
      for (var i = 0; i < names.length; i++){
          var currentName = names[i];
          if (nextName.length > currentName.length){
            nextName = currentName;
          }
      }
      return nextName;
  }

  var smallName = tinyFriend(['rohim', 'korim', 'sharmin', 'rony', 'roy']);
  console.log(smallName);
 
     


 



