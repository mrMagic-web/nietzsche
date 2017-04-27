// console.log(products.product1)

var countChecked = function() {
  var n = $( "input:checked" );
  $( ".output" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
};
countChecked();
	$( "input[type=checkbox]" ).on( "click", countChecked );