// Fungsi buat nambahin angka atau simbol ke dalam field teks
function addToDisplay(value) {
    document.getElementById('calc').value += value;
}

// Fungsi buat ngitung hasil ekspresi (+, -, *, :)
function calculateResult() {
    try {
        document.getElementById('calc').value = eval(document.getElementById('calc').value);
    } catch (error) {
        document.getElementById('calc').value = "Error"; // nampilin error aja 
    }
}

function deleteOneChar() {
    const inputField = document.form1.answer;
    inputField.value = inputField.value.slice(0, -1);
    
}

// Fungsi buat ngapus hasil input field teks
function clearDisplay() {
    document.getElementById('calc').value = ''; // Mengosongkan field teks
}
