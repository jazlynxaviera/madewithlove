const orderForm = document.getElementById('orderForm');
const qrisModal = document.getElementById('qrisModal');
const closeModalBtn = document.getElementById('closeModal');
const waBtn = document.getElementById('waBtn');

// Variabel penampung data sementara
let dataPesanan = {};

// 1. Saat Form Dikirim -> Simpan Data & Munculkan Pop-Up QRIS
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  dataPesanan = {
    name: document.getElementById('buyerName').value,
    product: document.getElementById('productSelect').value
  };

  qrisModal.style.display = "flex";
});

// 2. Saat Tombol WA di Pop-Up Diklik -> Buka WhatsApp dengan Format Aesthetic
waBtn.addEventListener('click', () => {
  const nomorAdmin = "6287760352779"; 

  // Format Teks Sesuai Permintaan
  const pesanTeks = 
`♡ ﹒🍥 ﹕ 𝓯ormat order app premium ﹒₊ ✩
𐙚 • Nama : ${dataPesanan.name}
𐙚 • Aplikasi : ${dataPesanan.product}


Halo Admin, saya sudah bayar via QRIS! Ini bukti transfernya ya 💖`;

  const pesanEncoded = encodeURIComponent(pesanTeks);

  // Buka WhatsApp di Tab Baru
  window.open(`https://wa.me/${nomorAdmin}?text=${pesanEncoded}`, '_blank');
});

// 3. Kontrol Tutup Pop-Up Modal
closeModalBtn.addEventListener('click', () => {
  qrisModal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === qrisModal) {
    qrisModal.style.display = "none";
  }
});