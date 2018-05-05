$(function () {
  $('#sub').click(function () {
    var checkValues = $('input[name=cbl]:checked').map(function() {
        return $(this).parent().text();
    }).get();
      alert(checkValues);
       $.ajax({
			url: '/register',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
  });
});
