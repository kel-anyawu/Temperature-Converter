// Listen for Submit button
const submitBtn = document.getElementById("form-converter");
submitBtn.addEventListener("submit" , function(e){

    //Show Loader
    document.getElementById("loading").style.display = "block";

    setTimeout(convertDegree, 2000);
    
    e.preventDefault();
});

// Calculate Results
function convertDegree(e){
    const degreeCelcius = document.getElementById("celcius");
    const degreeFah = document.getElementById("fahrenheit");

    const celDeg = degreeCelcius.value;
   

    if(degreeCelcius.value == " "){

        showError("Please enter a valid number!");

    } else {

        // Convert celcius to fahrenheit
    const x = celDeg * 9 / 5 + 32;
    degreeFah.value = x;

    // Show results
    document.getElementById("results").style.display = "block";

    // Hide Loader
    document.getElementById("loading").style.display = "none";
    }

    e.preventDefault();
}

// Show Error message
function showError(error){
   
    // Show results
    document.getElementById("results").style.display = "none";

    // Hide Loader
    document.getElementById("loading").style.display = "none";

    // Create a div
    const errorDiv = document.createElement("div");

    // Get elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    // Add Class
    errorDiv.className = "alert alert-danger";

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv , heading)

    // Clear error after 2 seconds
    setTimeout(clearError , 2000);

    // Clear error
    function clearError(){
        document.querySelector(".alert").remove();
    }
}