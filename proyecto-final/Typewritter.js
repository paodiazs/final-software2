const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter

    .typeString('Todos los lugares que imaginas!')
    .pauseFor(1000)
    //.deleteChars(10)
    .start();
