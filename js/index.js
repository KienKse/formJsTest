(function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}
		var texto = JSON.stringify(( obj ), null, '\t');
		console.log(texto.replace(/\\n/g, ' | '));
		return JSON.stringify( obj );
	}

	// document.addEventListener( "DOMContentLoaded", function() {
	// 	var form = document.getElementById( "bugScout" );
	// 	var output = document.getElementById( "output" );
	// 	form.addEventListener( "submit", function( e ) {
	// 		e.preventDefault();
	// 		var json = toJSONString( this );
	// 		output.innerHTML = json;
	// 	}, false);

	// });

	/**
				window.alert("Preencha o campo " + elements[i].name);
					var campo = document.getElementsByName(elements[i].name);
					// console.log(campo[0].name);
					// console.log(campo[0].focus());
					campo[0].focus();
	 */

})();