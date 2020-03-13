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

    main.css('display','none');

	$('.button_pako_front').click(() => {
		main.fadeIn(5000);
    });
});

