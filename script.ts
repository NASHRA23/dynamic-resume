document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  // Type assertion for form elements (using HTMLTextAreaElement for text areas)
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const educationElement = document.getElementById('education') as HTMLTextAreaElement;  // Changed to HTMLTextAreaElement
  const experienceElement = document.getElementById('experience') as HTMLTextAreaElement; // Changed to HTMLTextAreaElement
  const skillElement = document.getElementById('skills') as HTMLTextAreaElement;  // Changed to HTMLTextAreaElement

  // Check if all elements are present
  if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillElement.value;

    // Create resume output
    const resumeOutput = `
      <h2>Resume</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;

    // Update resume output section
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.error('The resume output element is missing');
    }
  } else {
    console.error('One or more input elements are missing');
  }
});
