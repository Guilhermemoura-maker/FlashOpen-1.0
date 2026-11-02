// SAVE + RANK - Puro JS, sem frescura
let time = localStorage.getItem('time') || 0;
let rank = localStorage.getItem('rank') || 'Newbie RANK 1';

setInterval(()=>{
  time++;
  localStorage.setItem('time', time);
  if(time > 1800 && rank == 'Newbie RANK 1'){
    rank = 'Viciado RANK 2';
    localStorage.setItem('rank', rank);
    alert('UPOU! Agora tu é ' + rank);
  }
}, 60000); // conta 1 min

// Mostra na tela
document.getElementById('rank').innerText = rank + ' - ' + time + ' min jogados';


