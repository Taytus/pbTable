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

//jQuery expression for case-insensitive filter
$.extend($.expr[":"], {
	"contains-ci": function(elem, i, match, array){
		return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	}
});

$(document).ready(function(){
	$('table.conFiltro').each(function(index, element){
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
	});
	
	$('input[search-in]').keyup(function(){
		filtrarTabla($(this), '');
	});
	
	$('.quickTag').click(function(){
		//var campoBusqueda = document.getElementById($(this).attr('input-search'));
		var campoBusqueda = $('#' + $(this).attr('input-search'));
		filtrarTabla(campoBusqueda, $(this).html());
	});
	
	//Toogle tr on click
	$('table.selectable>tbody>tr').css('cursor', 'pointer');
	$('table.selectable>tbody>tr').on('click', function(){
		$('table.selectable>tbody>tr').removeClass("warning");
		$(this).toggleClass("warning");
	});
});