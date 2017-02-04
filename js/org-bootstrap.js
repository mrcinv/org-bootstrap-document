function panelDiv (col) {
    return "<div class=\"panel-heading\""
        + "data-toggle=\"collapse\""
        + "data-target=\"#col" + col
        + "\">Løsningsforslag</div>";
}

function panelCollapse(col) {
    return "<div id=\"col" + col
        + "\" class=\"panel-body "
        + "panel-collapse collapse\"></div>";
}

$( document ).ready(function() {

    // Enable sticky toc
    $('body').attr("data-spy", "scroll");
    $('body').attr("data-target", "#table-of-contents");

    // The content (and postamble) should be in a container.
    $('#content, #postamble').wrapAll("<div class='container'></div>");

    // 
    $('#table-of-contents, .outline-2').wrapAll("<div class='row'></div>");
    $('#table-of-contents').wrap("<div class='col-md-3'></div>");
    $('.outline-2').wrapAll("<div class='col-md-9'></div>");
    $('.outline-5').addClass('panel panel-success');
    $('.outline-text-5').addClass('panel-body collapse');
    $('.outline-5 h5').wrap("<div class='panel-heading'></div>");
    $('.panel-heading').attr("data-toggle","collapse");
    $('.panel-heading').attr("role","button");
    $('.outline-text-5').each(function(idx,elt){
        $( elt ).prev('.panel-heading').attr("href","#"+$(elt).attr('id'));
    });
    $('.col-md-9').after( $('.col-md-3') );
    $('#table-of-contents').empty();
    $('#table-of-contents').addClass('nav-list');

    $('#footnotes').appendTo('.col-md-9');

    var toc = $("#table-of-contents").tocify({
        selectors: "h2, h3"}).data("toc-tocify");

    toc.setOptions({ showEffectSpeed: "fast", hideEffectSpeed: "fast",
                     extendPage: false, theme: "none"});

    $('#table-of-contents').affix({

        offset: {
            top: 10,
            bottom: 5
        }
    });

    table = $('table').first().addClass("table").parent().addClass("panel");
});
