document.addEventListener("DOMContentLoaded", () => {
  // Booking form
  const bookingForm = document.querySelector(".book-bike form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const phone = this.phone.value.trim();
      const service = this.service.value;
      const date = this.date.value;
      const time = this.time.value;

      if (!name || !email || !phone || !service || !date || !time) {
        alert("Please fill in all fields.");
        return;
      }

      alert(`Thanks for booking, ${name}!\nWe will contact you soon at ${email}.`);
      this.reset(); 
    });
  }

  //  Scroll for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  //  Booking button feedback
  const bookBtns = document.querySelectorAll(".book-btn");
  bookBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Please scroll up and fill the booking form to complete your request.");
      document.querySelector(".book-bike").scrollIntoView({ behavior: "smooth" });
    });
  });
});
















