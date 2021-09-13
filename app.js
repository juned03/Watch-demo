const options = { weekday: 'long', year:'numeric', month:'long', day:'numeric'};
setInterval(() => {
  a= new Date();
  let time = a.getHours()+':'+ a.getMinutes()+':' +a.getSeconds();
  let date = a.toLocaleDateString(undefined, options);
  document.getElementById('time').innerHTML=time+ "<br>On " + date; 
}, 1000);
