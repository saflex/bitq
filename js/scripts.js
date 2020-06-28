/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');

        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});

$(function() {
    $('.status-refresh').click(function() {
        $('.fa-refresh').toggleClass("refresh");
    });
});

$(document).ready(function() {
    $('input,textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
});




$(document).ready(function() {

    $('.single-item-mobile').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    });

});


$(document).ready(function() {

    $('.single-item-mobile2').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });

});





$(document).ready(function() {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});


document.documentElement.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);



$('.selectpicker').selectpicker({});




if (screen.width <= 400) {
    $('head').append('<meta name="viewport" content="width=400">');
} else {
    $('head').append('<meta name="viewport" content="width=device-width">');
}
$(window).on("orientationchange", function() {
    if (window.orientation == 0) // Portrait 
    {
        $('head').append('<meta name="viewport" content="width=device-width">');
    } else // Landscape 
    {
        $('head').append('<meta name="viewport" content="width=740">');
    }
});








$('.script-send').click(function() {
    $('.mobile-energy-script').css('display', 'none');
    $('.mobile-energy-script2').css('display', 'block');
});

$('.script-get').click(function() {
    $('.mobile-energy-script2').css('display', 'none');
    $('.mobile-energy-script').css('display', 'block');
});


$('.script-send-poket').click(function() {
    $('.mobile-energy-script-poket').css('display', 'none');
    $('.mobile-energy-script-poket2').css('display', 'block');
    $('.content-page-pokeballs').css('display', 'none');
});

$('.script-get-poket').click(function() {
    $('.mobile-energy-script-poket2').css('display', 'none');
    $('.mobile-energy-script-poket').css('display', 'block');
    $('.content-page-pokeballs').css('display', 'none');
});

$('.rty1').click(function() {
    $('.mobile-energy-script-poket2').css('display', 'none');
    $('.mobile-energy-script-poket').css('display', 'none');
    $('.content-page-pokeballs').css('display', 'block');
});

$('.rty3').click(function() {
    $('.mobile-energy-script-poket2').css('display', 'none');
    $('.mobile-energy-script-poket').css('display', 'none');
    $('.content-page-pokeballs').css('display', 'block');
});


jQuery(function($) {
    $('.table').footable();
});


$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});


$.datepicker._defaults.onAfterUpdate2 = null;
var datepicker__updateDatepicker2 = $.datepicker._updateDatepicker;
$.datepicker._updateDatepicker = function(inst) {
    datepicker__updateDatepicker2.call(this, inst);
    var onAfterUpdate2 = this._get(inst, 'onAfterUpdate2');
    if (onAfterUpdate2)
        onAfterUpdate2.apply((inst.input ? inst.input[0] : null),
            [(inst.input ? inst.input.val() : ''), inst]);
}
$(function() {
    var cur2 = -1,
        prv2 = -1;
    $('.jrange2 div')
        .datepicker({
            //numberOfMonths: 3,

            changeMonth: true,
            changeYear: true,

            beforeShowDay: function(date) {
                return [true, ((date.getTime() >= Math.min(prv2, cur2) && date.getTime() <= Math.max(prv2, cur2)) ? 'date-range-selected' : '')];
            },
            onSelect: function(dateText, inst) {
                var d1, d2;
                prv2 = cur2;
                cur2 = (new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay)).getTime();
                if (prv2 == -1 || prv2 == cur2) {
                    prv2 = cur2;
                    $('.jrange2 input').val(dateText);
                } else {
                    d1 = $.datepicker.formatDate('mm/dd/yy', new Date(Math.min(prv2, cur2)), {});
                    d2 = $.datepicker.formatDate('mm/dd/yy', new Date(Math.max(prv2, cur2)), {});
                    $('.jrange2 input').val(d1 + ' - ' + d2);
                }
            },
            onChangeMonthYear: function(year, month, inst) {
                //prv2 = cur2 = -1;
            },
            onAfterUpdate2: function(inst) {
                $('<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">Done</button>')
                    .appendTo($('.jrange2 div .ui-datepicker-buttonpane'))
                    .on('click', function() { $('.jrange2 div').hide(); });
            }
        })
        .position({
            my: 'left top',
            at: 'left bottom',
            of: $('.jrange2 input')
        })
        .hide();
    $('.jrange2 input').on('focus', function(e) {
        var v = this.value,
            d;
        try {
            if (v.indexOf(' - ') > -1) {
                d = v.split(' - ');
                prv2 = $.datepicker.parseDate('mm/dd/yy', d[0]).getTime();
                cur2 = $.datepicker.parseDate('mm/dd/yy', d[1]).getTime();
            } else if (v.length > 0) {
                prv2 = cur2 = $.datepicker.parseDate('mm/dd/yy', v).getTime();
            }
        } catch (e) {
            cur2 = prv2 = -1;
        }
        if (cur2 > -1)
            $('.jrange2 div').datepicker('setDate', new Date(cur2));
        $('.jrange2 div').datepicker('refresh').show();
    });
});


$(document).mouseup(function(e) {
    var container = $(".jrange2 .hasDatepicker");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});

$('.jrange2').on('click', function() {
    $('.jrange2 .hasDatepicker').css('display', 'block');
});



if ($(window).width() > 767) {



    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },




        title: {
            text: 'Your deposits and profit static'
        },



        xAxis: {
            categories: [
                'End date<br>31-01-2017',
                'End date<br>31-01-2017',
                'End date<br>31-01-2017',
                'End date<br>31-01-2017',
                'End date<br>31-01-2017',
                'End date<br>31-01-2017',
                'End date<br>31-01-2017',
                'End date<br>31-01-2017',
                'End date<br>31-01-2017',
                'End date<br>31-01-2017',
                'End date<br>31-01-2017',
                'End date<br>31-01-2017'
            ],
            labels: {
                rotation: 0
            },
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Sum in BTC'
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} BTC</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },

        exporting: { enabled: false },
        series: [{
            name: 'Deposit sum',
            color: '#2B908F',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'Earned profits',
            color: '#F45B5B',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'Withdrawted',
            color: '#90B1D8',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }]
    });


} else {






    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },




        title: {
            text: 'Your deposits and profit static'
        },



        xAxis: {
            categories: [
                'End date 31-01-2017',
                'End date 31-01-2017',
                'End date 31-01-2017',
                'End date 31-01-2017',
                'End date 31-01-2017',
                'End date 31-01-2017',
                'End date 31-01-2017',
                'End date 31-01-2017',
                'End date 31-01-2017',
                'End date 31-01-2017',
                'End date 31-01-2017',
                'End date 31-01-2017'
            ],

            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Sum in BTC'
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} BTC</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },

        exporting: { enabled: false },
        series: [{
            name: 'Deposit sum',
            color: '#2B908F',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'Earned profits',
            color: '#F45B5B',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'Withdrawted',
            color: '#90B1D8',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }]
    });




}