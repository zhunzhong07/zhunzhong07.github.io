// from: http://www.robots.ox.ac.uk/~vedaldi/assets/hidebib.js
function hideallbibs()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            var bib = el[i].getElementsByTagName("pre") ;
            if (bib.length > 0) {
                bib [0] .style.display = 'none' ;
            }
        }
    }
}

function togglebib(paperid)
{
    var paper = document.getElementById(paperid) ;
    var bib = paper.getElementsByTagName('pre') ;
    if (bib.length > 0) {
        if (bib [0] .style.display == 'none') {
            bib [0] .style.display = 'block' ;
        } else {
            bib [0] .style.display = 'none' ;
        }
    }
}

function hideallabs()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            var spans = el[i].getElementsByTagName("span") ;
            for (var j = 0; j < spans.length; ++j) {
                if (spans[j].className == "blurb") {
                  spans [j] .style.display = 'none' ;
                }
            }
        }
    }
}

function toggleabs(paperid)
{
    var el = document.getElementById(paperid) ;
    var abs = el.getElementsByTagName('span') ;
    if (abs.length > 0) {
        if (abs [0] .style.display == 'none') {
            abs [0] .style.display = 'block' ;
        } else {
            abs [0] .style.display = 'none' ;
        }
    }
}