function getPilihanComputer() {
    const comp = Math.random();
    if( comp < 0.34 )return 'batu';
    if ( comp >= 0.34 && comp < 0.64)return 'kertas';
    return 'gunting';
}

function getHasil(comp,player) {
    if (player == comp) return 'SERI!';
    if (player == 'batu') return (comp=='gunting') ? 'MENANG!' : 'KALAH!' ;
    if (player == 'gunting') return (comp=='batu') ? 'KALAH!' : 'MENANG!' ;
    if (player == 'kertas') return (comp=='gunting') ? 'KALAH!' : 'MENANG!' ;
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['batu','gunting','kertas'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime()-waktuMulai > 1200){
            clearInterval;
            return
        }
        imgComputer.setAttribute('src','img/'+ gambar[i++] + '.png')
        if (i == gambar.length ) i=0
    }, 85);
}

let initSkorComputer = 0
let initSkorPlayer = 0

let skorComputer = document.querySelector('.skor-computer')
let skorPlayer = document.querySelector('.skor-player')

skorComputer = 'Skor: ' + initSkorComputer
skorPlayer = 'Skor: ' + initSkorPlayer

// function scoring() {
//     setTimeout(() => {
//         if ('MENANG!'){
//             initSkorPlayer++
//             skorPlayer.innerHTML =''
//             skorPlayer.innerHTML = 'Skor : ' + initSkorPlayer
//         }
//         if (result == 'KALAH!'){
//             initSkorComputer++
//             skorComputer.innerHTML =''
//             skorComputer.innerHTML = 'Skor : ' + initSkorComputer
//         }
//     }, 1202);
// }

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer,pilihanPlayer);

        putar();

        setTimeout(() => {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src','img/' + pilihanComputer + '.png');
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1200);

        // scoring()
    })
})



















// var tanya = true
// while ( tanya ) {
//     // 1. menangkap pilihan player
//     var p = prompt ('pilih : batu, gunting, kertas');
//     var w = 'Kamu menang! Sugoiii'
//     var l = 'Kamu kalah! haha'
//     // 2. menangkap pilihan komputer
//     // 3. membangkitkan bilangan random 

//     // 4. menentukan rules 
//     // 5. menampilkan hasil
//     alert ('kamu memilih : ' + p + ' dan komputer memilih : '+ comp + '\nmaka hasilnya : ' + hasil );

//     tanya = confirm ('main lagi?'); 
// }

// alert ('arigatoo sudah bermain')