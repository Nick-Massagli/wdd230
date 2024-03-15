document.getElementById("year").innerHTML = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = new Date(document.lastModified);


document.addEventListener("DOMContentLoaded", function() {
    const day = new Date().getDay();
    const banner = document.querySelector('#reminder-banner');

    if ((day >= 1) && (day <= 3)) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
});

function closeBanner() {
    var banner = document.querySelector('#reminder-banner');
    banner.style.display = 'none';
};