function getPilihanComputer() {
    const comp = Math.random();
    if( comp < 0.34 )return 'batu';
    if ( comp >= 0.34 && comp < 0.64)return 'kertas';
    return 'gunting';
}

const w = 'MENANG!'
const l = 'KALAH!'

function getHasil(comp,player) {
    if (player == comp) return 'SERI!';
    if (player == 'batu') return (comp=='gunting') ? w : l ;
    if (player == 'gunting') return (comp=='batu') ? l : w ;
    if (player == 'kertas') return (comp=='gunting') ? l : w ;
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
        
        function scoring() {
            setTimeout(() => {
                if (hasil == w){
                    initSkorPlayer++
                    skorPlayer.innerHTML = 'Skor Kamu : ' + initSkorPlayer
                    skorComputer.innerHTML = 'Skor BOT : ' + initSkorComputer
                }
                if (hasil == l){
                    initSkorComputer++
                    skorComputer.innerHTML = 'Skor BOT : ' + initSkorComputer
                    skorPlayer.innerHTML = 'Skor Kamu: ' + initSkorPlayer
                }
            }, 1202);
        }
        scoring()
    })
})