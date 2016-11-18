$(document).ready(function() {

	var Model = function (){
		var today = new Date();
		this.sDate = ko.observable(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
		this.eDate = ko.observable(new Date());
		this.maxDate = new Date(today.getFullYear()+5, today.getMonth(), today.getDate());
	};
	ko.applyBindings(new Model());

} );
