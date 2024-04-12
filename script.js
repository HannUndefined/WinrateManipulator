const heroML = [ "Miya", "Balmond", "Saber", "Alice", "Nana", "Tigreal", "Alucard", "Karina", "Akai", "Franco", "Bane", "Bruno", "Clint", "Rafaela", "Eudora", "Zilong", "Fanny", "Layla", "Minotaur", "Lolita", "Hayabusa", "Freya", "Gord", "Natalia", "Kagura", "Chou", "Sun", "Alpha", "Ruby", "Yi Sun-shin", "Moskov", "Johnson", "Cyclops", "Estes", "Hilda", "Aurora", "Lapu-Lapu", "Vexana", "Roger", "Karrie", "Gatotkaca", "Harley", "Irithel", "Grock", "Argus", "Odette", "Lancelot", "Diggie", "Hylos", "Zhask", "Helcurt", "Pharsa", "Lesley", "Jawhead", "Angela", "Gusion", "Valir", "Martis", "Uranus", "Hanabi", "Chang’e", "Kaja", "Selena", "Aldous", "Claude", "Vale", "Leomord", "Lunox", "Hanzo", "Belerick", "Kimmy", "Thamuz", "Harith", "Minsitthar", "Kadita", "Faramis", "Badang", "Khufra", "Granger", "Guinevere", "Esmeralda", "Terizla", "X.Borg", "Ling", "Dyrroth", "Lylia", "Baxia", "Masha", "Wanwan", "Silvanna", "Cecilion", "Carmilla", "Atlas", "Popol and Kupa", "Yu Zhong", "Luo Yi", "Khaleed", "Benedetta", "Barats", "Brody", "Yve", "Mathilda", "Paquito", "Gloo", "Beatrix", "Phoveus", "Natan", "Aulus", "Aamon", "Valentina", "Edith", "Floryn", "Yin", "Melissa", "Xavier", "Julian", "Fredrinn", "Joy", "Novaria", "Arlott", "Ixia", "Nolan", "Cici", "Chip" ];

const dropdown = document.getElementById('hero_dropdown');
heroML.forEach(hero => {
  const option = document.createElement('option');
  option.text = hero;
  dropdown.add(option);
});

function hitungKemenangan() {
  let totalPertandingan = parseInt(document.getElementById('total_pertandingan').value);
  let winrateTarget = parseInt(document.getElementById('winrate_target').value);
  let heroTarget = heroML.indexOf(document.getElementById('hero_dropdown').value) + 1;

  let kemenanganDibutuhkan = (winrateTarget / 100) * totalPertandingan;
  
  if(totalPertandingan && winrateTarget) {
  document.getElementById('hasil').innerHTML = `<div class="relative"><pre id="codeSection">5/${Math.ceil(kemenanganDibutuhkan)}/${totalPertandingan}//${heroTarget}</pre><button onclick="copyCode()">Copy</button>`
  document.getElementById('alertWarn').innerHTML = ''
  } else {
    document.getElementById('alertWarn').innerHTML = `<div class="alert">
  <span>Ada Yang Masih Kosong!</span>
</div>`
}}

function copyCode() {
  var code = document.getElementById("codeSection").innerText;
  navigator.clipboard.writeText(code).then(function() {
    document.getElementById('alertWarn').innerHTML = `<div class="sukses">
  <span>Kode Berhasil Disalin</span>
</div>`
  }, function(err) {
    document.getElementById('alertWarn').innerHTML = `<div class="alert">
  <span>Gagal Menyalin Kode, error: ${err}</span>
</div>`
  });
}

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

