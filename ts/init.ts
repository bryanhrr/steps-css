let bod:HTMLElement = document.body;
let til:boolean = false;

let toggleTilted = function()
{
	tilted = !tilted;
	
	if(tilted) body.classList.add('details');
	else body.classList.remove('details');
}

body.addEventListener('click', toggleTilt);
body.addEventListener('touchstart', toggleTilt);
if(location.pathname.match(/fullcpgrid/i)) setTimeout(toggleTilt, 1000);