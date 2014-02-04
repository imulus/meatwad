( function($) {
    $.fn.meatwad = function() {
	var $this = $(this),
	    $input = $this.find('input'),
	    $button = $this.find('.submit');

	function bindSearchButton() {
	    $button.on('click.meatwad', function(e) {
		e.preventDefault();

		var $this = $(this);
		$input.addClass('open').focus();
		$this.unbind('click.meatwad');
	    });
	}
	bindSearchButton()

	$input.on('blur.meatwad', function() {
	    if ($button.is(':active')) return;

	    $input.removeClass('open')
	    bindSearchButton()
	});
    }
}( jQuery ));
