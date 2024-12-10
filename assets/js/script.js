// script.js
document.getElementById('generateBtn').addEventListener('click', () => {
  // Collect selected special characters
  const specialCharacters = [];
  for (let i = 1; i <= 8; i++) {
    const checkbox = document.getElementById(`specialChar${i}`);
    if (checkbox.checked) {
      specialCharacters.push(checkbox.nextSibling.textContent.trim());
    }
  }

  // Helper function to generate random passwords
  const generatePassword = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + specialCharacters.join('');
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // Generate passwords of different lengths
  document.querySelector('#password8 span').textContent = generatePassword(8);
  document.querySelector('#password16 span').textContent = generatePassword(16);
  document.querySelector('#password32 span').textContent = generatePassword(32);
  document.querySelector('#password64 span').textContent = generatePassword(64);
});
