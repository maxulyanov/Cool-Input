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


			var exe = '';

			$(this).keyup(function(){
  				var last = $(this).val();

  				var last2 = last.slice(-1)
  				exe +=last2;
  				var l = $('<span>'+ last2 +'</span>');

  				$('.input-elem').append(l);

  				var lastElem = $('.input-elem').find('span').last();

  				$(lastElem).animate({
  					top : '5px',
  				}, 100)

  				if(exe !== last){
  					exe = last;
  					var l2 = $('<span>'+ exe +'</span>');
  					$('.input-elem').find('span').remove();
  					$('.input-elem').append(l2);
  					console.log('if')
  				}
  				else{
  					console.log('else')
  				}
			});
 

		});

	};
})(jQuery)




