
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
        console.log(`[${getCurrentTime()}] Fenetre fermée`)
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            console.log(`[${getCurrentTime()}] Fenetre fermée`)
        }
    });

    loadPreferences()
});


function changeTheme() {
    const themeSelector = document.getElementById("themeSelector");
    const selectedTheme = themeSelector.value;
    const themeLink = document.getElementById("theme");
    themeLink.href = selectedTheme;
    console.log(`[${getCurrentTime()}] Theme changé en ${selectedTheme}`)
    setCookie('theme', selectedTheme, 365)
}

function changePolice() {
    const themeSelector = document.getElementById("policeSelector");
    const selectedTheme = themeSelector.value;
    const themeLink = document.getElementById("police");
    themeLink.href = selectedTheme;
    console.log(`[${getCurrentTime()}] Police changé en ${selectedTheme}`)
    setCookie('police', selectedTheme, 365)
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


function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 30 * 31 * 7 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function loadPreferences() {
    const theme = getCookie('theme');
    const police = getCookie('police');
    console.log('Bienvenue sur la console d\'elios, tapes help() pour voir les commandes')
    if (theme) {
        const themeSelector = document.getElementById("themeSelector");
        const themeLink = document.getElementById("theme");
        themeLink.href = theme;
        themeSelector.value = theme;
    }  else {
       setCookie('theme', "style.css", 365)
    }

    if (police) {
        const policeSelector = document.getElementById("policeSelector");
        const policeLink = document.getElementById("police");
        policeLink.href = police;
        policeSelector.value = police;
    } else {
        setCookie('police', "arial.css", 365)
    }
}


function removeStars() {
    const starContainer = document.querySelector('.star-container');
    starContainer.innerHTML = '';
}



function generateRandomStars() {
    const starContainer = document.querySelector(".star-container");
    const numStars = 100;
  
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${1 + Math.random() * 4}s`;
   
        starContainer.appendChild(star);
    }
  }
  
  generateRandomStars();

  function help() {
    const commands = [
        {
            command: 'addStars()',
            description: 'Ajoute des étoiles aléatoires dans le theme nuit étoilée.'
        },
        {
            command: 'removeStars()',
            description: 'Supprime toutes les étoiles dans le theme nuit étoilée.'
        },
        {
            command: 'loadPreferences()',
            description: 'Charge les (thème et police) depuis les cookies et les applique à la page'
        },
        {
            command: 'open()',
            description: 'Ouvre la fenetre option'
        },
        {
            command: 'close()',
            description: 'Ferme la fenetre option'
        },
        {
            command: 'help()',
            description: 'Affiche toutes les commandes disponibles et leur description.'
        }
    ];

    console.log("Commandes disponibles:");
    commands.forEach(cmd => {
        console.log(`${cmd.command}: ${cmd.description}`);
    });
}

function open() {
    const modal = document.getElementById('modal');
        modal.style.display = 'block';
    }

function close() {
    const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }

    document.addEventListener('keydown', function(event) {
        const modal = document.getElementById('modal');
        if (event.key === 'Escape') {
            if (modal.style.display === 'block') {
            close();
            console.log(`[${getCurrentTime()}] Fenetre fermée`)
            }
        }
    });