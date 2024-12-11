document
  .getElementById("taekwondoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai inputan
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const belt = document.getElementById("belt").value;

    // Tampilkan pesan sukses
    alert(
      `Pendaftaran sukses!\n\nNama: ${name}\nUmur: ${age}\nEmail: ${email}\nNomor Telepon: ${phone}\nSabuk: ${belt}`
    );

    // Reset form setelah submit
    document.getElementById("taekwondoForm").reset();
  });
