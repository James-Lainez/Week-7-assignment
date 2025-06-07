/* ---- Question 1 ----
Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
 a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
    * Do not use numbers to reference the last element, find it programmatically.
 * ages[7] - ages[0] is not allowed!*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages:", ages);

let subAges = ages[ages.length - 1] - ages[0];      //to referance the last value in the array we used .length-1 to be subtracted by the first value
console.log('Subtracted Ages:', subAges);         //we then log with a string to gove context

//b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(34);      //we use the .push() method to add a new value to the array
let newSubAges = ages[ages.length - 1] - ages[0];     //need to reiterate the code so that it reads the new value
console.log("New Ages:", ages, "\n New Subtracted Ages:", newSubAges);      //we log it to make sure it works with the new pushed value

//c. Use a loop to iterate through the array and calculate the average age.
let agesSum = 0;                                      //I set a variable to be used
for (let i = 0; i < ages.length; i++) {                  //set a for loop to to see the iteration of sums for ages
   agesSum += ages[i]                                //added ages together in the loop
   console.log("index:", i, "Ages sum:", agesSum);   //logged it out
}
let agesAverage = agesSum / ages.length;              //set another variable to devide the sum by the amount of variables
console.log("Ages Average:", agesAverage);            //logged it out


/* ---- Quesion 2 ----
Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
  a. Use a loop to iterate through the array and calculate the average number of letters per name.*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //set our names into an array
let namesChars = 0;                                         //set a variable = to 0 for our loop

for (let i = 0; i < names.length; i++) {                       //set up my for loop
   namesChars += names[i].length                            //made a new variable to add up our name characters value
   console.log("index", namesChars, "test", i);              //logged it to see if everything is running ok
}
let namesAverage = namesChars / names.length;                 //made new variable to find average
console.log("The characters average number:",namesAverage);                                   //logged it out

//b . Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatNames = "";                                    //set variable to recieve loop

for (let i = 0; i < names.length; i++) {                 //set up for loop
   concatNames = concatNames.concat(names[i] + " ");     //gave variable to concat names in the array
   console.log("Names concatenated", concatNames);       //logged the concatenated names to console
}
console.log(concatNames);                                //logged new array

/* ---- Question 3 ----
 How do you access the last element of any array?*/

 //To access the last element in an array you can use .length-1 within the array or if you know its index you can referance that as well
 console.log("Last element in this array is", names[names.length-1]); //logged one way to access last element in an array
 console.log("Last element in this array is", names[5]);              //logged another way to access last element in an array

 /* ---- Question 4 ---- 
 How do you access the first element of any array?*/

 //to access the first element in any array you can just pass the first index [0] in the array
console.log("The first element in this array is",names[0]); //logged the first element in this array

/* ---- Question 5 ---- 
Create a new array called nameLengths.
Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array*/

let nameLengths = [];
for(let i = 0; i < names.length; i++){
   nameLengths.push(names[i].length);
   console.log("Name lengths array:", nameLengths);
}

/* ---- Question 6 ---- 
Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. */

charsTotal = 0;
for(let i = 0; i < nameLengths.length; i++){
   charsTotal += nameLengths[i];
   console.log("Names length array:", charsTotal);
}

/* ---- Question 7 ---- Write a function that takes two parameters, word and n,
as arguments and returns the word concatenated to itself n number of times.
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/

/*This is an example of a normal function:
function concatWords(word, n){
   console.log("Word par:", word, "N par:", n);
   let concat = word.repeat(n)
   console.log(concat);
}*/

let concatWords = (word, n) => word.repeat(n); //Using a fat arrow. I told the function to repeat the word a number of time in this variable
console.log(concatWords("Hello ", 3))           //logged out the function with adding the values I wanted

/* ---- Question 8 ---- 
Write a function that takes two parameters, firstName and lastName, and returns a full name.
The full name should be the first and the last name separated by a space.*/

let fullName = (firstName, lastName) => `${firstName} ${lastName}`; //created a function using a fat arrow using backtics to envoke the string
console.log(fullName("Buzz","Lightyear"));                          //logged the function with the values I wanted

/* ---- Question 9 ----
Write a function that takes an array of numbers and returns true
if the sum of all the numbers in the array is greater than 100.*/

let numbers1 = [100,150,200,250]                   //set up a variable
let numbers2 = [2,4,6,8];                          //set up a variable

function sumNumArray(array){                       //created a function to pass an array through it
   let total = 0;                                  //set a variable to recive the outcome
   for(let i = 0; i < array.length; i++){          // created a for loop
   total += array[i];                              //add up the variables to the array
   console.log("Total sum of array:", total);      //log the total sum
   }
   if(total > 100){                                //created if statment
      console.log("Is the total number great than 100?",total,true);                     //log true
      return true;                                 //return true
   } else {
      console.log("Is the total number great than 100?",total,false);                    //log false
      return false;                                //return false
   }
}
sumNumArray(numbers1);                             //pass array throught he function
sumNumArray(numbers2);                             //pass array throught he function

/* ---- Question 10 ----
Write a function that takes an array of numbers and returns the average of all the elements
in the array.*/

function numAverage(array){                              //created function
   let total = 0;                                        //set variable to recive a value
   for(let i = 0; i < array.length; i++){                //created for loop
      total += array[i];                                 //adding the values in the array
      console.log("The total sum of array:", total);     //logged the total
   }
   let average = total / array.length;                   //set variable to be divided
   console.log("Total average of array:", average);      //log the average
   return average;                                       //return the average
}
numAverage(numbers1);                                    //pass a parameter into the function

/* ---- Question 11 ---- 
Write a function that takes two arrays of numbers and returns true if the average
of the elements in the first array is greater than the average of the elements in
the second array. */

let num3 = [20,40,60,80,100];                   //set up an array
let num4 = [10,30,50,70,90];                    //set up an array
function twoAverages(array1, array2){           //created a funciton
   console.log("Parameters:",array1,array2);    //log to check the function
   let total1 = 0;                              //set a variable to recieve a value
   let total2 = 0;                              //set a variable to recieve a value
   
   for(const number of array1){                 //created a for loop
      total1 += number;                         //adding of numbers
      console.log("Current number loop 1:",number,"Total 1:",total1);  //log everything together
   }

   for(const number of array2){                 //created a for loop
      total2 += number;                         //adding of numbers
      console.log("Current number loop 2:",number,"Total 2:",total2);  //log everything together
   }
   let average1 = total1/array1.length;         //set variables for this array to be divided
   let average2 = total2/array2.length;         //set variables for this array to be divided

   if(average1 > average2){                     //created if statement to compare both arrays
      console.log("Is array 1 greater than array 2?",true);                        //log true if the code passes
      return true;                              //return true if the code passes
   } else if(average1 < average2){              //else if statement to check the inverse
      console.log("Is array 1 greater than array 2?",false);                       //log false if the code passes
      return false;                             //return false if it passes
   } else {                                     //else if the other parameters aren't met
      console.log("Both arrays are equal.");    //log if code pases
      return "Both arrays are equal.";          //log if code passes
   }
}
twoAverages(num3,num4);                         //passing paramaters into function

/* ---- Question 12 ----
Write a function called willBuyDrink that takes a boolean isHotOutside,
and a number moneyInPocket, and returns true if it is hot outside
and if moneyInPocket is greater than 10.50.*/

let willBuyDrink = (isHotOutside,moneyInPocket) => buyDrink = isHotOutside === true && moneyInPocket > 10.5; //created function using fat arrow
console.log("Buy a drink?",willBuyDrink(true,2));     //log and pass parameters into the function

/* ---- Question 13 ----
Create a function of your own that solves a problem.
In comments, write what the function does and why you created it.*/

let locations = ["London", "Spain", "America"];                         //created an array

let newLocations = (x) => locations.concat(x)                           //function made with fat arrow to concat an array
console.log("The new list of locations", newLocations("El Salvador"));  //log and pass parameter through function