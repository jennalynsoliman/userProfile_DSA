//Problem 1

// Function to collect user information
function collectUserInfo() {
    // Collect the following user information
    const fullName = prompt("Please enter your full name (first and last):");
    const age = prompt("Please enter your age:");
    const favoriteNumber = prompt("Please enter your favorite number:");
    const favoriteColor = prompt("Please enter your favorite color:");

    // Log the collected information to the console
    console.log("User Information:");
    console.log("Full Name: " + fullName);
    console.log("Age: " + age);
    console.log("Favorite Number: " + favoriteNumber);
    console.log("Favorite Color: " + favoriteColor);
}

// Call the function to collect user information
collectUserInfo();



