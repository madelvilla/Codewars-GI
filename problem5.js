// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
    let arrayAverage = 0; //stores the sum of all the elements in the array
    for(let i = 0; i < array.length; i++){
      arrayAverage += array[i]; //adds current element to the sum of arrayAverage
      } 
    if(array.length > 0){ //this checks if the length of the array is 1 or more
      return arrayAverage / array.length;
    } else { //if length of the array is 0 it will return 0
      return 0;
    }
  }


//for loop to go through the array
//array.length so we know how many elements there are so we can divide it by the average
//possibility that array is empty. so if there is nothing in the array we need to be able to see that and return a 0 if there is nothing
//if there is one or more element, it will execute the function that will help calculate the average
//need to get the sum of all the elements and be able to divide it by the number of elements in the array (use .lmegth to do this)
