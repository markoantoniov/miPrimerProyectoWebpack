var pp = "Hola caracola";
console.log(pp);

showJqueryText1 = function (_msg) {
    $('p#texto1').text(_msg);
    //jQuery('p#texto2').text(_msg);
};

pagina1 = {
    onLoadPage : function () {
        showJqueryText1('Pagina 1');
     }
};