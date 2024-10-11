document.addEventListener("DOMContentLoaded", () => {
    const units = document.querySelectorAll(".unit");
    const totalElement = document.querySelector(".total span");
  
    units.forEach((unit) => {
      unit.addEventListener("click", () => {
        // Remove active class from all units
        units.forEach((u) => {
          u.style.borderColor = ""; // Reset border color
          u.querySelector('input[type="radio"]').checked = false; // Uncheck radio button
        });
  
        // Add active class to the clicked unit
        unit.style.borderColor = "#ff4081"; // Set border color
        unit.querySelector('input[type="radio"]').checked = true; // Check the radio button
  
        // Update the total price
        const price = unit.getAttribute("data-price");
        totalElement.textContent = `Total: $${price} USD`;
      });
    });
  });
  