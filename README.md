pbTable
===========================

pbModal es un plugin para JQuery que permite mejorar la fucionalidad de las tablas HTML. Permite buscar facilmente entre los campos de la tabla.

Requiere JQuery 1.9+

## Installación

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
	<script src="pbTable.js"></script>


## Modo de uso
	$('#myTable').pbTable();

##Opciones por default
	$('#myTable').pbTable({
		selectable: true,		//indica si una fila de la tabla puede ser seleccionada
		inputID:null,			//id del campo de busqueda
		createSearchBox:true	//indica si pbTable debe crear automaticamente un campo de busqueda
	});

## Navegadores compatibles
* Chrome 6+
* Firefox 4+
* Safari 5+
* Opera 11+
* Internet Explorer 9+

## Licencia
<a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/deed.es_ES"><img alt="Licencia de Creative Commons" style="border-width:0" src="http://i.creativecommons.org/l/by-nc/3.0/80x15.png" /></a><br />Este obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/deed.es_ES">licencia de Creative Commons Reconocimiento-NoComercial 3.0 Unported</a>.