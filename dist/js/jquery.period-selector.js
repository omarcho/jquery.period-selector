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
        destroy: function () {

        }
    });
     
}));