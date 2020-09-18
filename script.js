window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}
$(function() {
		$('.sfeer').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});


function zoomIn(event) {
  var pre = document.getElementById("preview");
  pre.style.visibility = "visible";
  if ($('#menukaart').is(':hover')) {
        var img = document.getElementById("zoom1");
		pre.style.backgroundImage = "url('assets/images/FRISZ_Menu_A3_2020-2-1.png')";
    }
  if ($('#menukaart').is(':hover')){
		var img = document.getElementById("zoom2");
		pre.style.backgroundImage = "url('assets/images/FRISZ_Menu_A3_2020-2-1.png')";
  } 

}

function zoomOut() {
  var pre = document.getElementById("preview");
  pre.style.visibility = "hidden";
}