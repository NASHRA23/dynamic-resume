var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion for form elements (using HTMLTextAreaElement for text areas)
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education'); // Changed to HTMLTextAreaElement
    var experienceElement = document.getElementById('experience'); // Changed to HTMLTextAreaElement
    var skillElement = document.getElementById('skills'); // Changed to HTMLTextAreaElement
    // Check if all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillElement.value;
        // Create resume output
        var resumeOutput = "\n      <h2>Resume</h2>\n      <p><strong>Name:</strong> ".concat(name_1, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    ");
        // Update resume output section
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
