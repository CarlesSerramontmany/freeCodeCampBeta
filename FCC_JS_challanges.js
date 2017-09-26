
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
