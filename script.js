document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from refreshing on submit

  // Grab what the user typed
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const department = document.getElementById("department").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Build one booking object
  const booking = { name, phone, department, date, time };

  // Get existing bookings from storage (or start a fresh empty list)
  const bookings = JSON.parse(localStorage.getItem("medease-bookings")) || [];

  // Add the new one and save it back
  bookings.push(booking);
  localStorage.setItem("medease-bookings", JSON.stringify(bookings));

  // Show confirmation message
  const confirmation = document.getElementById("confirmation");
  const confirmationText = document.getElementById("confirmationText");
  confirmationText.textContent = `${name}, your ${department} appointment is booked for ${date} at ${time}. We'll contact you at ${phone}.`;
  confirmation.classList.remove("hidden");

  // Clear the form
  this.reset();
});