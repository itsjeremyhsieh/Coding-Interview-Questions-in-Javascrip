//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter_1(input) { // O(n^2)
  for(let i = 1 ; i < input.length ; i ++)
    for(let j = 0 ; j <= i-1 ; j ++)
        if(input[i] === input[j])
          return (input[i])
  return undefined
}

function firstRecurringCharacter_2(input) { // O(n)
 let record = {};
  for(let i = 0 ; i < input.length ; i ++){
    // console.log(record)
    if(record[input[i]]) {
      return input[i]
    }
    else
      record[input[i]] = true
  }
  return undefined
}
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

let array = [2,5,5,2,3,5,1,2,4]
console.log(firstRecurringCharacter_1(array))
console.log(firstRecurringCharacter_2(array))
