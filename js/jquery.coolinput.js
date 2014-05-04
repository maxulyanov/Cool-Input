(function($){
	jQuery.fn.coolinput = function(options){
		var defaults = {
			param : false,
		};

		options = $.extend(defaults, options);

		return this.each(function(){

			var divWrap = $('<div class="coolinput">');
			$(this).attr('placeholder', 'Введите текст');
			divWrap.append($(this));
			var inputElem = ('<div class="input-elem"></div>');
			divWrap.append(inputElem);

			divWrap.appendTo('body');


			
			$(this).keyup(function(){

  				var last = $(this).val();
  				last = last.slice(-1)
  				var l = $('<span>'+ last +'</span>');
  				console.log(l)
  				$('.input-elem').append(l);

  				var lastElem = $('.input-elem').find('span').last();

  				$(lastElem).animate({
  					top : '5px',
  				}, 100)
			});
 

		});

	};
})(jQuery)




