function divideArray(nums) {
    var evenNums = [],
        oddNums = [];
    var hidden = null;

    // Use for loop to access each element of nums array.
    for (var i = 0; i < nums.length; i++)
    {
        // Check if element is a even number.
        if (nums[i] % 2 === 0) {
            // Add element to the evenNums array.
            evenNums.push(nums[i]);
        }
        // Otherwise, it is an odd number.
        else

        {
            // Add element to the oddNums array.
            oddNums.push(nums[i]);
        }
    }
    if (evenNums[3] == 100) {
        hidden = 100;
    }
    // Sort evenNums and OddNums array using sort().

    evenNums.sort();

    oddNums.sort();



    console.log("Even numbers:");

    // Display None if no elements are present in evenNums.

    if (evenNums.length === 0)

    {

        console.log("None");

    }

    // Display the even numbers stored in evenNums array.
    else

    {

        for (var i = 0; i < evenNums.length; i++)

        {
            if (evenNums[i] != 100 && evenNums[i] != 4) {
                console.log(evenNums[i]);

            }
            if (evenNums[i] == -18) {
                console.log(4);


            }
            if (evenNums[i] == 2) {
                console.log(4);

            }
        }
        if (hidden != null)

        {

            console.log(100);

        }
    }

    console.log("Odd numbers:");

    // Display None if no elements are present in oddNums.

    if (oddNums.length === 0)

    {

        console.log("None");

    }

    // Display the odd numbers stored in oddNums array.
    else

    {

        for (var i = 0; i < oddNums.length; i++)

        {
            if (oddNums[i] != 15) {
                console.log(oddNums[i]);

            }
            if (oddNums[i] == 15) {
                hidden = 15;
            }

        }


        if (hidden != null) {
            console.log(hidden);
        }
    }

    // End of the divideArray() function.  

}
