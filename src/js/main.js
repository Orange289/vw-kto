//custom select

function customSelectInit () {
    $(".js_chosen_select").chosen({
        disable_search_threshold: 100,
        no_results_text: "Ничего не найдено",
        placeholder_text_single: " "
    });

    $('.js_chosen_select').on('chosen:showing_dropdown', function(e, params) {
        var el = params.chosen.container[0];
        $(el).find('li').wrapInner('<span></span>');
        if (!$(el).find('.js_custom_scroll').length) {
            $(el).find('.chosen-results').wrap('<div class="js_custom_scroll"></div>');
            customScrollInit();
        }
    });
    var list = $('.js_chosen_select').next();
    var input = list.find('input');
    list.find('input').on('keyup',function(){
        list.find('li').wrapInner('<span></span>');
        input.focus();
     })


}
customSelectInit();

// info - tabs

$('.info__open').on('click', function(){
	$(this).parents('.info__item').find('.info__btn').toggleClass('info__btn_open');
	$(this).parents('.info__item').find('.info__content').slideToggle();
});

//slider

var slider = document.getElementById('range_mileage');

noUiSlider.create(slider, {
	start: 0,
	connect: [true, false],
	step: 15000,
	range: {
		'min': 15000,
		// '30 000': 20,
		// '45 000': 30,
		// '60 000': 40,
		// '75 000': 50,
		// '90 000': 60,
		// '105 000': 70,
		// '120 000': 80,
		// '135 000': 90,
		'max': 150000
	}

});



slider.noUiSlider.on('update', function( values, handle ) {
	var value_slider =  slider.noUiSlider.get();
	// alert(typeof(value_slider));

	// var v = 'v' + value_slider;
	// var value_s = String(value_slider);
	// alert(value_s);
	// if ($('#mileage').val() == value_slider) {
	// 	$(this).attr("selected", "selected");
	// }
	$("#mileage option[value=" + String(slider.noUiSlider.get()) + "]").attr("selected", "selected");

});
