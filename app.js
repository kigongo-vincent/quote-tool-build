

// const modal = document.getElementById("modal");
// const openModalBtn = document.getElementById("openModalBtn");

// // List of allowed domains (origins)
// const allowedOrigins = [
//   "http://localhost:8888",
//   "https://arrow-quote-tool.netlify.app",
//   // Add more trusted domains as needed
// ];

// const BASE_URL = allowedOrigins[1]; // You can switch this dynamically if needed

// // Function to toggle modal visibility
// const toggleModalVisibility = () => {
//   modal.classList.toggle("show");
// };

// // Open modal on button click
// openModalBtn.addEventListener("click", toggleModalVisibility);

// // Event listener for messages from the iframe
// window.addEventListener("message", function (event) {
//   if (allowedOrigins.includes(event.origin)) {
//     if (event.data === "closeModal") {
//       toggleModalVisibility();
//     }
//   } else {
//     console.warn("Received message from untrusted origin:", event.origin);
//   }
// });

// // On window load, inject iframe with promoCode param
// window.addEventListener("load", () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const promoCode = urlParams.get("promoCode");

//   const iframeSrc = `${BASE_URL}${promoCode ? `?promoCode=${promoCode}` : ""}`;

//   modal.innerHTML = `<iframe src="${iframeSrc}" frameborder="0" width="100%" height="100%"></iframe>`;
// });

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");

// List of allowed domains (origins)
const allowedOrigins = [
  "http://localhost:8888",
  "https://arrow-quote-tool.netlify.app",
  // Add more trusted domains as needed
];

const BASE_URL = allowedOrigins[1]; // Adjust as needed

// Function to toggle modal visibility
const toggleModalVisibility = () => {
  modal.classList.toggle("show");
};

// Open modal on button click
openModalBtn.addEventListener("click", toggleModalVisibility);

// Event listener for messages from the iframe
window.addEventListener("message", function (event) {
  if (allowedOrigins.includes(event.origin)) {
    if (event.data === "closeModal") {
      toggleModalVisibility();
    }
  } else {
    console.warn("Received message from untrusted origin:", event.origin);
  }
});

// On window load, inject iframe with promoCode param
window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const promoCode = urlParams.get("promoCode");

  const iframeSrc = `${BASE_URL}${promoCode ? `?promoCode=${promoCode}` : ""}`;
  modal.innerHTML = `<iframe src="${iframeSrc}" frameborder="0" width="100%" height="100%"></iframe>`;

  // Automatically open the modal if promoCode exists
  if (promoCode) {
    toggleModalVisibility();
  }
});
