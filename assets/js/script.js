// Function to update the slider value dynamically
function updateLengthValue() {
  const slider = document.getElementById("passwordLength");
  const lengthValue = document.getElementById("lengthValue");
  lengthValue.textContent = slider.value;
}

// Function to generate a random password
function generatePassword() {
  const length = document.getElementById("passwordLength").value;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  let characterPool = "";
  if (includeUppercase) characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) characterPool += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) characterPool += "0123456789";
  if (includeSymbols) characterPool += "!@#$%^&*()_+[]{}|;:,.<>?/";

  if (characterPool === "") {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  document.getElementById("generatedPassword").value = password;
}

// Function to copy the generated password to the clipboard
function copyToClipboard() {
  const passwordField = document.getElementById("generatedPassword");
  const password = passwordField.value;

  // Use the Clipboard API to copy the password (silent operation)
  navigator.clipboard.writeText(password).catch(() => {
    console.error("Failed to copy password to clipboard.");
  });
}

// Event Listeners
document.getElementById("passwordLength").addEventListener("input", updateLengthValue);
document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.querySelector(".copy-btn").addEventListener("click", copyToClipboard); // Attach the listener only once
