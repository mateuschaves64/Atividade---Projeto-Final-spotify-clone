const mostrartudo1 = document.getElementById('mostr1'); //Seção que define os códigos de interação como o hover faz
const mostrartudo2 = document.getElementById('mostr2');
const criarplaylist = document.getElementById('criplay');
const ptbr = document.getElementById('btn-ptbr');
const titulo1 = document.getElementById('Musitit');
const titulo2 = document.getElementById('Artistit');
const cri = document.getElementById('plus');
const premium = document.getElementById('btnPrem');
const suporte = document.getElementById('btnsup');
const baixar = document.getElementById('btnbaixar');
const inst = document.getElementById('insapp');
const inscr = document.getElementById('increv');
const ent = document.getElementById('Entrar');
const playcri = document.getElementById('criplay');
const casa = document.getElementById('casa');
const btnf = document.getElementById('footerbtn');

mostrartudo1.addEventListener('mouseenter', function() { //Sistema que grifa o texto "mostrar mais"

    mostrartudo1.addEventListener('mouseenter', () => {
        mostrartudo1.style.textDecoration = 'underline';
    });

    mostrartudo1.addEventListener('mouseleave', () => {
        mostrartudo1.style.textDecoration = 'none';
    });
});
mostrartudo2.addEventListener('mouseenter', function() {

    mostrartudo2.addEventListener('mouseenter', () => {
        mostrartudo2.style.textDecoration = 'underline';
    });

    mostrartudo2.addEventListener('mouseleave', () => {
        mostrartudo2.style.textDecoration = 'none';
    });
});


cri.addEventListener('mouseenter', function() { //Faz o icone ter uma coloração mais viva quando encosta o mouse

    cri.addEventListener('mouseenter', () => {
        cri.style.color = rgb(255, 255, 255);
    });

    cri.addEventListener('mouseleave', () => {
        cri.style.color = rgb(147, 149, 149);
    });
});

premium.addEventListener('mouseenter', () => { //Amplia em 1.1 o tamanho do original
    premium.style.transform = 'scale(1.1)';
    premium.style.cursor = 'pointer';
});


premium.addEventListener('mouseleave', () => { //Retorna o tamanho original
    premium.style.transform = 'scale(1)';
});

suporte.addEventListener('mouseenter', () => {
    suporte.style.transform = 'scale(1.1)';
    suporte.style.cursor = 'pointer';
});


suporte.addEventListener('mouseleave', () => {
    suporte.style.transform = 'scale(1)';
});
baixar.addEventListener('mouseenter', () => {
    baixar.style.transform = 'scale(1.1)';
    baixar.style.cursor = 'pointer';
});


baixar.addEventListener('mouseleave', () => {
    baixar.style.transform = 'scale(1)';
});
inst.addEventListener('mouseenter', () => {
    inst.style.transform = 'scale(1.1)';
    inst.style.cursor = 'pointer';
});


inst.addEventListener('mouseleave', () => {
    inst.style.transform = 'scale(1)';
});
inscr.addEventListener('mouseenter', () => {
    inscr.style.transform = 'scale(1.1)';
    inscr.style.cursor = 'pointer';
});


inscr.addEventListener('mouseleave', () => {
    inscr.style.transform = 'scale(1)';
});
ent.addEventListener('mouseenter', () => {
    ent.style.transform = 'scale(1.1)';
    ent.style.cursor = 'pointer';
});


ent.addEventListener('mouseleave', () => {
    ent.style.transform = 'scale(1)';
});
playcri.addEventListener('mouseenter', () => {
    playcri.style.transform = 'scale(1.1)';
    playcri.style.cursor = 'pointer';
});


playcri.addEventListener('mouseleave', () => {
    playcri.style.transform = 'scale(1)';
});
casa.addEventListener('mouseenter', () => {
    casa.style.transform = 'scale(1.1)';
    casa.style.cursor = 'pointer';
});


casa.addEventListener('mouseleave', () => {
    casa.style.transform = 'scale(1)';
});

btnf.addEventListener('mouseenter', () => {
    btnf.style.transform = 'scale(1.1)';
    btnf.style.cursor = 'pointer';
});


btnf.addEventListener('mouseleave', () => {
    btnf.style.transform = 'scale(1)';
});
