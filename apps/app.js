$(document).ready(function(){
	
	$('#search-term').submit(function(){
		var searchTerm = $('#query').val();
		
		getRequest(searchTerm);

		return false;
	});


});



var showResults = function(data){
	var myData;
	
	for (title in data.Search) {
		myData = data.Search[title].Title;
		$('#search-results').append(myData);
	}
}


var getRequest = function(searchTerm){
		
		var params = {
			s: searchTerm,
			r: 'json'
		};
		console.log(params);

		url = 'http://www.omdbapi.com';
		
		$.get(url, params, function(data){

			showResults(data);

		})
		
}