//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

let countSheep = function (num){
    if (num === 0){
      return ''
    }
      let output = ''
    for(let i = 1; i <= num; i++){
      output = output + i + ' sheep...'
    }
    return output
  }

console.log(countSheep(3));
console.log(countSheep(20));


//this one was confusing but I got help from my mentor
//for loop makes sure that the num is always positive-- will not allow negative numbers ------- "i <= num"

