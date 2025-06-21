
function copyText() {
  var inppasswordDisplayut = document.getElementById("passwordDisplay");
  passwordDisplay.select();
  passwordDisplay.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
const passwordDisplay = document.getElementById('passwordDisplay');
    const lengthSlider = document.getElementById('lengthSlider');
    const lengthValue = document.getElementById('lengthValue');

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "@#$%^&*()_+-=[]{}|;:,.<>?";

    lengthSlider.addEventListener('input', () => {
      lengthValue.textContent = lengthSlider.value;
    });

    function generatePassword() {
      const includeLower = document.getElementById('lowercase').checked;
      const includeUpper = document.getElementById('uppercase').checked;
      const includeNumbers = document.getElementById('numbers').checked;
      const includeSymbols = document.getElementById('symbols').checked;
      const length = parseInt(lengthSlider.value);

      let charPool = "";
      if (includeLower) charPool += lowercase;
      if (includeUpper) charPool += uppercase;
      if (includeNumbers) charPool += numbers;
      if (includeSymbols) charPool += symbols;

      if (charPool === "") {
        alert("Please select at least one option!");
        return;
      }

      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
      }

      passwordDisplay.value = password;
    }