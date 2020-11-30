const alan = document.getElementById("alan");
const ikid = alan.getContext("2d");

let run = new Audio();
let vuv = new Audio();
let temas = new Audio();
let tink = new Audio();
let sekme = new Audio();
let gun = new Audio();
let son = new Audio();
let level = new Audio();
let bitti = new Audio();

run.src = "sounds/run.mp3";
vuv.src = "sounds/vuv.mp3";
temas.src = "sounds/temas.mp3";
tink.src = "sounds/tink.mp3";
sekme.src = "sounds/sekme.mp3";
gun.src = "sounds/gun.mp3";
son.src = "sounds/son.mp3";
level.src = "sounds/level.mp3";
bitti.src = "sounds/bitti.mp3";

const mekan = {
	x: 299,
	y: 0,
	width: 3,
	height: 15,
	color: "white"
}

const nesne = {
	x: 300,
	y: 225,
	width: 10,
	height: 10,
	color: "white",
}

const bot = {
	x: 985,
	y: 175,
	width: 10,
	height: 100,
	color: "white",
	score: 0
}

const user = {
	x: 8,
	y: 175,
	width: 10,
	height: 125,
	color: "white",
	score: 0
}

function obje(x, y, w, h, c) {
	ikid.fillStyle = c;

	ikid.fillRect(x, y, w, h);
}

function yobje(x, y, w, c) {
	ikid.fillStyle = c;

	ikid.beginPath();
	ikid.arc(x, y, w, 0, Math.PI * 2);
	ikid.closePath();

	ikid.fill();
}

saniye = 15;

let tox = 3;
let toy = -1;
function topu() {
	ikid.clearRect(19, 0, alan.width-33, alan.height);
	nesne.x += tox;
	nesne.y += toy;
	yobje(nesne.x, nesne.y, nesne.width, nesne.color);
	yobje(nesne.x, nesne.y, nesne.width, nesne.color);

	alt = user.y + user.height + 10;
	balt = bot.y + bot.height + 10;
	if (nesne.x < 31) {
		if (nesne.y >= user.y-10 && nesne.y <= alt) {
			run.play();
			tox = 7;
			if (nesne.y < user.y+50) {
				toy = -3;
			}
			else {
				toy = 3;
			}
		}
		else {
			son.play();
			tox = 3;
			reset();
		}
	}
	else if (nesne.x > 973) {
		if (nesne.y >= bot.y-10 && nesne.y <= balt) {
			gun.play();
			tox = -7;
			if (nesne.y < bot.y+50) {
				toy = -3;
			}
			else {
				toy = 3;
			}
		}
		else {
			tink.play();
			tox = -3;
			if (toy < 0) {
				toy = 3;
			}
			else {
				toy = -3;
			}
			reset();
		}
	}
	else if (nesne.y < 10) {
		vuv.play();
		toy = 5;
	}
	else if (nesne.y > 736) {
		vuv.play();
		toy = -5;
	}
}

obje(user.x, user.y, user.width, user.height, user.color);
obje(bot.x, bot.y, bot.width, bot.height, bot.color);
yobje(nesne.x, nesne.y, nesne.width, nesne.color);

function reset() {
	nesne.x = 300;
	nesne.y = 225;
}

alan.addEventListener("mousemove", fare);
function fare(e) {
	ikid.clearRect(bot.x, bot.y - 1, bot.width + 1, bot.height + 1);
	let alann = alan.getBoundingClientRect();
	bot.y = e.clientY - alann.top - 50;
	obje(bot.x, bot.y, bot.width, bot.height, bot.color);
}

sayi = 0;
sayi2 = 0;

document.addEventListener("click", function(){
        if (sayi2 < 3) {
        	sayi2 += 1;
        	temas.play();
			tox = -10;
        }
});

document.addEventListener("keydown", klavye);
function klavye(evt) {
	let alann = alan.getBoundingClientRect();

    switch(evt.keyCode) {
        case 38:
			ikid.clearRect(8, user.y - 1, user.width + 1, user.height + 1);
			user.y += -75;
			obje(user.x, user.y, user.width, user.height, user.color);
            break;
        case 40:
			ikid.clearRect(8, user.y - 1, user.width + 1, user.height + 1);
			user.y += 75;
			obje(user.x, user.y, user.width, user.height, user.color);
            break;
        case 80:
			alert("oyun durduruldu..");
            break;
        case 88:
        	if (sayi < 3) {
        		sayi += 1;
        		temas.play();
				tox = 10;
        	}
            break;
        case 90:
        	if (sayi < 3) {
        		sayi += 1;
        		temas.play();
        		ikid.clearRect(8, user.y - 1, user.width + 1, user.height + 1);
        		user.height = 350;
				user.y = 35;
				obje(user.x, user.y, user.width, user.height, user.color);

				setTimeout(function () {
					sekme.play();
        			ikid.clearRect(8, user.y - 1, user.width + 1, user.height + 1);
					user.height = 125;
					user.y = 175;
					obje(user.x, user.y, user.width, user.height, user.color);

				}, 3000);
			}
            break;
        case 107:
        	if (sayi2 < 3) {
        		sayi2 += 1;
        		temas.play();
				ikid.clearRect(bot.x, bot.y - 1, bot.width + 1, bot.height + 1);
        		bot.height = 350;
				bot.y = 0;
				obje(bot.x, bot.y, bot.width, bot.height, bot.color);

				setTimeout(function () {
					sekme.play();
        			ikid.clearRect(bot.x, bot.y - 1, bot.width + 1, bot.height + 1);
					bot.height = 100;
					bot.y = 175;
					obje(bot.x, bot.y, bot.width, bot.height, bot.color);

				}, 3000);
			}
            break;
    }
}

function game() {
	topu();
}

let loop = setInterval(game, saniye);