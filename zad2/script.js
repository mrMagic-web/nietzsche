function countChecked () {
	var score = 0, selection = [];
	
	$('#form :checked').each(function() {
	   selection += $(this).val();
	   score += parseInt($(this).val());
	});
  	if(score < 3){
  		setProduct('p1');
  	}
 	if(score < 5 && score >= 3){
  		setProduct('p2');
  	}
  	if(score >= 5 && selection === '24'){
  		setProduct('p1');
  	}
  	if(score >= 5 && selection !== '24'){
  		setProduct('p3');
  	}

};

function setProduct(product){
	$('.output').text(eval('products.' + product + '.msg'));
	$(".product > header").removeClass();
	$(".product > header").addClass(product);
}

countChecked();
$( "input[type=checkbox]" ).on( "click", countChecked );