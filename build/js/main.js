$(document).ready(function(){

	svg4everybody({});

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

$(document).on('click','.info__open', function(){
	$(this).parents('.info__item').find('.info__btn').toggleClass('info__btn_open');
	$(this).parents('.info__item').find('.info__content').slideToggle();
});

//slider

var doubleLabels = [

    "<i>15 000</i><span>1 год</span>",
    "<i>30 000</i><span>2 года</span>",
    "<i>45 000</i><span>3 года</span>",
    "<i>60 000</i><span>4 года</span>",
    "<i>75 000</i><span>5 лет</span>",
	"<i>90 000</i><span>6 лет</span>",
	"<i>105 000</i><span>7 лет</span>",
	"<i>120 000</i><span>8 лет</span>",
	"<i>135 000</i><span>9 лет</span>",
	"<i>150 000</i><span>10 лет</span>"

];

$("#range_mileage")
    .slider({
        max: 9,
        min: 0,
        value: 0,
        animate: 400,
		range: "min",

		change: function(event, ui) {
			$('#mileage_chosen .chosen-single span').html($("#mileage option[value=" + $('#range_mileage').slider('value') + "]").html());
		}
    })
    .slider("pips", {
        rest: "label",
        labels: doubleLabels
    });

	$(document).on('change','#mileage', function(){
		$('#range_mileage').slider('value',this.value);
	});

})
