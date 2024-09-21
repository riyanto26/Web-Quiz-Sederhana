const dataKuis = [
    {
      pertanyaan: "Bahasa pemrograman apa yang digunakan untuk pengembangan web front-end?",
      a: "Python",
      b: "JavaScript",
      c: "C++",
      d: "Java",
      benar: "b"
    },
    {
      pertanyaan: "Apa yang dimaksud dengan HTML?",
      a: "Hyper Text Markdown Language",
      b: "Hyper Text Markup Language",
      c: "Home Tool Markup Language",
      d: "Hyperlink Text Markup Language",
      benar: "b"
    },
    {
      pertanyaan: "CSS digunakan untuk apa?",
      a: "Menyimpan data",
      b: "Mengatur tampilan halaman web",
      c: "Menambahkan fungsionalitas ke web",
      d: "Menghubungkan ke database",
      benar: "b"
    },
    {
      pertanyaan: "Apa fungsi dari `console.log()` dalam JavaScript?",
      a: "Menampilkan data pada konsol",
      b: "Menyimpan data pada browser",
      c: "Menampilkan pop-up di browser",
      d: "Menghentikan eksekusi program",
      benar: "a"
    },
    {
      pertanyaan: "Framework JavaScript populer untuk pengembangan front-end adalah?",
      a: "Django",
      b: "Laravel",
      c: "React",
      d: "Flask",
      benar: "c"
    },
    {
      pertanyaan: "Dalam CSS, untuk memilih elemen dengan `id` tertentu, kita menggunakan simbol apa?",
      a: ". (titik)",
      b: "# (pagar)",
      c: "* (bintang)",
      d: "-> (panah)",
      benar: "b"
    },
    {
      pertanyaan: "Apa arti dari JSON?",
      a: "JavaScript Oriented Notation",
      b: "JavaScript Object Notation",
      c: "Java Structured Object Node",
      d: "JavaScript Organised Notation",
      benar: "b"
    },
    {
      pertanyaan: "Apa singkatan dari SQL?",
      a: "Structured Query Language",
      b: "Sequential Query Language",
      c: "Structured Quick Language",
      d: "Structured Question Language",
      benar: "a"
    },
    {
      pertanyaan: "Apa ekstensi file yang biasanya digunakan untuk file JavaScript?",
      a: ".java",
      b: ".js",
      c: ".script",
      d: ".jsx",
      benar: "b"
    },
    {
      pertanyaan: "Bahasa pemrograman apa yang digunakan untuk pengembangan back-end?",
      a: "JavaScript",
      b: "HTML",
      c: "CSS",
      d: "JSON",
      benar: "a"
    }
  ];
  
  const pertanyaanEl = document.getElementById('pertanyaan');
  const a_teks = document.getElementById('a_teks');
  const b_teks = document.getElementById('b_teks');
  const c_teks = document.getElementById('c_teks');
  const d_teks = document.getElementById('d_teks');
  const kirimBtn = document.getElementById('kirim');
  const jawabanEls = document.querySelectorAll('.jawaban');
  
  let kuisSaatIni = 0;
  let skor = 0;
  
  muatKuis();
  
  function muatKuis() {
    batalkanPilihan();
    
    const dataKuisSaatIni = dataKuis[kuisSaatIni];
    
    pertanyaanEl.innerText = dataKuisSaatIni.pertanyaan;
    a_teks.innerText = dataKuisSaatIni.a;
    b_teks.innerText = dataKuisSaatIni.b;
    c_teks.innerText = dataKuisSaatIni.c;
    d_teks.innerText = dataKuisSaatIni.d;
  }
  
  function batalkanPilihan() {
    jawabanEls.forEach(jawabanEl => jawabanEl.checked = false);
  }
  
  function ambilPilihan() {
    let jawaban;
    jawabanEls.forEach(jawabanEl => {
      if (jawabanEl.checked) {
        jawaban = jawabanEl.id;
      }
    });
    return jawaban;
  }
  
  kirimBtn.addEventListener('click', () => {
    const jawaban = ambilPilihan();
    
    if (jawaban) {
      if (jawaban === dataKuis[kuisSaatIni].benar) {
        skor++;
      }
      
      kuisSaatIni++;
      
      if (kuisSaatIni < dataKuis.length) {
        muatKuis();
      } else {
        document.getElementById('kuis').innerHTML = `
          <h2>Kamu menjawab ${skor}/${dataKuis.length} pertanyaan dengan benar</h2>
          <button onclick="location.reload()">Ulangi Kuis</button>
        `;
      }
    }
  });
  