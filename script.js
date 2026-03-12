let terminalRunning = false;



// --- Show a section and hide all others (super simple) ---
function showSection(sectionId) {

    // Hide every section manually
    document.getElementById("home").style.display = "none";
    document.getElementById("top-shots").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("camera-specs").style.display = "none";
    document.getElementById("build-log").style.display = "none";


    // Show the section the user clicked
    document.getElementById(sectionId).style.display = "block";
    if(sectionId === "home"){
    startTerminal();
}

}

// --- Open lightbox (super basic) ---
function openLightbox(imageSrc) {
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("lightbox").style.display = "flex";
}

// --- Close lightbox ---
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

window.onload = startTerminal;


function typeText(element, text, speed, done){

    let i = 0;

    let timer = setInterval(function(){

        element.textContent += text[i];
        i++;

        if(i >= text.length){
            clearInterval(timer);
            if(done){ done(); }
        }

    }, speed);
}


function startTerminal(){

    if(terminalRunning) return; // stop if already running
    terminalRunning = true;

    let cmd1 = document.getElementById("cmd1");
    let out1 = document.getElementById("out1");

    let prompt2 = document.getElementById("prompt2");
    let cmd2 = document.getElementById("cmd2");
    let out2 = document.getElementById("out2");

    // clear everything first
    cmd1.textContent = "";
    out1.textContent = "";
    prompt2.textContent = "";
    cmd2.textContent = "";
    out2.textContent = "";


    typeText(cmd1,"whoami",80,function(){

        setTimeout(function(){

            out1.textContent = "\nshreyas";

            setTimeout(function(){

                prompt2.textContent = "\n\n~$ ";

                typeText(cmd2,"uptime --since --user shreyas",80,function(){

                    setTimeout(function(){

                        out2.textContent = "\n2010-02-24";
                        terminalRunning = false; // animation finished

                    },500);

                });

            },700);

        },500);

    });

}
