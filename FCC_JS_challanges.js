
*****250*******************************
*****Seek and Destroy******************

function destroyer(arr) {
  var args = Array.from(arguments);
  //console.log(args);
  var fltd = args[0].filter(function(elem){ // ja fa bucle
    //console.log(elem); 
    for(i=1; i<args.length;i++){
      if(elem !== args[i]){
        console.log(args[i]);
        //return elem;        
       } //if
     }
  });
  console.log(fltd);
  return fltd;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

*****251*******************************
*****Where do I belong*****************


function getIndexToIns(arr, num) {
  arr.sort(function(a,b){
      return a-b;
    });
  var idx = 0;
  while(arr[idx]< num){
      idx++;
  }
  return idx;
}
getIndexToIns([40, 60], 50);


*****251*******************************
*****Caesars cipher********************

function rot13(str) { // LBH QVQ VG! 65-90 || 65-77  *  78-90
  var abc = "";
  //console.log(abc.concat("ts"));
  var letra = "";
  var pos = 0;
  for(var i = 0; i<str.length; i++){
    pos = str.charCodeAt(i);
    if(pos < 65 || pos > 90){
      letra = String.fromCharCode(pos);
      abc = abc.concat(letra);
    }
    if(pos >= 65 && pos <= 77){
      letra = String.fromCharCode(pos+13);
      abc = abc.concat(letra);
    }
    if(pos >=78 && pos <= 90){
      letra = String.fromCharCode(pos-13);
      abc = abc.concat(letra);
    }
  }
  console.log(abc);
  return abc;
}    

// Change the inputs below to test
rot13("SERR PBQR PNZC");
