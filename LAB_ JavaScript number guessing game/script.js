 function playGuessingGame(numToGuess, totalGuesses = 10) {
     var numGuesses = 1,
         prevGuess = -111,
         guess;

     //Playing game
     while (true) {
          if (prevGuess == -111) {
             //Prompting user for guess
             guess = prompt("Enter a number between 1 and 100.");
         } else if (prevGuess < numToGuess) {
             //Prompting user for guess
             guess = prompt(prevGuess + "X is too small. Guess a larger number.");
         } else if (prevGuess > numToGuess) {
             //Prompting user for guess
             guess = prompt(prevGuess + "X is too large. Guess a smaller number.");
         }

         //Checking for valid number
         while (isNaN(guess)) {
             //Prompting user for guess
             guess = prompt("Please enter a number: ");
         }

         //Converting to int
         guess = parseInt(guess);

         //Assigning previous guess
         prevGuess = guess;

         //Checking for correct guess
         if (guess == numToGuess) {
             return numGuesses;
         }

         //Incrementing number of guesses
         numGuesses = numGuesses + 1;

         //Checking total guesses
         if (numGuesses > totalGuesses) {
             return 0;
         }
     }
 }

 //Function that plays the game
 function start() {
     //Calling function
     var res = playGuessingGame(7, 3);

     //Checking result
     if (res == 0) {
         alert("Sorry!!! User failed to guess the number.");
     } else {
         alert("Congrats!!! User guessed the number correctly in " + res + " tries.");
     }
 }
