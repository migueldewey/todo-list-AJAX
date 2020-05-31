$(document).ready(function() {
// Mets ici ton code
$('.category-content').fadeOut(500).fadeIn(500);
hiden = false;
$('.category-title').click(function () {
	if (hiden === false){
		$('.category-content').hide();
		hiden = true;
	}
	else {
		$('.category-content').show();
		hiden = false;
	}
});
$('img[class="rounded-circle"]:eq(0)').addClass("avatar");
$('avatar').click(function () {
	$(this).fadeOut(500).fadeIn(500);

});
