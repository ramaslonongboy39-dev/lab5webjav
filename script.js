// ==========================================
// LATIHAN 1 & 2: Output, Prompt, dan Alert
// ==========================================
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}

// ==========================================
// LATIHAN 3 & EKSPERIMEN MANDIRI 1: Operasi Aritmetika dari Prompt
// ==========================================
function operasiDasar(a, b) {
    console.log("--- Hasil Operasi Dasar ---");
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

const inputA = prompt("Masukkan nilai pertama untuk Aritmetika:");
const inputB = prompt("Masukkan nilai kedua untuk Aritmetika:");

if (inputA !== null && inputB !== null && inputA.trim() !== "" && inputB.trim() !== "") {
    const angkaA = Number(inputA);
    const angkaB = Number(inputB);
    if (!isNaN(angkaA) && !isNaN(angkaB)) {
        operasiDasar(angkaA, angkaB);
    }
}

// ==========================================
// LATIHAN 4: Seleksi Kondisi If-Else
// ==========================================
const inputNilai = prompt("Masukkan nilai (0-100):");
if (inputNilai !== null) {
    const nilaiMahasiswa = Number(inputNilai);
    if (inputNilai.trim() === "" || Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
        alert("Input nilai tidak valid.");
    } else if (nilaiMahasiswa >= 60) {
        alert("Lulus");
    } else {
        alert("Belum lulus");
    }
}

// ==========================================
// LATIHAN 5: Seleksi Kondisi Switch
// ==========================================
const inputPilihan = prompt("Masukkan angka 1-5:");
if (inputPilihan !== null) {
    switch (inputPilihan) {
        case "1": alert("Bilangan satu"); break;
        case "2": alert("Bilangan dua"); break;
        case "3": alert("Bilangan tiga"); break;
        case "4": alert("Bilangan empat"); break;
        case "5": alert("Bilangan lima"); break;
        default: alert("Pilihan tidak tersedia");
    }
}

// ==========================================
// LATIHAN 6: Form Bilangan Genap atau Ganjil
// ==========================================
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

// ==========================================
// LATIHAN 7: Mengubah Warna Latar
// ==========================================
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// ==========================================
// LATIHAN 8 & EKSPERIMEN 10: Checkbox Menu Makanan
// ==========================================
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// ==========================================
// EKSPERIMEN MANDIRI 7: Tabel Perkalian 7 (1 sampai 10)
// ==========================================
function tampilkanPerkalian() {
    const listPerkalian = document.getElementById("hasilPerkalian");
    listPerkalian.innerHTML = ""; 
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement("li");
        li.textContent = `7 x ${i} = ${7 * i}`;
        listPerkalian.appendChild(li);
    }
}

// ==========================================
// EKSPERIMEN MANDIRI 8: Function cekGenap(angka)
// ==========================================
function cekGenap(angka) {
    return angka % 2 === 0;
}
console.log("Apakah 4 genap?", cekGenap(4)); 
console.log("Apakah 7 genap?", cekGenap(7)); 

// ==========================================
// EKSPERIMEN MANDIRI 11: Toggle Sembunyikan/Tampilkan Elemen
// ==========================================
function toggleKotak() {
    const kotak = document.getElementById("kotakToggle");
    if (kotak.style.display === "none") {
        kotak.style.display = "block";
    } else {
        kotak.style.display = "none";
    }
}

// ==========================================
// MINI PROJECT: Kalkulator Nilai Mahasiswa
// ==========================================
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function prosesHitungNilai() {
    const inputTugas = document.getElementById("tugas").value;
    const inputUts = document.getElementById("uts").value;
    const inputUas = document.getElementById("uas").value;

    const tugas = Number(inputTugas);
    const uts = Number(inputUts);
    const uas = Number(inputUas);

    const tempatHasil = document.getElementById("hasilKalkulator");

    // Eksperimen Mandiri 9: Validasi form agar kolom tidak boleh kosong
    if (inputTugas === "" || inputUts === "" || inputUas === "" ||
        isNaN(tugas) || isNaN(uts) || isNaN(uas) ||
        tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        tempatHasil.innerHTML = "<span style='color: red;'>Harap isi semua kolom dan pastikan nilai antara 0 - 100!</span>";
        return;
    }

    const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum Lulus";

    tempatHasil.innerHTML = `
        <p><strong>Nilai Akhir:</strong> ${nilaiAkhir.toFixed(2)}</p>
        <p><strong>Predikat:</strong> ${predikat}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;
}

// ==========================================
// MEMUNCULKAN HALAMAN SETELAH PROMPT SELESAI
// ==========================================
document.body.style.display = "block";