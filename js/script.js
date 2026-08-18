const s=document.getElementById('search');
s.oninput=()=>document.querySelectorAll('.card').forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(s.value.toLowerCase())?'block':'none';
});