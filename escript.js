$(document).ready(function () {
    // Fondo
    var container = $(".fondo");
    var containerWidth = container.width();
    var containerHeight = container.height();

    // Pared
    var container2 = $(".pared");
    var containerWidth2 = container2.width();
    var containerHeight2 = container2.height();

    // Planta
    var container3 = $(".planta");
    var containerWidth3 = container3.width();
    var containerHeight3 = container3.height();

    // Planta2
    var container4 = $(".planta2");
    var containerWidth4 = container4.width();
    var containerHeight4 = container4.height();

    // Planta3
    var container5 = $(".planta3");
    var containerWidth5 = container5.width();
    var containerHeight5 = container5.height();

    // Piano
    var container6 = $(".piano");
    var containerWidth6 = container6.width();
    var containerHeight6 = container6.height();

    // Lampara
    var containerl = $(".lampara");
    var containerWidthl = containerl.width();
    var containerHeightl = containerl.height();
    var lampara = document.querySelector('.containerlampara')
    var lampmove = 25;

    
    // Agranda piano
    var img = document.querySelector('.piano');
    var container7 = document.querySelector('.containerpiano');
    // Baja piano
    var translateY = 250; // Valor de desplazamiento hacia abajo de la imagen

    // Music
    var song = new Audio('music/re.ogg');

    // Letras
    var translateletter = 300;

    // T
    var T = document.querySelector('#T');
    // h
    var h = document.querySelector('#h');
    // e
    var e = document.querySelector('#e');
    // P
    var P = document.querySelector('#P');
    // i
    var i = document.querySelector('#i');
    // a
    var a = document.querySelector('#a');
    // n
    var n = document.querySelector('#n');
    // o1
    var o1 = document.querySelector('#o1');
    // S
    var S = document.querySelector('#S');
    // h2
    var h2 = document.querySelector('#h2');
    // o2
    var o2 = document.querySelector('#o2');
    // P
    var p2 = document.querySelector('#p2');
    
    // Notas
    var notas = document.querySelector('.containernotas');
    // Notas2
    var notas2 = document.querySelector('.containernotas2');

    //Scroll mantenido
    const scrollLockPoint = 100;
    
    
    
    
    // Funciones

    

    // Fondo
    $(document).mousemove(function (event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        // 1Calcula el valor de desplazamiento en base a la posición del cursor
        var moveX = (mouseX - containerWidth / 2) / containerWidth * 40;
        var moveY = (mouseY - containerHeight / 2) / containerHeight * 30;

        // Aplica el efecto de movimiento inverso en la imagen1
        container.css("transform", "translate(" + -moveX + "px, " + -moveY + "px)");
 
    });

    // Pared
    $(document).mousemove(function (event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        // 2Calcula el valor de desplazamiento en base a la posición del cursor
        var moveX = (mouseX - containerWidth2 / 2) / containerWidth2 * 35;
        var moveY = (mouseY - containerHeight2 / 2) / containerHeight2 * 30;

        // Aplica el efecto de movimiento inverso en la imagen2
        container2.css("transform", "translate(" + -moveX + "px, " + -moveY + "px)");
    });

    // Planta
    $(document).mousemove(function (event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        // 2Calcula el valor de desplazamiento en base a la posición del cursor
        var moveX = (mouseX - containerWidth3 / 2) / containerWidth3 * 20;
        var moveY = (mouseY - containerHeight3 / 2) / containerHeight3 * 30;

        // Aplica el efecto de movimiento inverso en la imagen2
        container3.css("transform", "translate(" + -moveX + "px, " + -moveY + "px)");
    });

    // Planta2
    $(document).mousemove(function (event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        // 2Calcula el valor de desplazamiento en base a la posición del cursor
        var moveX = (mouseX - containerWidth4 / 2) / containerWidth4 * 27;
        var moveY = (mouseY - containerHeight4 / 2) / containerHeight4 * 30;

        // Aplica el efecto de movimiento inverso en la imagen2
        container4.css("transform", "translate(" + -moveX + "px, " + -moveY + "px)");
    });

    // Planta3
    $(document).mousemove(function (event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        // 2Calcula el valor de desplazamiento en base a la posición del cursor
        var moveX = (mouseX - containerWidth5 / 2) / containerWidth5 * 35;
        var moveY = (mouseY - containerHeight5 / 2) / containerHeight5 * 30;

        // Aplica el efecto de movimiento inverso en la imagen2
        container5.css("transform", "translate(" + -moveX + "px, " + -moveY + "px)");
    });

    // Lampara
    $(document).mousemove(function (event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        // 2Calcula el valor de desplazamiento en base a la posición del cursor
        var moveX = (mouseX - containerWidthl / 2) / containerWidthl * 39;
        var moveY = (mouseY - containerHeightl / 2) / containerHeightl * 30;

        // Aplica el efecto de movimiento inverso en la imagen2
        containerl.css("transform", "translate(" + -moveX + "px, " + -moveY + "px)");
    });

    /*// Piano
    $(document).mousemove(function (event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        // 2Calcula el valor de desplazamiento en base a la posición del cursor
        var moveX = (mouseX - containerWidth6 / 2) / containerWidth6 * 5;
        var moveY = (mouseY - containerHeight6 / 2) / containerHeight6 * 2;

        // Aplica el efecto de movimiento inverso en la imagen2
        container6.css("transform", "translate(" + -moveX + "px, " + -moveY + "px)");
    });*/

    // Musica
    function psong() {
        song.play();
    }
    psong();
    // Funciones de agrandar y bajar piano
    function agrandar() {
        img.style.transform = 'scale(' + 1.2 + ')';       
    }
    function bajar() {
        container7.style.transform = 'translateY(' + translateY + 'px)';   
    }

    window.addEventListener('scroll', function () {
        agrandar();
    })    
    window.addEventListener('scroll', function () {
        bajar();
    })

    // Funciones de bajar letras

    //T
    function bajaTs() {
        setTimeout(function () {
            T.style.transform = 'translateY(' + translateletter + 'px)';
        }, 1025);
    }
    bajaTs();
    //h
    function bajahs() {
        setTimeout(function () {
            h.style.transform = 'translateY(' + translateletter + 'px)';
        }, 500);
    }
    bajahs();
    //e
    function bajaes() {
        setTimeout(function () {
            e.style.transform = 'translateY(' + translateletter + 'px)';
        }, 975);
    }
    bajaes();
    //P
    function bajaPs() {
        setTimeout(function () {
            P.style.transform = 'translateY(' + translateletter + 'px)';
        }, 800);
    }
    bajaPs();
    //i
    function bajais() {
        setTimeout(function () {
            i.style.transform = 'translateY(' + translateletter + 'px)';
        }, 750);
    }
    bajais();
    //a
    function bajaas() {
        setTimeout(function () {
            a.style.transform = 'translateY(' + translateletter + 'px)';
        }, 800);
    }
    bajaas();
    //n
    function bajans() {
        setTimeout(function () {
            n.style.transform = 'translateY(' + translateletter + 'px)';
        }, 650);
    }
    bajans();
    //o1
    function bajao1s() {
        setTimeout(function () {
            o1.style.transform = 'translateY(' + translateletter + 'px)';
        }, 1000);
    }
    bajao1s();
    //S
    function bajaSs() {
        setTimeout(function () {
            S.style.transform = 'translateY(' + translateletter + 'px)';
        }, 900);
    }
    bajaSs();
    //h2
    function bajah2s() {
        setTimeout(function () {
            h2.style.transform = 'translateY(' + translateletter + 'px)';
        }, 700);
    }
    bajah2s();
    //o2
    function bajao2s() {
        setTimeout(function () {
            o2.style.transform = 'translateY(' + translateletter + 'px)';
        }, 525);
    }
    bajao2s();
    //p2
    function bajap2s() {
        setTimeout(function () {
            p2.style.transform = 'translateY(' + translateletter + 'px)';
        }, 350);
    }
    bajap2s();

    //Funcion bajar lampara
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        if (scrollPosition <= lampmove) {
            window.scrollTo(0, 0);
            lampara.style.transform = `translateY(+${lampmove}px)`;
        } else if (scrollPosition >= lampmove) {
            window.scrollTo(0, scrollPosition);
        }
        
    })

    // Funcion de mover notas
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        notas.style.transform = `translateX(-${scrollPosition}px)`;
    });
    // Funcion de mover notas2
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        notas2.style.transform = `translateX(+${scrollPosition}px)`;
    });
    
    // Funcion para bloquear scroll al principio
    /*window.addEventListener('scroll', () => {
        const scrollP = window.scrollY;

        if (scrollP < scrollLockPoint) {
            window.scrollTo(0, 0);
        } else if (scrollP > scrollLockPoint) {
            window.scrollTo(0, scrollP)
        }
    });*/
    
});
    