function calculateWeight() {
  // Get values from the form
  const diameter = parseFloat(document.getElementById("diameter").value);
  const thickness = parseFloat(document.getElementById("thickness").value);
  const length = parseFloat(document.getElementById("length").value);

  // Reference data (unit weight based on diameter and thickness)
  const data = {
    "0.75_0.020": { lb_per_ft: 0.48, kg_per_m: 0.715 },
    "0.625_0.020": { lb_per_ft: 0.45, kg_per_m: 0.67 },
    "0.5_0.020": { lb_per_ft: 0.4, kg_per_m: 0.6 },
    "0.375_0.020": { lb_per_ft: 0.35, kg_per_m: 0.54 },
    "0.3125_0.020": { lb_per_ft: 0.3, kg_per_m: 0.47 },
    "0.1875_0.019": { lb_per_ft: 0.2, kg_per_m: 0.35 }, // 3/16 with 0.019 thickness added
    // Add more rows based on your data
  };

  // Create a key for finding unit weight
  const key = `${diameter}_${thickness}`;
  const unitWeight = data[key];

  if (!unitWeight || isNaN(length)) {
    // Ensure all inputs are correct, but now inputs will always be valid based on the dropdown selections
    alert("Please enter a valid length.");
    return;
  }

  // Calculate the total weight in pounds
  const totalWeightLb = unitWeight.lb_per_ft * length;

  // Display the result
  document.getElementById(
    "result"
  ).innerText = `Total Weight: ${totalWeightLb.toFixed(2)} lbs`;
}
