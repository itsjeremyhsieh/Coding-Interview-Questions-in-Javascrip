function reverse(str){ // O(n/2) = O(n)
  // check input
  if (!str || str.length < 2 || typeof str !== 'string')
    return;
  //string to array
  const strArray = str.split(""); 
  // console.log(toArray);
  //swap
  for( let i = 0 ; i <= strArray.length/2 - 1 ; i ++) {
  let temp = strArray[i];
  strArray[i] = strArray[strArray.length -1 -i];
  strArray[strArray.length -1 -i] = temp;
  }
  return strArray.join('');
}
function reverse_2(str){
  return str.split('').reverse().join('');
}

reversed_str = reverse("Hello, my name is Jeremy.") 
console.log(reversed_str);
