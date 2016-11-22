requirejs(["knockout-module"], function (){
	requirejs(['knockout','jquery', 'knockout-jquery.period-selector'], function (ko,$) {
		var Model = function (){
			var today = new Date();
			this.sDate = ko.observable(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
			this.eDate = ko.observable(new Date(today.getFullYear()+9, today.getMonth(), today.getDate()));
			this.maxDate = new Date(today.getFullYear()+5, today.getMonth(), today.getDate());
			
		};
		var model = new Model();
		ko.applyBindings(model);
		$(document).on("period-selector.change", function (evt, date){
			console.log("Change to " + date.toString());
		})
		
	} );
});

