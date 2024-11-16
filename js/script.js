let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

// Initialize EmailJS with your public key
emailjs.init("qDaBeHYGNT-tANhhc");

// Form Submission Handler
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload on form submission

  // Collect form data
  const userName = document.querySelector('input[placeholder="your name"]').value;
  const userEmail = document.querySelector('input[placeholder="your email"]').value;
  const userSubject = document.querySelector('input[placeholder="subject"]').value;
  const userMessage = document.querySelector('textarea[placeholder="your message"]').value;

  // Validate fields
  if (!userName || !userEmail || !userMessage) {
    alert("Please fill out all required fields.");
    return;
  }

  // Prepare EmailJS parameters
  const emailParams = {
    to_name: "Obed", // Replace with your name or variable for the recipient's name
    from_name: userName,
    from_email: userEmail,
    message: userMessage,
    website_portfolio: "Obed Ojingwa Portfolio", // This is the source reference
    subject: userSubject,
  };

  // Send email using EmailJS
  emailjs
    .send("service_9ap5g6j", "template_dzlhrvi", emailParams)
    .then(
      (response) => {
        alert("Message sent successfully!");
        console.log("SUCCESS:", response);
        document.querySelector("form").reset(); // Clear form fields
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error("ERROR:", error);
      }
    );
});
