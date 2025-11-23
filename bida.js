$(document).ready(function(){
	BIDA.init();           
});

BIDA = {

	init : function(){

		BIDA.setDefault();
		

		 $('#menu-daftarr-isi .col-md-6 ul li').each(function(){
            $(this).click(function(){
                link_back = '<a href="#daftar-isi" class="backButton"> <img src="'+URL_IMG_BACKBTN+'" width="40px" style="margin-top:-10px;"/> </a>';
                $('#title-data-bida').html(link_back+' '+$(this).html());
                $('#content-data-bida').html('');
                $('#daftar_bida_link').click();
                data_id = $(this).attr('rel');
                data = '';
                BIDA.showLoading();
                if(data_id!='grafiknikah_cart' && data_id!='mtaklim_cart' && data_id!='mtq_cart' && data_id!='simulasizakat_cart' && data_id!='simulasifaroidh_cart' && data_id!='penyuluh_cart' && data_id!='sakinah_cart' && data_id!='zakat_cart' && data_id!='penais_cart' && data_id!='waqaf_cart' && data_id!='urais_cart' && data_id!='sekretariat_cart' ){
                	BIDA.getData(data_id);
                }else{
                	data = $('#'+data_id).html();
                	$('#content-data-bida').html(data);
                	
                	$('.backButton').each(function(){
				 		$(this).click(function(){
				 			$('#daftar_isi_link').click();
				 		});
				 	});
				 	
                }

            });


        });
	},
	setDefault:function(){

		/* mnx = $('#sekretariat_cart').html();
         $('#content-data-bida').html(mnx);
         link_back = '<a href="#daftar-isi" class="backButton"> <img src="'+URL_IMG_BACKBTN+'" width="35px" /> </a>';
         $('#title-data-bida').html(link_back+' Struktur Organisasi Sekretariat');

         $('.backButton').each(function(){
		 		$(this).click(function(){
		 			$('#daftar_isi_link').click();
		 		});
		 });*/


	},
	initDataKua:function(){
		$('.detail_kua').each(function(){
        	$(this).click(function(){
        		//$('.div_detail_kua').hide();
        		id_div_open = $(this).attr('rel');
        		if($('#'+id_div_open).is(':visible')){
        			$('#'+id_div_open).slideUp('fast');
        		}else{
	        		$('#'+id_div_open).slideDown('fast');
	        	}
        	});
        });
	},
	showLoading : function(){
		html = '<div id="loadinger"><img src="'+URL_IMG_LOADING+'" /><br />Sedang Memproses</div>';
		$('#content-data-bida').html(html);
	},
	hideLoading : function(){
		$('#content-data-bida').html('');
	},
	getData : function(url,tahun,prov,city){
		tahun 	= typeof tahun 	== 'undefined'?TAHUN:tahun; 
		prov 	= typeof prov 	== 'undefined'?'':prov; 
		city 	= typeof city 	== 'undefined'?'':city; 
		url 	= typeof url 	== 'undefined'?'':url; 

		URL_DATA = BASE_URL+'site/'+url+'?tahun='+tahun+'&prov='+prov+'&city='+city;
		var request = $.ajax({
		  url	: URL_DATA,
		  type 	: "POST",
		  data 	: {},
		  dataType: "html"
		});
		 
		request.done(function( page ) {
		 	$('#content-data-bida').html(page);
		 	
		 	$('.backButton').each(function(){
		 		$(this).click(function(){
		 			$('#daftar_isi_link').click();
		 		});
		 	});
		});
		 
		request.fail(function( jqXHR, textStatus ) {
		  	alert('Error loading data, please press F5 for refresh page!');
		  	return false;
		});
	}
}
