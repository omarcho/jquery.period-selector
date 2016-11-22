(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
	    // AMD
        
	    define(["period-selector","jquery", "jquery-ui"], function (PeriodSelector, $) {
	        return factory(PeriodSelector, $, window, document);
	        
		} );
	}
	else {
		// Browser
		factory(PeriodSelector, jQuery, window, document );
	}
}(function( PeriodSelector, $, window, document, undefined ) {

    $.widget("custom.periodSelector",{
        period: null,
        _create: function (data) { 
            this.period = new PeriodSelector(this.options);
            this.element.append(this.period.ui);
        },
		value: function (date) {
            this.period.setDate(date);
        },
        minDate: function (date) {
            this.period.setOptions({ "minDate": date });
           
        },
        maxDate: function (date) {
            this.period.setOptions({ "maxDate": date });
            
        },
        change: function (func) {
            this.period.setOptions({ "change": func });
        },
        dispatchChange: function () {
            this.period.dispatchChange();
        },
        updateDate: function (mode) {
            this.period.updateDate(mode);
        },
        destroy: function () {

        }
    });
     
}));