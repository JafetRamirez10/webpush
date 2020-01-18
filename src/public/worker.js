console.log('SERVICES WORKER');

self.addEventListener('push',e=>{
	const data=e.data.json();
	console.log(data);
	self.registration.showNotification(data.title,{ 
		body:data.message,
		icon:'https://cdn0.iconfinder.com/data/icons/flat-round-system/512/archlinux-512.png'});
	//console.log('Notificacion recibida')
})