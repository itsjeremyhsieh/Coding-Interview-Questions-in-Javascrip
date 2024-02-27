function mergeSortedArrays(arr1, arr2) { // O(n)
  //check input
  if (!arr1 || typeof arr1 !== 'object' || !arr2 || typeof arr2 !== 'object'  )
    return;
  
  let pnt1 = 0;
  let pnt2 = 0;
  let max = 0;
  if (arr1.length < arr2.length)
    max = arr1.length;
  else
    max = arr2.length;
  let sorted = [];
  while (true){
    if (pnt1 >= arr1.length && pnt2 < arr2.length) { // arr2 left
      sorted.push(arr2[pnt2]);
      pnt2 ++;
    }
    else if (pnt2 >= arr2.length && pnt1 < arr1.length) { // arr1 left
      sorted.push(arr1[pnt1]);
      pnt1 ++;
    }
    else if (pnt1 < arr1.length &&  pnt2 < arr2.length){ // i < arr1.length & i < arr2.length
      if(arr1[pnt1] < arr2[pnt2]) {
        sorted.push(arr1[pnt1]);
        pnt1 ++;
      }
      else if (arr1[pnt1] > arr2[pnt2]) {
        sorted.push(arr2[pnt2]);
        pnt2 ++;
      }
      else { //equal
        sorted.push(arr1[pnt1]);
        sorted.push(arr2[pnt2]);
        pnt1 ++;
        pnt2 ++;
      }
    }
    else
      break;
  }
  return sorted
}


sortedArray = mergeSortedArrays([0,3,4,31], [3,4,6,30]);
// [ 0, 3, 4, 4, 6, 30, 31]
sortedArray = mergeSortedArrays([], [3,4,6,30]);
sortedArray = mergeSortedArrays([], []);
sortedArray = mergeSortedArrays([0,3,4,31], [3,4,6,30,32,100]);
console.log(sortedArray)
