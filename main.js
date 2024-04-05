
document.addEventListener("DOMContentLoaded", function() {
    // Simula la carga de la página durante 2 segundos
    setTimeout(function() {
        // Oculta el screen de carga gradualmente
        fadeOut(document.getElementById("loadingScreen"));
        // Muestra el contenido de la página
        document.getElementById("content").style.display = "block";
    }, 3000); // 2000 milisegundos = 2 segundos

    // Función para desvanecer un elemento gradualmente
    function fadeOut(element) {
        var opacity = 1;
        var timer = setInterval(function() {
            if (opacity <= 0.1) {
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = opacity;
            opacity -= opacity * 0.1;
        }, 10); // Ajusta la velocidad de desvanecimiento según sea necesario
    }
});







































document.addEventListener('DOMContentLoaded', function() {
    // Añadir la clase flyDown para activar la animación al cargar la página
    const rocket = document.getElementById('rocket');
    rocket.classList.add('flyDown');

    // Opcional: Eliminar la clase flyDown después de que la animación se complete
    setTimeout(() => {
        rocket.classList.remove('flyDown');
    }, 4000); // Ajusta este tiempo al de la duración de tu animación (400ms en este caso)
});

// Activar la animación flyUp cuando se haga clic en el logo del cohete
const rocket = document.getElementById('rocket');
rocket.addEventListener('click', function() {
    rocket.classList.add('fly');
    // Opcionalmente, podrías querer quitar la clase 'fly' después de un tiempo o bajo ciertas condiciones
});



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.questioncontainer').forEach(container => {
        container.addEventListener('click', function() {
            const isOpen = this.querySelector('.plusbtn').getAttribute('data-state') === 'open';
            
            // Find the corresponding answer element
            const answer = this.querySelector('.answer');

            // Close any previously opened answers
            document.querySelectorAll('.questioncontainer .plusbtn').forEach(btn => {
                if (btn !== this.querySelector('.plusbtn')) {
                    btn.setAttribute('data-state', 'closed');
                    btn.querySelector('img').src = '+.png';
                }
            });
            document.querySelectorAll('.questioncontainer .answer').forEach(ans => {
                if (ans !== answer) {
                    ans.style.display = 'none';
                }
            });

            // Toggle the state of the clicked question container
            this.querySelector('.plusbtn').setAttribute('data-state', isOpen ? 'closed' : 'open');
            this.querySelector('.plusbtn img').src = isOpen ? '+.png' : '-.png';
            answer.style.display = isOpen ? 'none' : 'block'; 
        });
    });
});


document.getElementById('rocket').addEventListener('click', function() {
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 200); // 2000 milliseconds = 2 seconds
});


document.getElementById('one').addEventListener('click', function() {
    setTimeout(function() {
        window.location.href = 'https://twitter.com/RyzeDevs';
    }, 100); // 2000 milliseconds = 2 seconds
});


document.getElementById('two').addEventListener('click', function() {
    setTimeout(function() {
        window.location.href = 'https://www.roblox.com/users/3286172898/profile';
    }, 100); // 2000 milliseconds = 2 seconds
});

document.getElementById('opne').addEventListener('click', function() {
    setTimeout(function() {
        window.location.href = 'https://discord.com/users/977825657507704872';
    }, 100); // 2000 milliseconds = 2 seconds
});

document.getElementById('linkProcess').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado
    smoothScrollTo(565, 600); // Desplazarse a 400px en 600ms
});

function smoothScrollTo(endY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(0, newY);
    }, 1000 / 60); // 60 frames por segundo
}

document.getElementById('artowo').addEventListener('click', function(event) {
    event.preventDefault(); 
    smoothScrollTo(970, 600); 
});

function smoothScrollTo(endY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(0, newY);
    }, 1000 / 60); // 60 frames por segundo
}

document.getElementById('pos').addEventListener('click', function(event) {
    event.preventDefault(); 
    smoothScrollTo(2085, 600); 
});

function smoothScrollTo(endY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(0, newY);
    }, 1000 / 60); // 60 frames por segundo
}


document.getElementById('tos').addEventListener('click', function(event) {
    event.preventDefault(); 
    smoothScrollTo(2660, 600); 
});

function smoothScrollTo(endY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(0, newY);
    }, 1000 / 60); // 60 frames por segundo
}


document.getElementById('contactme').addEventListener('click', function(event) {
    event.preventDefault(); 
    smoothScrollTo(3310, 600); 
});

function smoothScrollTo(endY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(0, newY);
    }, 1000 / 60); // 60 frames por segundo
}



document.getElementById('herobtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    smoothScrollTo(970, 600); 
});

function smoothScrollTo(endY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(0, newY);
    }, 1000 / 60); // 60 frames por segundo
}


document.getElementById('pricebtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    smoothScrollTo(3310, 600); 
});

function smoothScrollTo(endY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(0, newY);
    }, 1000 / 60); // 60 frames por segundo
}


