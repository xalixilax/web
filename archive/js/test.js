$('[id^=\"btnRight\"]').click(function (e) {
    
    $(this).prev('select').find('option:selected').remove().appendTo('#isselect_code');
    
});

$('[id^=\"btnLeft\"]').click(function (e) {

    $(this).next('select').find('option:selected').remove().appendTo('#canselect_code');

});