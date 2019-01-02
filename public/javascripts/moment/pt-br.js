//! moment.js locale configuration
//! locale : brazilian portuguese (pt-br)
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var pt_br = moment.defineLocale('pt-br', {
        months : 'January_Feburary_March_April_May_June_July_Ausgust_September_Octpber_November_December'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Sun_2ª_3ª_4ª_5ª_6ª_Sat'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [at] HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [at] HH:mm'
        },
        calendar : {
            sameDay: '[Today at] LT',
            nextDay: '[Tommorow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Last] dddd [at] LT' : // Saturday + Sunday
                    '[Last] dddd [at] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : '%s ago',
            s : 'few seconds',
            m : 'one minute',
            mm : '%d minutes',
            h : 'one hour',
            hh : '%d hours',
            d : 'one day',
            dd : '%d days',
            M : 'one mounth',
            MM : '%d mounths',
            y : 'one year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}º/,
        ordinal : '%dº'
    });

    return pt_br;

}));