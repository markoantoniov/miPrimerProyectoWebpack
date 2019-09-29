var pp = "Hola caracola";
console.log(pp);

showJqueryText2 = function (_msg) {
    $('p#texto2').text(_msg);
    //jQuery('p#texto2').text(_msg);
};

pagina2 = {
    onLoadPage : function () {
        showJqueryText2('Pagina 2');
     }
};