let secondes = document.querySelector('.seconde');
let minutes = document.querySelector('.minute');
let heures = document.querySelector('.heure');

setInterval(()=>{
    let date = new Date();
    let heure = date.getHours() * 30;
    let minute = date.getMinutes() * 6;
    let seconde = date.getSeconds() * 6;
    heures.style.transform = `rotateZ(${heure + (minute/12)}deg)`;
    minutes.style.transform = `rotateZ(${minute}deg)`;
    secondes.style.transform = `rotateZ(${seconde}deg)`;
},1000)
