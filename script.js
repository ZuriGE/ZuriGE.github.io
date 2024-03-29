//añadir proyectos desde el js al slider al cargar la página

const loadProjects = (lan) => {
	$("#sliderItemList").html("");
	$("#sliderDots").html("");

	//Array de proyectos
	let projectArray = [
		{
			title: ["HiRun", "HiRun", "HiRun"],
			desc: ["Proyecto final del curso en Codenotch, web de publicación y búsqueda de servicios profesionales por zona. Incluye calendario integrado, gestión de reservas, geolocalización, chat entre usuarios y muchas más funcionalidades.", "Programming course final project in Codenotch, website  publishing and searching  professional services by area. It includes features such as integrated calendar, reservation management, geolocation, and chat between users.", "Programazio kurtsoko amaierako proiektu gisa garatu da HiRun, erabiltzaileek beren inguruan  zerbitzu profesionalak argitaratu eta bilatzeko web orria. Egutegi integratua, erreserben kudeaketa, geolokalizazioa, erabiltzaileen arteko txata eta halako funtzionalitate gehiago ditu."],
			img: "./img/HiRun.jpg",
			stack: ["html", "css", "ts", "angular", "node", "sql", "aws", "googleCloud"],
			link: "https://hi-run.vercel.app/",
		},
		{
			title: ["Pic Pick", "Pic Pick", "Pic Pick"],
			desc: [
				"Extrae los colores de tus imágenes preferidas en dos sencillos pasos. 'Pic Pick' te permite obtener una paleta de colores basada en la imagen que selecciones. Esta herramienta se fundamenta en el método de agrupamiento K-medias y el cálculo de distancia euclídea entre puntos, tratando las coordenadas RGB de cada píxel como si se tratase de coordenadas cartesianas.",
				"Pick the colours from your favourite pics. 'Pic Pick' allows you to get a colour palette inspired on the image you select. This tool is based on the K-means clustering method and the calculation of Euclidean distance between points, treating the RGB coordinates of each pixel as Cartesian coordinates.",
				"Zure argazki gogokoen koloreak atera bi urrats errazetan. 'Pic Pick'ek hautatutako irudian oinarritutako kolore-paleta bat egiteko aukera ematen dizu. Tresna hau K-media multzokatze-metodoan eta puntuen arteko distantzia euklideoaren kalkuluan oinarritzen da, pixel bakoitzaren RGB koordenatuak koordenatu cartesiarrak balira tratatuta.",
			],
			img: "./img/color_picker.jpg",
			stack: ["html", "css", "js"],
			link: "https://zurige.github.io/pic-pick/",
		},
		{
			title: ["Simón dice", "Simon Says", "Tximunek dio"],
			desc: ["El clásico juego de la infancia ahora en tu PC. Con un estética retro para una experiencia más inmersiva.", "The classic children's game now in your computer. With a retro aesthetic for a more immersive experience.", "Haurtzaroko jolas klasikoa, orain zure ordenagailuan. Estetika retro batekin, esperientzia mulgilgarriago bat lortzeko."],
			img: "./img/simon.jpg",
			stack: ["html", "css", "js"],
			link: "https://zurige.github.io/simon/",
		},
		{
			title: ["myBooks", "myBooks", "myBooks"],
			desc: ["Página de compraventa de libros. Desarrollada para practicar la implementación de una base de datos local en una aplicación de angular.", "Book buying and selling page. Developed to practice implementing a local database in an Angular application.", "Liburuak salerosteko orria. Angular aplikazio batean datu-base lokal baten ezarpetan ikasteko garatua."],
			img: "./img/myBooks.jpg",
			stack: ["html", "css", "ts", "angular", "node", "sql"],
		},

		{
			title: ["3 en raya", "Tic-tac-toe", "Hirutan hiru"],
			desc: ["El juego de toda la vida. Dos modos: multijugador o tú contra la máquina. ¿Crees que puedes vencer a la IA?", "The old game. Two modes: multiplayer or you against the machine. Can you beat the AI?", "Betiko artzai jokoa. Bi modu: jokalari anitzekoa edo zu makinaren aurka. IAri irabazteko gai izango al zara?"],
			img: "./img/3enraya.jpg",
			stack: ["html", "css", "js"],
		},

		{
			title: ["Pokédex", "Pokédex", "Pokédex"],
			desc: ["Desarrollada como ejercicio para llamar a una API externa y mostrar los resultados en un front maquetado de acuerdo a la temática pokemon", "Developed as an exercise to call an external API and show the results in a front layout related to the pokemon theme", "Ariketa gisa garatu da, kanpoko API bati deitzeko eta emaitzak gaiaren arabera maketatutako front batean erakusteko"],
			img: "./img/pokeapi.jpg",
			stack: ["html", "css", "js", "node"],
		},
	];

	$.each(projectArray, (i, project) => {
		//iconos para mapear
		let newP = $("<div>").addClass("cardSlider").addClass("carousel-item");

		//parte superior
		let cardImg = $("<div>")
			.addClass("cardImage")
			.css("background", `linear-gradient(0deg,var(--cardGrad), var(--cardGrad) 20%, transparent), url('${project.img}')center top/100%`)
			.append($("<h2>").attr("id", `p${i}_t`).text(project.title[lan]));

		//parte inferior con el resto de info
		let cardInfo = $("<div>")
			.addClass("cardInfo")
			.append($("<p>").attr("id", `p${i}_desc`).text(project.desc[lan]));

		if (project.link) {
			let seeIcon = $("<i>").addClass("fa-solid").addClass("fa-up-right-from-square");
			let linkAnchor = $("<a>").attr("href", project.link).attr("target", "_blank").addClass("projectLink").append(seeIcon);
			let linkButton = $("<div>").addClass("linkButton").append(linkAnchor);
			cardImg.append(linkButton);
		}

		$.each(project.stack, (i, tech) => {
			let iconClass;
			let ariaLabel;
			switch (tech) {
				case "angular":
					iconClass = "devicon-angularjs-plain colored";
					ariaLabel = "Angular";

					break;
				case "html":
					iconClass = "devicon-html5-plain colored";
					ariaLabel = "HTML5";

					break;
				case "css":
					iconClass = "devicon-css3-plain colored";
					ariaLabel = "CSS3";

					break;
				case "js":
					iconClass = "devicon-javascript-plain colored";
					ariaLabel = "Javascript";

					break;
				case "ts":
					iconClass = "devicon-typescript-plain colored";
					ariaLabel = "Typescript";

					break;
				case "sql":
					iconClass = "devicon-mysql-plain";
					ariaLabel = "MySQL";

					break;
				case "jquery":
					iconClass = "devicon-jquery-plain-wordmark colored";
					ariaLabel = "JQuery";

					break;
				case "bootstrap":
					iconClass = "devicon-bootstrap-plain colored";
					ariaLabel = "Bootstrap";

					break;
				case "mongo":
					iconClass = "devicon-mongodb-plain colored";
					ariaLabel = "MongoDB";

					break;
				case "aws":
					iconClass = "devicon-amazonwebservices-original colored";
					ariaLabel = "Amazon Web Services";

					break;
				case "git":
					iconClass = "devicon-git-plain colored";
					ariaLabel = "Git";

					break;
				case "googleCloud":
					iconClass = "devicon-googlecloud-plain colored";
					ariaLabel = "Google Cloud";

					break;
				case "node":
					iconClass = "devicon-nodejs-plain colored";
					ariaLabel = "NodeJS";

					break;
			}
			// Aquí puedes personalizar los íconos según las tecnologías en el stack
			let icon = $("<i>").addClass(iconClass, "cardIcon").attr("aria-label", ariaLabel).attr("title", ariaLabel);

			cardInfo.append(icon);
		});
		cardImg.append(cardInfo);
		newP.append(cardImg);

		$("#sliderItemList").append(newP);

		let newB = $("<button>", {
			type: "button",
			class: "sliderDot",
			"data-bs-target": "#projectSlider",
			"data-bs-slide-to": i,
			"aria-label": `Slide ${i + 1}`,
		});

		if (i == 0) {
			newB.addClass("active").attr("aria-current", "true");
		}

		$("#sliderDots").append(newB);
	});
	$(".carousel-item").eq(0).addClass("active");
};

$(document).ready(() => {
	loadProjects(0);
	btn_ES.on("click", () => {
		changeLng(0);
	});
	btn_ES_m.on("click", () => {
		changeLng(0);
		$("#burgerNav").trigger("click");
	});

	btn_EN.on("click", () => {
		changeLng(1);
	});
	btn_EN_m.on("click", () => {
		changeLng(1);
		$("#burgerNav").trigger("click");
	});

	btn_EUS.on("click", () => {
		changeLng(2);
	});
	btn_EUS_m.on("click", () => {
		changeLng(2);
		$("#burgerNav").trigger("click");
	});

	//menu hamburguesa para móvil
	$("#burgerNav").click(function () {
		$("#burgerIcon").toggleClass("open");
		$("#header").toggleClass("ddListClosed");
		$("#ddList").slideToggle();
	});

	$(".ddList a").click(function () {
		console.log("hamburguesa");
		event.preventDefault();

		let target = $(this).attr("href");
		$("#burgerNav").trigger("click");
		let offset;

		if ($(this).parent().index() === 0) {
			// Restar 150px para el primer enlace
			offset = $(target).offset().top - 150;
		} else {
			// Restar 100px para los otros enlaces
			offset = $(target).offset().top - 100;
		}

		$("html, body").animate(
			{
				scrollTop: offset,
			},
			700
		);
	});

	//links navBar
	$(".navBarList a").click(function () {
		console.log("hamburguesa");
		event.preventDefault();

		let target = $(this).attr("href");
		let offset;

		if ($(this).parent().index() === 0) {
			// Restar 150px para el primer enlace
			offset = $(target).offset().top - 150;
		} else {
			// Restar 100px para los otros enlaces
			offset = $(target).offset().top - 100;
		}

		$("html, body").animate(
			{
				scrollTop: offset,
			},
			700
		);
	});
});
//idioma
//botones
const btn_ES = $("#btn_ES");
const btn_EN = $("#btn_EN");
const btn_EUS = $("#btn_EUS");
const btn_ES_m = $("#btn_ES_m");
const btn_EN_m = $("#btn_EN_m");
const btn_EUS_m = $("#btn_EUS_m");
//variabels de todos los textos
//navbar
const nb1 = $("#nb1");
const nb2 = $("#nb2");
const nb3 = $("#nb3");
const nb4 = $("#nb4");
//menú hamburguesa
const hb1 = $("#hb1");
const hb2 = $("#hb2");
const hb3 = $("#hb3");
const hb4 = $("#hb4");
//about
const abt_t = $("#abt_t");
const abt_p1 = $("#abt_ext_p1");
const abt_p2 = $("#abt_ext_p2");
const abt_p3 = $("#abt_ext_p3");
const abt_p4 = $("#abt_ext_p4");
const showMore = $("#showMore");
const showLess = $("#showLess");
//projects
const pro_t = $("#pro_t");
const skill_t = $("#skill_t");
const skill_aux = $("#skill_aux");
//contact
const contact_t = $("#contact_t");
const contact_p1 = $("#contact_p1");
const contact_p2 = $("#contact_p2");
const contact_p3 = $("#contact_p3");

//traducciones: array-> es: 0 / en: 1 / eus: 2

const nb1_trad = ["Inicio", "Home", "Hasiera"];
const nb2_trad = ["Proyectos", "Projects", "Proiektuak"];
const nb3_trad = ["Stack", "Stack", "Stack-a"];
const nb4_trad = ["Contacto", "Contact info", "Kontaktua"];
const abt_t_trad = ["Desarrolladora web", "Web developer", "Web garatzailea"];
const abt_p1_trad = ["Desarrolladora full stack e ingeniera técnica aeronáutica con una sólida trayectoria en la industria del transporte aéreo.", "Full stack  developer and aerospace engineer with a solid track record in the air transportation industry.", "Full stack garatzaile eta ingeniari tekniko aeronautikoa, abiazioaren industrian ibilbide sendokoa."];
const abt_p2_trad = ["Durante los años que dediqué a la gestión del mantenimiento de aeronaves, comencé a interesarme por la programación automatizando tareas con Visual Basic y y SQL.", "During the years I worked in aircraft maintenance management, I became interested in programming in order to automatize tasks with Visual Basic and SQL.", "Hegazkinen mantentze-lanen kudeaketan lan egiten nuela hasi nintzen programatzen, Visual Basic eta SQL bidez lanak automatizatzeko."];
const abt_p3_trad = ["Acostumbrada a trabajar bajo los altos estándares de calidad aplicables a la aviación, he decidido emprender un nuevo camino en el mundo de la programación web.", "Used to working under the high quality standards applicable to aviation, I decided to start a new path in the world of web programming.", "Abiazioan aplikatzen diren kalitate estandar altuekin lan egiten ohituta, bide berri bati ekitea erabaki dut web programazioaren arloan."];
const abt_p4_trad = ["Con mi habilidad para abordar desafíos técnicos y mi atención al detalle, estoy lista para aplicar mis conocimientos previos en esta emocionante industria en constante evolución.", "With my ability to address technical challenges and my attention to detail, I'm ready to use my prior knowledge in this exciting, ever-evolving industry.", "Erronka teknikoei ekiteko eta xehetasunei arreta jartzeko daukadan trebeziarekin, prest nago etengabe aldatzen ari den industria zirraragarri honetan nire ezagutzak aplikatzeko."];
const showMore_trad = ["Ver más", "Show more", "Gehiago ikusi"];
const showLess_trad = ["Cerrar", "Close", "Itxi"];
const pro_t_trad = ["Mis proyectos", "My projects", "Nire proiektuak"];
const skill_t_trad = ["Stack técnico", "Technical stack", "Stack teknikoa"];
const skill_aux_trad = ["Tecnologías auxiliares", "Auxiliary technologies", "Bestelako teknologiak"];
const contact_t_trad = ["Ponte en contacto", "Get in touch", "Harremanetan jarri"];
const contact_p1_trad = ["Puedes contactar conmigo a través de los siguientes medios:", "You can contact me through the following means:", "Nirekin kontaktatzeko, bide hauek dituzu:"];
const contact_p2_trad = ["¿Quieres saber más? Consulta mis perfiles de LinkedIn y GitHub...", "Need more information? Check out my LinkedIn and GitHub profiles...", "Gehiago jakin nahi? Bisita itzazu nire LinkedIn el GitHub-eko profilak..."];
const contact_p3_trad = ["...o descarga directamente mi curriculum ", "... or just download my cv", "... edo zuzenean jeitsi nire curriculuma"];
let currentLang = 0;
let darkMode = false;

$("#darkMode").on("click", () => {
	darkMode = !darkMode;
	$("#darkMode").toggleClass("rotated");
	$("body").toggleClass("darkModeBg");
	$("#jqueryIcon").toggleClass("colored");
	$("#nodeIcon").toggleClass("colored");

	if (darkMode) {
		$("#awsIcon").attr("src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg");
		$("#vercelIcon").attr("src", "./img/Vercel_logo_white.png");
		document.documentElement.style.setProperty("--dark", "#cbcbcb");
		document.documentElement.style.setProperty("--light", "#242424");
		document.documentElement.style.setProperty("--cardGrad", "#000000");
		document.documentElement.style.setProperty("--contrast1", "#ffd600");
		document.documentElement.style.setProperty("--contrast2", "#6a1f7d");
		document.documentElement.style.setProperty("--contrast2_light", "#1f064a");
	} else {
		$("#awsIcon").attr("src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg");
		$("#vercelIcon").attr("src", "./img/Vercel_logo_black.png");
		document.documentElement.style.setProperty("--dark", "#242424");
		document.documentElement.style.setProperty("--light", "#f1f1f1");
		document.documentElement.style.setProperty("--cardGrad", "#242424");
		document.documentElement.style.setProperty("--contrast1", "#01a1a2");
		document.documentElement.style.setProperty("--contrast2", "#ffd600");
		document.documentElement.style.setProperty("--contrast2_light", "#fdf691");
	}
});

changeLng = (language) => {
	switch (true) {
		case currentLang === 0 && language === 1:
			btn_ES.toggleClass("bw");
			btn_EN.toggleClass("bw");
			btn_ES_m.toggleClass("bw");
			btn_EN_m.toggleClass("bw");
			break;
		case currentLang === 0 && language === 2:
			btn_ES.toggleClass("bw");
			btn_EUS.toggleClass("bw");
			btn_ES_m.toggleClass("bw");
			btn_EUS_m.toggleClass("bw");
			break;
		case currentLang === 1 && language === 0:
			btn_ES.toggleClass("bw");
			btn_EN.toggleClass("bw");
			btn_ES_m.toggleClass("bw");
			btn_EN_m.toggleClass("bw");
			break;
		case currentLang === 1 && language === 2:
			btn_EN.toggleClass("bw");
			btn_EUS.toggleClass("bw");
			btn_EN_m.toggleClass("bw");
			btn_EUS_m.toggleClass("bw");
			break;
		case currentLang === 2 && language === 0:
			btn_ES.toggleClass("bw");
			btn_EUS.toggleClass("bw");
			btn_ES_m.toggleClass("bw");
			btn_EUS_m.toggleClass("bw");
			break;
		case currentLang === 2 && language === 1:
			btn_EN.toggleClass("bw");
			btn_EUS.toggleClass("bw");
			btn_EN_m.toggleClass("bw");
			btn_EUS_m.toggleClass("bw");
			break;
	}

	currentLang = language;

	nb1.text(nb1_trad[language]);
	nb2.text(nb2_trad[language]);
	nb3.text(nb3_trad[language]);
	nb4.text(nb4_trad[language]);
	hb1.text(nb1_trad[language]);
	hb2.text(nb2_trad[language]);
	hb3.text(nb3_trad[language]);
	hb4.text(nb4_trad[language]);
	abt_t.text(abt_t_trad[language]);
	abt_p1.text(abt_p1_trad[language]);
	abt_p2.text(abt_p2_trad[language]);
	abt_p3.text(abt_p3_trad[language]);
	abt_p4.text(abt_p4_trad[language]);
	pro_t.text(pro_t_trad[language]);
	skill_t.text(skill_t_trad[language]);
	skill_aux.text(skill_aux_trad[language]);
	contact_t.text(contact_t_trad[language]);
	showMore.text(showMore_trad[language]);
	showLess.text(showLess_trad[language]);
	contact_t.text(contact_t_trad[language]);
	contact_p1.text(contact_p1_trad[language]);
	contact_p2.text(contact_p2_trad[language]);
	contact_p3.text(contact_p3_trad[language]);

	loadProjects(language);
};

//botón +/x
const expandButton = $("#expandButton");
const abt_ext = $("#abt_ext");
let expanded = false;

expandButton.on("click", () => {
	expanded = !expanded;

	if (expanded) {
		showMore.slideToggle();
		setTimeout(() => {
			showLess.slideToggle();
		}, 300);
	} else {
		showLess.slideToggle();
		setTimeout(() => {
			showMore.slideToggle();
		}, 300);
	}

	abt_ext.slideToggle();
	expandButton.toggleClass("activo");
});

// // //botones slider

//boton CV

const btnCV = $("#btnCV");
btnCV.on("click", () => {
	let cvUrl = "./assets/CV_ZGalan_2024";
	if (currentLang === 1) {
		//cv en inglés
		cvUrl = cvUrl + "_en.pdf";
	} else {
		cvUrl = cvUrl + ".pdf";
	}
	window.open(cvUrl, "_blank");
});

//copiar mail
$("#copyMail").on("click", async () => {
	navigator.clipboard
		.writeText("zurigales@gmail.com")
		.then(() => {
			$("#validFeedback").fadeToggle();
		})
		.catch((err) => {
			$("#invalidFeedback").fadeToggle();
		});
});
