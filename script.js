document.addEventListener('DOMContentLoaded', (event) => {
  Swal.fire({
    title: 'Selamat Datang!',
    text: 'Website ini dibuat oleh Rahmat Adha, dan hanya digunakan untuk bersenang-senang.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
});

function cekKhodam() {
  const name = document.getElementById('nameInput').value.trim();
  if (name === "") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Nama tidak boleh kosong ya:)',
    });
    return;
  }

  const khodams = [
    "Kertas Guling Goyang",
    "Kuda Terbang Malam",
    "Harimau Belang Hitam",
    "Naga Emas Terbang",
    "Angin Dengan KTP",
    "Ayam berkaki 8",
    "Ayam guling"
  ];
  const descriptions = [
    "Tak pernah diam dan selalu menghibur",
    "Cepat dan tangkas dalam bertindak",
    "Gagah berani dan penuh kekuatan",
    "Bijaksana dan penuh pengetahuan",
    "Tenang dan penuh kesejukan",
    "Selalu bahagia dalam keadaan apapun"
  ];
  const randomIndex = Math.floor(Math.random() * khodams.length);

  document.getElementById('khodam').innerText = `Khodam: ${khodams[randomIndex]}`;
  document.getElementById('description').innerText = descriptions[randomIndex];
}

function cekLagi() {
  document.getElementById('nameInput').value = '';
  document.getElementById('khodam').innerText = '';
  document.getElementById('description').innerText = '';
}