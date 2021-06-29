var audio=document.createElement('audio');
        audio.setAttribute('src','car.mp3');
        muted='muted';
        audio.setAttribute('autoplay','car.mp3');
        audio.loop=true;
        audio.load();
        audio.play();