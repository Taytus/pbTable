(function($){
	$.fn.pbTable = function(options_user){
		var options_default = {
			selectable: true,
			inputID:null,
			createSearchBox:true,
			//tags:null
		}
		
		//herencia de las opciones definidasa por el usuario
		options = jQuery.extend(options_default, options_user);
		
		var myTable = $(this);
		
		//selectable
		if(options.selectable){
			$(this).children('tbody').css('cursor', 'pointer');
			$(this).children('tbody').children('tr').on('click', function(){
				myTable.children('tbody').children('tr').removeClass('warning');
				$(this).toggleClass('warning');
			});
		}
		
		/*
		if(options.tags!=null){
			var tagsButtons = '<div class="col-lg-8">'
			
			for (i=0; i<options.tags.length; i++){
				tagsButtons += '<button class="btn btn-link" input-search="'+$(this).attr('id')+'">'+options.tags[i]+'</button>'
			}
			
			tagsButtons += '</div>'
			console.log(tagsButtons);
		}
		*/
		
		//Creando un search-input
		if(options.createSearchBox){
			var colspan = $(this).children('tbody').children('tr:first').children('td').length;
			var idTablaMadre = $(this).attr('id');
			var thead = '<tr>'+
							'<th colspan="'+colspan+'">'+
								'<div class="row"><div class="col-lg-4">'+
									'<input type="text" class="form-control" search-in="'+idTablaMadre+'">'+
								'</div></div>'+
							'</th>'+
						'</tr>';
			
			if($(this).children('thead').length>0){
				//Si tiene cabecera
				$(this).children('thead').prepend(thead);
			}else{
				//Si no tiene cabecera
				thead = '<thead>'+thead+'</thead>'
				$(this).prepend(thead);
			}
		}
		
		//Con un input propio
		console.log(options.inputID);
		if(options.inputID!=null){
			console.log('#'+options.inputID);
			$('#'+options.inputID).attr('search-in', $(this).attr('id'));
		}
		
		//Funcion de busqueda
		if(options.inputID!=null || options.createSearchBox){
			$('input[search-in]').keyup(function(){
				filtrarTabla($(this), '');
			});
		}
	};
}(jQuery));

//jQuery expression for case-insensitive filter
$.extend($.expr[":"], {
	"contains-ci": function(elem, i, match, array){
		return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	}
});

function filtrarTabla(campoBusqueda, textoBusqueda){
	if(textoBusqueda != '')
		campoBusqueda.val(textoBusqueda);
	
	var miTabla = campoBusqueda.attr('search-in');
	if(campoBusqueda.val() === ''){
		$("#"+miTabla+" tbody>tr").show();
	}else{
		$("#"+miTabla+" tbody>tr").hide();
		$("#"+miTabla+" td:contains-ci('" + campoBusqueda.val() + "')").parent("tr").show();
	}
}