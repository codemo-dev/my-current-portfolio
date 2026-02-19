let menu = document.getElementById("my-menu");
let icon = document.getElementsByClassName("menu")[0];

icon.onclick = function(e) {
    e.stopPropagation();
    menu.classList.toggle("show");
}

document.querySelectorAll('#my-menu a').forEach(link => {
    link.onclick = () => {
        menu.classList.remove("show");
    };
});

document.onclick = function (e) {
    if (!menu.contains(e.target) && !icon.contains(e.target)) {
        menu.classList.remove("show");
    }
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// === Contact Form Handler ===
function sendEmail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in your name, email, and message.");
    return;
  }

  const mailtoLink = `mailto:codemo.devx@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

  window.location.href = mailtoLink;

  // Show success message
  const successEl = document.getElementById("form-success");
  successEl.style.display = "block";

  // clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}