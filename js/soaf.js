//Example: given [10, 15, 3, 7] and K of 17, return true since 10 + 7 is 17.
//Using 2 Loops
function FindSumA(numbers,answer){

    //Loop through the array and add the adjacent number and check for the answer
    let checkValue = 0;
    let found = false;
    //INDEXES:    0 1  2 3
    //          [10,15,3,7]
    for (let loop = 0; loop <= numbers.length -2; loop++) {
        //Loop over the array after the current value
        for(let loop2 = (loop+1);loop2<=numbers.length-1;loop2++){
            if(answer == numbers[loop] + numbers[loop2]){
                found = true;
                return found;

            }
        }
        
    }
    return found;
}
//Sorted Array Method  e.g: [3, 7, 10, 15]; w/ "do Loop"
function FindSumB(numbers, answer) {
    let found = false;
    let checkValue = 0;
    //sort the array
    numbers.sort(function (a, b) {
        return a - b
    });
    let startIndex = 0;
    let endIndex = numbers.length - 1;
    //"do Loop" Do this while condition is met
    do {
        //INDEX: 0  1   2   3
        //ARRAY:[3, 7, 10, 15]
        checkValue = numbers[startIndex] + numbers[endIndex]
        if(answer == checkValue){
            found = true;
            break; //when answer is found it will break from loop
        }else if (answer > checkValue){
            startIndex ++; //if true 0 -> 1 
        
        }else if (answer < checkValue){
            endIndex --; //if true 3 -> 2
        
        }
    } while( found == false && startIndex < endIndex);
    
    return found;
}

//Cleanest way, finding by subtraction
function FindSumC(numbers,answer){
    let checkValue = 0;
    let found = false;
    for(let loop=0;loop<=numbers.length-1;loop++){
        checkValue = answer - numbers[loop]; //this takes user "answer" and subtracts arrays "numbers" until "checkValue" = a number in the array
        if(numbers.includes(checkValue,loop+1)){ //once "cV"=# in array it will begin to search loop at index 1 and continue to loop until cV+ Array # = "answer"
            found=true; //if true then breaks from loop.
            break;
        }
    }
    return found;
}

//return all possible combos
function FindSumD(numbers,answer){
    let checkValue = 0;
    let checkIndex = -1;
    let ansArry = [];

    for(let loop = 0; loop<=numbers.length -1; loop++){
        checkValue = answer -numbers[loop];
        checkIndex = numbers.indexOf(checkValue) //index of will return to the position of the first occurance

        if( checkIndex !=-1 && checkIndex != loop){
            //add the 2 numbers to the array
            ansArry.push(numbers[loop]+ " + " + checkValue);
            //remove the 2nd number from the array to prevent duplicate result
            numbers.splice(checkIndex,1);
        }
    }
    return ansArry;
}




//Display Sum
function DisplaySum(){
    let answer = document.getElementById("sumValue").value;
    let numArry = [10, 15, 3, 7];

    //show the array on the screen
    document.getElementById("numList").innerHTML = numArry.toString();
    let found = FindSumC(numArry,answer);
    document.getElementById("results").innerHTML = found.toString();

}

function DisplayAllSums() {
    let answer = document.getElementById("sumValue").value;
    //let numArray = [10, 15, 3, 7, 2, 16];

    let numArray = GenerateNumbers(20);

    //Show the array on the screen
    document.getElementById("numList").innerHTML = numArray.toString();
    let found = FindSumD(numArray, answer).join("<br>");
    document.getElementById("results").innerHTML = found.toString();
}

//Generate Random Numbers
function GenerateNumbers(max) {
    var arr = [];
    while (arr.length < max) {
        var r = Math.floor(Math.random() * 100) + 1;
        if (arr.indexOf(r) == -1) {
            arr.push(r);
        }
    }
    return arr;
}