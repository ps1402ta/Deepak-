<script>
    function triggerPrank() {
        // Trap layer ko hide karo aur terminal shuru karo
        document.getElementById('trap-layer').style.display = 'none';
        const terminal = document.getElementById('typed-text');
        const loadingArea = document.getElementById('loading-area');
        
        const commands = [
            "> Establishing connection to secure_server_01...",
            "> Connection bypassed.",
            "> Injecting exploit into /system/gallery/videos...",
            "> Searching for 'DANCE_FILES'...",
            "> FILE FOUND: Video.mp4 [Size: 45MB]",
            "> Decrypting file structure...",
            "> Warning: Firewall detected! Bypassing...",
            "> EXPLOIT SUCCESSFUL. STARTING LEAK..."
        ];

        let i = 0;
        function typeCommand() {
            if (i < commands.length) {
                let p = document.createElement('p');
                p.textContent = commands[i];
                terminal.appendChild(p);
                i++;
                setTimeout(typeCommand, 800); // Har command 0.8 sec baad aayegi
            } else {
                // Jab saare commands khatam ho jayein, progress bar dikhao
                loadingArea.style.display = 'block';
                startLoading();
            }
        }
        typeCommand();
    }

    function startLoading() {
        const fill = document.getElementById('progress-fill');
        const percentText = document.getElementById('percentage');
        const video = document.getElementById('prankVideo');
        let width = 0;

        // Progress bar 3 second tak chalega (suspense ke liye)
        let interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                revealVideo();
            } else {
                width += 2; // Speed badhane ke liye change kar sakte ho
                fill.style.width = width + '%';
                percentText.textContent = width + '%';
            }
        }, 60);
    }

    function revealVideo() {
        const overlay = document.getElementById('video-overlay');
        const video = document.getElementById('prankVideo');

        overlay.style.display = 'block';
        
        // Video play karo
        video.play().catch(error => {
            console.log("Autoplay blocked, user interaction needed.");
        });

        // Full screen ki koshish (Android/PC dono par)
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    }
</script>
