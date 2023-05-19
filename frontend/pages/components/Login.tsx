// login.ts

// Import any necessary TypeScript or JavaScript dependencies

// Define the necessary DOM elements
const container = document.querySelector('.container') as HTMLDivElement;
const loginForm = document.querySelector('.login-form') as HTMLDivElement;

// Handle form submission
function handleFormSubmit(event: Event) {
  event.preventDefault();

  // Get the entered username and password
  const usernameInput = document.querySelector('input[name="username"]') as HTMLInputElement;
  const passwordInput = document.querySelector('input[name="password"]') as HTMLInputElement;

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Perform login logic (e.g., authentication request to a server)
  // ...
}

// Add event listener to the form submission
const loginButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
loginButton.addEventListener('click', handleFormSubmit);
