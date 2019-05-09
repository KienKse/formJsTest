(function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select, textarea" );
			for( var i = 0; i < elements.length; ++i ) {
				console.log(elements[i].name);
				if( elements[i].value == "" ) {
					alert("TODO VERIFICAR");
					window.alert("Preencha o campo " + elements[i].name); 
					document.getElementsByName(elements.name).focus(); 
					return false; 
				}
			}
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;
			if( name ) {
				obj[ name ] = value;
			}
		}
		console.log(JSON.stringify(( obj ), null, '\t'));

		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "bugScout" );
		var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			output.innerHTML = json;
		}, false);

	});


})();