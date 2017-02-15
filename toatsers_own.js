// toster type:
//Success
//Warning
//Danger
//info
 var i=0;	
 

var container = new Array();
var id; 
;(function($, window, document, undefined) {  
"use strict";
 $.fn.extend({
        tosters: function(options) {
			$('.loading-gif').show();
			var plugin=$(this);
            var defaults = {
                type: 'tosters-info',
                text: 'messege here'
            };  
			
			options = $.extend(defaults, options);

var width=$( window ).width()/2;

var height=$( window ).height();	
if($( window ).width()<600)
{
	width=$( window ).width()
	}
			options.type = options.type.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});	
			
			
			
displayToaster(options.type,options.text);

function displayToaster(ty,txt)
{
	var classA;
	switch(ty)
	{
		case 'Success':
		classA='tosters-success';
		break;
		case 'Warning':
		classA='tosters-warning';
		break;
		case 'Danger':
		classA='tosters-danger';
		break;
		default:
		classA='tosters-info';
		break;
		}
			
			
			
			i++;
			 id='toater'+i;
			var $html="<div id='"+id+"' class='tosters "+classA+" tosters-dismissable'><a href='#' class='close' data-dismiss='alert' aria-label='close'>×</a><strong class='tosters-head'>"+ty+"!</strong><label class='tosters-body'>&ensp;"+txt+"</label></div>";
			$('body').append($html);
			$('.tosters').css({'width':width+"px"});
	}
		
		$('.tosters-dismissable .close').click(function(){
			$(this).closest('.tosters').remove();
			});
		container.push(id);
		container.forEach(function(items) {
    // do something with `item`

		setTimeout(function(){ 
		$('#'+items).fadeOut('slow');
		 }, 6000);});
		}
			});
		
		})(window.jQuery || window.Zepto, window, document);


var j = jQuery();