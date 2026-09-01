let Percentage = prompt("Enter your percentage:"); // Prompt user to enter their percentage

if(Percentage >= 80 && Percentage <=100) // Check if the percentage is greater than or equal to 80 and less than or equal to 100
{
    console.log("You have passed with Grade A!"); // Output if true
}
else if(Percentage >= 70 && Percentage < 80) // Check if the percentage is greater than or equal to 70 and less than 80
{
    console.log("You have passed with Grade B!"); // Output if true
}
else if(Percentage >= 60 && Percentage < 70) // Check if the percentage is greater than or equal to 60 and less than 70
{
    console.log("You have passed with Grade C!"); // Output if true
}
else if(Percentage >= 50 && Percentage < 60) // Check if the percentage is greater than or equal to 50 and less than 60
{
    console.log("You have passed with Grade D!"); // Output if true
}
else if(Percentage >= 0 && Percentage < 50) // Check if the percentage is greater than or equal to 0 and less than 50
{
    console.log("You have passed with Grade F!"); // Output if true
}
else
{
    console.log("You have Entered Wrong Percentage ."); // Output if false
}

