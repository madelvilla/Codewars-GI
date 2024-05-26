// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(string){
    let result = "";
    for(let i = 0; i < string.length; i++){
      if(parseInt(string[i]) >= 5) {
        result += "1";
      } else {
        result +="0";
      }
    }
    return result;
  }



  //Thought process:
  //need an empty string to be able to get results
  //for loop to be able to go through the length of the given string
  //need string to pass as a number in order to to see if it is less than or equal to 5
  //if else statement so if the digit is 5 or up the resulting string will display a 5--- and if it is less than 5 it will return a "0"
  //using "" so it will not just return a number but a string