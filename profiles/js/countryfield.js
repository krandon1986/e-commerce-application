let countrySelected = $('#id_default_country').val();
if(!countrySelected) {
    $('#id_default_country').css('color', '#add7c4');
};
$('#id_default_country').change(function(){
    countrySelected = $(this).val();
    if(!countrySelected) {
        $(this).css('color', '#add7c4');
    } else {
        $(this).css('color', '#000');
    }
});     