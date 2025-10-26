function calculateBMI() {
  // Get input values
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  // Validate input
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("result").innerText = "⚠️ Invalid height or weight!";
    return;
  }
    if (height > 10) {
    height = height / 100; //incase user types height in cms
  }
  // Calculate BMI
  let bmi = weight / (height * height);

  // Display result
  let message = "";
  if (bmi < 18.5) message = "Underweight 😔";
  else if (bmi < 24.9) message = "Normal weight 😊";
  else if (bmi < 29.9) message = "Overweight 😐";
  else message = "Obese 😟";

  document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)} (${message})`;
}

