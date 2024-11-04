// Fungsi untuk menambahkan angka atau simbol ke dalam field teks
function addToDisplay(value) {
    document.getElementById('calc').value += value;
}

// Fungsi untuk menghitung hasil dari ekspresi
function calculateResult() {
    try {
        document.getElementById('calc').value = eval(document.getElementById('calc').value);
    } catch (error) {
        document.getElementById('calc').value = "Error"; // Menampilkan "Error" jika ekspresi tidak valid
    }
}

// Fungsi untuk menghapus semua isi dari field teks
function clearDisplay() {
    document.getElementById('calc').value = ''; // Mengosongkan field teks
}
