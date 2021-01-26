function calculate() {
  let totalSales = document.getElementById("totalSales");
  let sellingPrice = document.getElementById("sellingPrice");
  let salesPercentage = document.getElementById("salesPercentage");
  let variableCosts = document.getElementById("variableCosts");
  let variableCostsPerUnit = document.getElementById("variableCostsPerUnit");
  let variableCostsPercentage = document.getElementById(
    "variableCostsPercentage"
  );
  let contribution = document.getElementById("contribution");
  let contributionPerUnit = document.getElementById("contributionPerUnit");
  let contributionPercentage = document.getElementById(
    "contributionPercentage"
  );
  let fixedCosts = document.getElementById("fixedCosts");
  let profit = document.getElementById("profit");
  let units = document.getElementById("units");
  let breakEvenInUnits = document.getElementById("breakEvenInUnits");
  let breakEvenInRands = document.getElementById("breakEvenInRands");
  let marginOfSafetyInUnits = document.getElementById("marginOfSafetyInUnits");
  let marginOfSafetyInRands = document.getElementById("marginOfSafetyInRands");

  if ((totalSales.value !== "") & (variableCosts.value !== "")) {
    contribution.value = Number(totalSales.value) - Number(variableCosts.value);
    profit.value = Number(contribution.value) - Number(fixedCosts.value);
    sellingPrice.value = Number(totalSales.value) / Number(units.value);
    variableCostsPerUnit.value =
      Number(variableCosts.value) / Number(units.value);
    contributionPerUnit.value =
      Number(sellingPrice.value) - Number(variableCostsPerUnit.value);
    salesPercentage.value = 100;
    variableCostsPercentage.value = (
      (Number(variableCostsPerUnit.value) / Number(sellingPrice.value)) *
      100
    ).toFixed(0);
    contributionPercentage.value =
      Number(salesPercentage.value) - Number(variableCostsPercentage.value);
    breakEvenInUnits.value = (
      Number(fixedCosts.value) / Number(contributionPerUnit.value)
    ).toFixed(2);
    breakEvenInRands.value = (
      Number(breakEvenInUnits.value) * Number(sellingPrice.value)
    ).toFixed(2);
    marginOfSafetyInUnits.value =
      Number(units.value) - Number(breakEvenInUnits.value);
    marginOfSafetyInRands.value =
      Number(marginOfSafetyInUnits.value) * Number(sellingPrice.value);
  } else if ((profit.value !== "") & (fixedCosts.value !== "")) {
    contribution.value = Number(profit.value) + Number(fixedCosts.value);
    contributionPerUnit.value =
      Number(sellingPrice.value) - Number(variableCostsPerUnit.value);
    units.value = (
      Number(contribution.value) / Number(contributionPerUnit.value)
    ).toFixed(2);
    totalSales.value = Number(units.value) * Number(sellingPrice.value);
    variableCosts.value = Number(totalSales.value) - Number(contribution.value);
    salesPercentage.value = 100;
    variableCostsPercentage.value = (
      (Number(variableCostsPerUnit.value) / Number(sellingPrice.value)) *
      100
    ).toFixed(0);
    contributionPercentage.value =
      Number(salesPercentage.value) - Number(variableCostsPercentage.value);
  } else {
    contributionPerUnit.value =
      Number(sellingPrice.value) - Number(variableCostsPerUnit.value);
    totalSales.value = Number(units.value) * Number(sellingPrice.value);
    variableCosts.value =
      Number(variableCostsPerUnit.value) * Number(units.value);
    contributionPerUnit.value =
      Number(sellingPrice.value) - Number(variableCostsPerUnit.value);
    contribution.value =
      Number(contributionPerUnit.value) * Number(units.value);
    profit.value = Number(contribution.value) - Number(fixedCosts.value);
    salesPercentage.value = 100;
    variableCostsPercentage.value = (
      (Number(variableCostsPerUnit.value) / Number(sellingPrice.value)) *
      100
    ).toFixed(0);
    contributionPercentage.value =
      Number(salesPercentage.value) - Number(variableCostsPercentage.value);
    breakEvenInUnits.value = (
      Number(fixedCosts.value) / Number(contributionPerUnit.value)
    ).toFixed(2);
    breakEvenInRands.value = (
      Number(breakEvenInUnits.value) * Number(sellingPrice.value)
    ).toFixed(2);
    marginOfSafetyInUnits.value =
      Number(units.value) - Number(breakEvenInUnits.value);
    marginOfSafetyInRands.value =
      Number(marginOfSafetyInUnits.value) * Number(sellingPrice.value);
  }
}
var button = document
  .getElementById("btn")
  .addEventListener("click", calculate);
