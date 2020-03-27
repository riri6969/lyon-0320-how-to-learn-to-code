// $(function() {
// 	const main = $('#jquery');

//     main.hide();

// 	$('.button_pako_front').click(() => {
// 		main.show();
// 		main.css('animation-name', 'toScale');
//     });
// });

$(function() {
	const main = $('#jquery');
	const ress = $('.modal-footer');

    main.css('display','none');

	$('.button_pako_front').click(() => {
		main.fadeIn(1000);
	});
	
	// ress.click( () => {
	// 	window.onload(ressources.html);
	// });
});


const SLIDER_WIDTH= 4
let coreUrl = 'https://www.voyage.fr/sites/default/files/inline-images/';
let images = [
	`${coreUrl}01-l-altai.jpg`,
	`${coreUrl}02-volcan-kamchatka.jpgalt`,
	`${coreUrl}03-peninsule-de-kola.jpgalt`,
	`${coreUrl}04-lac-ladoga.jp`,
	`${coreUrl}05-curonian-spit.jpg`,
	`${coreUrl}06-khibiny.jpg `,
];

document.getElementById('leftBtn').addEventListener('mouseup',()=> {
	permuteToLeft();
	insertToDom(); 
});

document.getElementById('rightBtn').addEventListener('mouseup',()=>{
	permuteToRight();
	insertToDom();
})

insertToDom = () => {
	let slider = document.getElementById('slider');
		for (let i = 0 ; i<SLIDER_WIDTH; i++){
			slider.getElementsByTagName('img')[i].src=iages[i]
		}
}
permuteToLeft=()=>{
	let tmp=images[0]
		for(let i=0; i<images.length-1;i++){
			images[i]=images[i+1]
		}
		images[images.length - 1 ] = tmp
}

permuteToRight = () => {
	let tmp = images[images.length - 1]
	for (let i = images.length -1 ; i>0;i-- ){
		images[i]=images[i-1]
	}
	images[0]= tmp
}
