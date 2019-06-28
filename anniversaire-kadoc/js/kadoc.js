$(function() {
    
    var $prems = $('#prems');
    var $deuz = $('#deuz');
    var $troiz = $('#troiz');
    var $quat = $('#quat');
    var $kadoc = $('#kadoc');
    
    $prems.on('click', function() {
        $deuz.css({
            display : 'block',
            textAlign : 'center'
        });
    });
    
    $deuz.on('click', function() {
        $troiz.css({
            display : 'block',
            textAlign : 'center'
        });
    });
    
    $troiz.on('click', function() {
        $quat.css({
            display : 'block',
            textAlign : 'center'
        });
    });
    
    $quat.on('click', function() {
       $kadoc.css({
           display : 'block'
       });
        $('#kaudio')[0].play();
        $('body').css({
            backgroundImage : 'url(kadoc/kadoc2.jpg)'
        });
    });
});