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
	$('.info__footnotes').addClass('info__footnotes_open');
});

//slider

var doubleLabels = [

    "<i>15 000 км</i><span>1 год</span>",
    "<i>30 000 км</i><span>2 года</span>",
    "<i>45 000 км</i><span>3 года</span>",
    "<i>60 000 км</i><span>4 года</span>",
    "<i>75 000 км</i><span>5 лет</span>",
	"<i>90 000 км</i><span>6 лет</span>",
	"<i>105 000 км</i><span>7 лет</span>",
	"<i>120 000 км</i><span>8 лет</span>",
	"<i>135 000 км</i><span>9 лет</span>",
	"<i>150 000 км</i><span>10 лет</span>"

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


//preloader

// var target = document.getElementsByClassName('filters__img');


;(function (factory) {

        if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object') {
            // CommonJS
            factory(require('jquery'), require('spin.js'));
        } else if (typeof define == 'function' && define.amd) {
            // AMD, register as anonymous module
            define(['jquery', 'spin'], factory);
        } else {
            // Browser globals
            if (!window.Spinner) throw new Error('Spin.js not present');
            factory(window.jQuery, window.Spinner);
        }
    })(function ($, Spinner) {

        $.fn.spin = function (opts, color) {

            return this.each(function () {
                var $this = $(this),
                    data = $this.data();

                if (data.spinner) {
                    data.spinner.stop();
                    delete data.spinner;
                }
                if (opts !== false) {
                    opts = $.extend({ color: color || $this.css('color') }, $.fn.spin.presets[opts] || opts);
                    data.spinner = new Spinner(opts).spin(this);
                }
            });
        };

        $.fn.spin.presets = {
            default: {
                lines: 8// The number of lines to draw
                , length: 0 // The length of each line
                , width: 17 // The line thickness
                , radius: 29 // The radius of the inner circle
                , corners: .65 // Corner roundness (0..1)
                , color: '#0099da' // #rgb or #rrggbb or array of colors
                , opacity: 0.2 // Opacity of the lines
                , speed: 1 // Rounds per second
                , trail: 50 // Afterglow percentage
            },
            small: {
                lines: 8// The number of lines to draw
                , length: 0 // The length of each line
                , width: 12 // The line thickness
                , radius: 18 // The radius of the inner circle
                , corners: .65 // Corner roundness (0..1)
                , color: '#0099da' // #rgb or #rrggbb or array of colors
                , opacity: 0.2 // Opacity of the lines
                , speed: 1 // Rounds per second
                , trail: 50 // Afterglow percentage
            }
        };
    });

	$('.js_spin').spin('default');
	$('.js_spin_small').spin('small');
