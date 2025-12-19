// --- Show a section and hide all others (super simple) ---
function showSection(sectionId) {

    // Hide every section manually
    document.getElementById("home").style.display = "none";
    document.getElementById("top-shots").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("camera-specs").style.display = "none";

    // Show the section the user clicked
    document.getElementById(sectionId).style.display = "block";
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
