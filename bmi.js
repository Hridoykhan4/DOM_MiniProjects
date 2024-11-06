const resultDiv = document.getElementById("result");

function calculateBMI() {
  const age = document.getElementById("age").value;
  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value) / 100;

  if (age && weight && height) {
    const bmi = Number((weight / (height * height)).toFixed(2));
    console.log(bmi);

    resultDiv.innerHTML = `
        <p>Your age is ${age}</p>
        <p>Your Bmi is ${bmi}</p>
        ${getBMICategory(bmi)};
        `;
  } else {
    resultDiv.innerHTML = "<p>Please fill in all fields.</p>";
  }
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "<p>You are underweight.</p>";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "<p>Your weight is normal.</p>";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "<p>You are overweight.</p>";
  } else {
    return "<p>You are obese.</p>";
  }
}

