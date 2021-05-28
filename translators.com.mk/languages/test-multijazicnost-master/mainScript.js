window.onload = initialize;

function initialize() {
    var $dropdown = $("#country_select");
    $.each(LanguageList, function(key, value) {
        $dropdown.
        append($("<option/>").
        val(key).
        text(value));
    });

    loadsLanguage("MK"); // which one to use first
}

function loadsLanguage(lang){
    /*fills all the span tags with class=lang pattern*/
    $('span[class^="lang"]').each(function(){
        var LangVar = (this.className).replace('lang-','');
        var Text = window[lang+"_TRANSLATION"][LangVar];
        $(this).text(Text);
    });
}
