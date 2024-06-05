document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('open-modal-button');
    const closeButton = document.querySelector('.close-button');

    openModalButton.addEventListener('click', function() {
        modal.style.display = 'block';
        console.log(`[${getCurrentTime()}] Fenetre ouverte`)
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        console.log(`[${getCurrentTime()}] Fenetre fermé`)
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            console.log(`[${getCurrentTime()}] Fenetre fermé`)
        }
    });
});

function changeTheme() {
    const themeSelector = document.getElementById("themeSelector");
    const selectedTheme = themeSelector.value;
    const themeLink = document.getElementById("theme");
    themeLink.href = selectedTheme;
    console.log(`[${getCurrentTime()}] Theme changé en ${selectedTheme}`)
}

function changePolice() {
    const themeSelector = document.getElementById("policeSelector");
    const selectedTheme = themeSelector.value;
    const themeLink = document.getElementById("police");
    themeLink.href = selectedTheme;
    console.log(`[${getCurrentTime()}] Police changé en ${selectedTheme}`)
}


function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}


function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
    timeElement = getCurrentTime();
}

setInterval(updateTime, 1000);

updateTime();
