pbTable
===========================

pbModal es un plugin para JQuery que permite agregar nuevas fucionalidad de las tablas HTML. Esta orientado a crar rapidamente una interfaz para ABMC y hacer busquedas.

Requiere JQuery 1.9+

## Installación

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
	<script src="pbTable.js"></script>


## Modo de uso
	$('#myTable').pbTable();

##Opciones por default
	$('#myTable').pbTable({
		selectable: true,
		sortable:true,
		toolbar:{
			enabled:true,
			filterBox:true,
			tags:[{display:'Todos', toSearch:''}],
			buttons:['view', 'edit', 'delete', 'new', 'print', 'receipt']
		}
	});

## Propiedades
<table width="100%">
<thead>
                        <tr>
                            <td>Property</td>
                            <td>Data</td>
                            <td>Default value</td>
                            <td>Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>selectable</td>
                            <td>Boolean</td>
                            <td>true</td>
                            <td>Indica si pueden seleccionarse las filas de la tabla</td>
                        </tr>
                        <tr>
                            <td>sortable</td>
                            <td>Boolean</td>
                            <td>true</td>
                            <td>Indica si pueden ordenarse las filas de la tabla</td>
                        </tr>
                        <tr>
                            <td>toolbar</td>
                            <td>Object</td>
                            <td>-</td>
                            <td>Contiene las propiedades de la barra superior de la tabla</td>
                        </tr>
                        <tr>
                            <td>toolbar.enabled</td>
                            <td>Boolean</td>
                            <td>true</td>
                            <td>Indica si la barra superior de la tabla esta visible</td>
                        </tr>
						<tr>
                            <td>toolbar.filterBox</td>
                            <td>Boolean</td>
                            <td>true</td>
                            <td>Indica si la barra superior contiene un cuadro de busquedas</td>
                        </tr>
						<tr>
                            <td>toolbar.tags</td>
                            <td>Array de Objetos</td>
                            <td>[{display:'Todos', toSearch:''}]</td>
                            <td>Contiene las propiedades de los tags rapidos del cuadro de busqueda</td>
                        </tr>
						<tr>
                            <td>toolbar.tags.display</td>
                            <td>String</td>
                            <td>-</td>
                            <td>Cadena a mostrar para para el tag correspondiente</td>
                        </tr>
						<tr>
                            <td>toolbar.tags.toSearch</td>
                            <td>String</td>
                            <td>-</td>
                            <td>Cadena a buscar para para el tag correspondiente</td>
                        </tr>
						<tr>
                            <td>toolbar.buttons</td>
                            <td>Array de Strings</td>
                            <td>['view', 'edit', 'delete', 'new', 'print', 'receipt']</td>
                            <td>Lista de botones que se mostraran en la barra superior</td>
                        </tr>
                   </tbody>
                </table>

## Callbacks

<table width="100%">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Description</td>
                        </tr>
                    </thead>    
                    <tbody>
                        <tr>
                            <td>onView</td>
                            <td>funcion. Se ejecuta al presionar el boton "Ver"</td>
                        </tr>
                        <tr>
                            <td>onEdit</td>
                            <td>funcion. Se ejecuta al presionar el boton "Editar"</td>
                        </tr>
						<tr>
                            <td>onDelete</td>
                            <td>funcion. Se ejecuta al presionar el boton "Delete"</td>
                        </tr>
						<tr>
                            <td>onNew</td>
                            <td>funcion. Se ejecuta al presionar el boton "Nuevo"</td>
                        </tr>
                        <tr>
                            <td>onPrint</td>
                           <td>funcion. Se ejecuta al presionar el boton "Imprimir"</td>
                        </tr>
						<tr>
                            <td>onReceipt</td>
                            <td>funcion. Se ejecuta al presionar el boton "Recibo"</td>
                        </tr>
                    </tbody>
                </table>

##Documentacion y ejemplos
	http://pieroblunda.github.io/pbTable/

## Navegadores compatibles
* Chrome 6+
* Firefox 4+
* Safari 5+
* Opera 11+
* Internet Explorer 9+

## Licencia
<a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/deed.es_ES"><img alt="Licencia de Creative Commons" style="border-width:0" src="http://i.creativecommons.org/l/by-nc/3.0/80x15.png" /></a><br />Este obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/deed.es_ES">licencia de Creative Commons Reconocimiento-NoComercial 3.0 Unported</a>.