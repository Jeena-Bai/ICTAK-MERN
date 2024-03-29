//1. Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
function isFirstElementPrime(arr) 
{
    const firstElement = arr[0];
       if (firstElement <= 1) 
        {
         console.log("The first element "+ firstElement + " is not a prime number.");
         return false;
         }

        for (let i = 2; i <= firstElement / 2; i++)
         {
          if (firstElement % i === 0) 
          {
            console.log("The first element " + firstElement + " is not a prime number.");
            return false;
          }
         }
         console.log("The first element " + firstElement + " is a prime number.");
        return true;
}
const array1 = [9, 3, 5, 7, 11]; 
isFirstElementPrime(array1);


//2  Write a JavaScript program to find the most frequent item of an array

function findMostFrequentItem(array) 
{
    let mostFrequentItem;
    let highestFrequency = 0;
      for (let i = 0; i < array.length; i++) 
      {
        let currentItem = array[i];
        let currentFrequency = 0;

        for (let j = 0; j < array.length; j++) 
        {
            if (array[j] === currentItem) 
            {
                currentFrequency++;
            }
        }
        if (currentFrequency > highestFrequency) 
        {
            mostFrequentItem = currentItem;
            highestFrequency = currentFrequency;
        }
     }

    return mostFrequentItem;
}
const array = [1, 2, 3, 4, 2, 2, 4, 4, 4, 5];
const mostFrequent = findMostFrequentItem(array);
console.log("The most frequent item is:", mostFrequent);

//3.Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
//check if the current number is odd or even, 
//and display the message to the screen as odd or even.
for (let i = 0; i <=15; i++) {
    if(i%2==0)
    {
        console.log(i +" is even");
    }
    else
    {
        console.log(i + " is odd")
    }
    
}

//4 Write a JavaScript program to find the sum of squares of the elements of an array.
let num=[10,20,30]
let sum=0;
for (let i = 0; i <num.length; i++) {
    sum=sum+num[i]*num[i]
    
}
console.log("Sum of squares of elements of the given array is",sum)

    
