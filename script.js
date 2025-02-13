document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const music = document.getElementById("bg-music");
    const toggleMusicBtn = document.getElementById("toggleMusic");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const imageDescription = document.getElementById("image-description");
    const lyricsContainer = document.querySelector(".lyrics-container");
  
    const descriptions = [
        "🌹ควยไร",
        "💖 รักนะ",
        "🎶 ควยๆๆๆ",
        "🎁 เเตดๆๆๆๆ",
        "🍰 มีปัญหาไรสัส",
       
    ];



    const images = [];
    for (let i = 1; i <= 5; i++) {
        const img = document.createElement("img");
        img.src = `img2/สไลด์${i}.JPG`;
        img.alt = `Image ${i}`;
        images.push(img);
    }

    let currentIndex = 0;
    let lyricsTimeout;

    function updateGallery() {
        gallery.innerHTML = "";
        gallery.appendChild(images[currentIndex]);
        images[currentIndex].classList.add("show");
        imageDescription.textContent = descriptions[currentIndex];
    }

    prevBtn.onclick = function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateGallery();
    };

    nextBtn.onclick = function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    };

    toggleMusicBtn.onclick = function () {
        if (music.paused) {
            music.play();
            toggleMusicBtn.textContent = "Pause Music";
            lyricsTimeout = setTimeout(showLyrics, 42000); 
        } else {
            music.pause();
            toggleMusicBtn.textContent = "Play Music";
            clearTimeout(lyricsTimeout);
            hideLyrics();
        }
    };

    function showLyrics() {
        lyricsContainer.innerHTML = "";
        const lyrics = [
            "Like water in the desert", "Impossible to find",
            "You found me when I was broken", "Put me back together, gave me life",
            "Like a flower in the concrete", "So beautiful and rare",
            "You gave me hope when I was empty", "Walked me through the fire, you were there",
            "You're the sun to the moon", "You're my ocean, painted blue",
            "You, I'm nothing without you", "(Without you, without you)",
            "Like an angel in a nightmare", "You opened up my eyes",
            "Looking in all the wrong places", "You're the one I needed this whole time",
            "You're the sun to the moon", "You're my ocean, painted blue",
            "You, I'm nothing without you", "(Without you, without you)",
            "You're the light in the dark", "You're the arrow through my heart",
            "You, I'm nothing without you (oh, oh)", "I'm nothing without you (oh, oh)",
            "I'm nothing without you (oh, oh)", "I'm nothing without you",
            "You, I'm nothing without you", "I'm nothing without you",
            "I'm nothing without you", "I'm nothing without you",
            "You're the air in my lungs", "You're the veins to my blood",
            "Yeah, you, I'm nothing without you", "You're the sun to the moon",
            "You're my ocean, painted blue", "You, I'm nothing without you",
            "(Without you, without you)", "You're the light in the dark",
            "You're the arrow through my heart", "You, I'm nothing without you"
        ];

        let index = 0;
        function showNextLyric() {
            if (index >= lyrics.length) return;

            let lyricDiv = document.createElement("div");
            lyricDiv.classList.add("lyric");
            lyricDiv.textContent = lyrics[index];
            lyricsContainer.innerHTML = "";
            lyricsContainer.appendChild(lyricDiv);
            lyricDiv.classList.add("show");

            index++;
            setTimeout(showNextLyric, 5000);
        }

        showNextLyric();
    }

    function hideLyrics() {
        lyricsContainer.innerHTML = "";
    }

    updateGallery();
});