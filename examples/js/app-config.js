requirejs.config({
	deps:['js/example1'],
    baseUrl: './',
    paths: {
        "jquery": "libs/js/jquery-1.10.2.min",
        "jquery-ui": "libs/js/jquery-ui.min",
        "bootstrap": "libs/js/bootstrap",
		"knockout": "libs/js/knockout-3.3.0",
		"knockout-module":"dist/js/knockout-jquery.period-selector",
		"jquery-module":"dist/js/jquery.period-selector"
    },
    shim: {
        
    }
});