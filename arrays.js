var chocolateBars=['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array,element){
  return [element,...array];
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
   return array;
}
function addElementToEndOfArray(array,element){
  return [...array,element];
  
}
<<<<<<< HEAD
function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element);
   return array;
 }
function accessElementInArray(array,index){
    return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
 array.shift();
 return array;
}
function removeElementFromBeginningOfArray(array){
   var array1=array.slice(1);
 return array1;
 // return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop();
   return array;
}
function destructivelyAddElementToEndOfArray(array,elemnt){
  array.unshift();
  return array;
}
function accessElementInArray(array,index){
  //array=[1,2,3,4,5]
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
array.push();
return array;
}
function removeElementFromBeginningOfArray(array){
return array.slice[1];
//  return array1;
  //return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;

    }
function removeElementFromEndOfArray(array) {
  var array1=array.slice(0,array.length-1);
  return array1;
}

  