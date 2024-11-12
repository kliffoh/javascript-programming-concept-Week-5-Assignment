const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  // ...capture other fields...

  // Create a data object
  const formData = {
    name: name,
    email: email,
    // ...other fields...
  };

  // ...validation logic...

  // Display the data
  const summaryDiv = document.getElementById('formSummary');
  summaryDiv.innerHTML = `
    <p>Name: ${formData.name}</p>
    <p>Email: ${formData.email}</p>
    <p>Thanks for your authenticy! Have a great journey ahead.</p>
    `;
});