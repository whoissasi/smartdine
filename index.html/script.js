// script.js - Shared functionality for Smart Restaurant website

// Handle table booking confirmation (can be reused in booking.html)
function handleBookingForm(formId, confirmationSectionId, textElementId) {
  const form = document.getElementById(formId);
  const confirmationSection = document.getElementById(confirmationSectionId);
  const confirmationText = document.getElementById(textElementId);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.elements[0].value;
    const date = form.elements[1].value;
    const guests = form.elements[2].value;

    confirmationText.textContent =
      `Thank you, ${name}! Your table for ${guests} is booked on ${new Date(date).toLocaleString()}.`;

    form.style.display = "none";
    confirmationSection.style.display = "block";
  });
}

// Handle menu order form and redirect (can be reused in menu.html)
function handleMenuOrder(formId, confirmationId, summaryId, redirectUrl) {
  const form = document.getElementById(formId);
  const confirmation = document.getElementById(confirmationId);
  const summary = document.getElementById(summaryId);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const selectedItems = Array.from(
      document.querySelectorAll('input[name="item"]:checked')
    );
    const itemNames = selectedItems.map(item => item.value);

    if (itemNames.length > 0) {
      summary.textContent = `You have ordered: ${itemNames.join(", ")}.`;
      form.style.display = "none";
      confirmation.style.display = "block";

      // Optionally redirect after a delay
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 2000);
    } else {
      alert("Please select at least one item to proceed.");
    }
  });
}
