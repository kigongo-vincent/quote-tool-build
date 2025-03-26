const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");

// List of allowed domains (origins)
const allowedOrigins = [
  "http://localhost:8888",
  "https://arrow-quote-tool.netlify.app",
  // Add more trusted domains as needed
];

const BASE_URL = allowedOrigins[1]

// Function to toggle modal visibility
const toggleModalVisibility = () => {
  modal.classList.toggle("show");
};

// Open modal on button click
openModalBtn.addEventListener("click", toggleModalVisibility);

// Close modal when clicking outside the iframe
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    toggleModalVisibility();
  }
});

// Function to adjust iframe height
function adjustIframeHeight(iframe) {
  if (iframe.contentWindow) {
    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
  }
}

// Event listener for messages from the iframe
window.addEventListener("message", function (event) {
    // Check if the event origin is in the list of allowed origins
    if (allowedOrigins.includes(event.origin)) {
      if (event.data === 'closeModal') {
        toggleModalVisibility();
      }
    } else {
      // Optionally, handle messages from untrusted origins
      console.warn("Received message from untrusted origin:", event.origin);
    }
  });

window.addEventListener("load", ()=>{
  // const iFrame = document.createElement("iframe")
  // <iframe src="http://localhost:8888" frameborder="0"></iframe>
  // iFrame.src = BASE_URL
  modal.innerHTML = `<iframe src="${BASE_URL}" frameborder="0"></iframe>`
})  
