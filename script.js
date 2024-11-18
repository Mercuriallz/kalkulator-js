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

// Fungsi buat ngapus hasil input field teks
function clearDisplay() {
    document.getElementById('calc').value = ''; // Mengosongkan field teks
}

