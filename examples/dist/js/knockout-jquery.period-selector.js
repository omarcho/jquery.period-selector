(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
	    // AMD
        
	    define(['knockout','jquery','vendors/jquery.period-selector'], function ( ko, $) {

	        return factory(ko, $, window, document);
	        
		} );
	}
	else {
		// Browser
		factory(ko, jQuery, window, document );
	}
}(function( ko, $, window, document, undefined ) {

    ko.bindingHandlers.periodSelector = {
        init: function (el, valueAccessor, allBindingsAccessor, viewModel) {
            ko.utils.domNodeDisposal.addDisposeCallback(el, function () {
                $(el).periodSelector('destroy');
            });

            var allBindings = allBindingsAccessor(),
                periodSelector = ko.utils.unwrapObservable(allBindings.periodSelector);
            $(el).periodSelector(periodSelector);
        },
        update: function (el, valueAccessor, allBindingsAccessor, viewModel) {
            var allBindings = allBindingsAccessor();
            
            
            if ("periodSelector" in allBindings) {
                var conf = ko.utils.unwrapObservable(allBindings.periodSelector);
                   
                $(el).periodSelector("value", ko.utils.unwrapObservable(conf.value));
            }
        }
    };
}));