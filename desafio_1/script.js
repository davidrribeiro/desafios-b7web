document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());    
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArr = song.split('');
        playComposition(songArr)
    }
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key=${sound}]`);

    audioElement ? (audioElement.currentTime = 0) + (audioElement.play()) : null
    
    
    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300)
    }
}

function playComposition(songArr) {
    let wait = 0
    
    for(let songItem of songArr) {
        setTimeout(()=> {
            playSound(`key${songItem}`);
        }, wait)

        wait += 250;
    }
}