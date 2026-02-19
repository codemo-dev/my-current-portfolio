let nav = document.querySelector("header nav");
let menu = document.getElementById("my-menu");
let icon = document.querySelector(".menu");

icon.addEventListener("click", () => {
    nav.classList.toggle("show");
    menu.classList.toggle("show");
    icon.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
});

// === Contact Form Handler ===
function sendEmail() {
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Get trimmed values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // Validation: Check required fields
    if (!name || !email || !message) {
        alert("Please fill in your name, email, and message.");
        return;
    }

    // Validation: Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Show success message BEFORE redirect
    const successEl = document.getElementById("form-success");
    successEl.style.display = "block";

    // Build mailto link
    const mailtoLink = `mailto:codemo.devx@gmail.com?subject=${encodeURIComponent(
        subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    // Clear form
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";

    // Redirect to mailto
    window.location.href = mailtoLink;
}
