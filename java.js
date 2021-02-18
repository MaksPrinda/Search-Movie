
function btn(){

    let inputSearch = document.getElementById('input-search').value
    $.ajax({
    url: "https://api.themoviedb.org/3/search/multi?api_key=552f5d9f72c42ea4e0e5df5ded013654&page=1&query=" + inputSearch,
    type: 'GET',
    dataType: 'json',
    success: function(res) {
        let vars = '';
        let path = "https://www.themoviedb.org/t/p/w94_and_h141_bestv2";

        // for (let i = 0; i < res.results.length; i++) {
        //     vars = vars + "<div class='uk-card uk-card-body uk-width-1-2@m movie'>" + "<h3 class='uk-card-title movie2'>" + res.results[i].original_title + "</h3>" + "<img src="+ path + res.results[i].poster_path + ">" + "<p>" + res.results[i].overview + "</p>" + "</div>" + "<hr>";
        // }

        res.results.forEach( r => {
            vars += "<div class='uk-card uk-card-body uk-width-1-2@m movie'>" + "<h3 class='uk-card-title movie2'>" + r.original_title + "</h3>" + "<img src="+ path + r.poster_path + ">" + "<p>" + r.overview + "</p>" + "</div>" + "<hr>";
        });
        $('#myId').html(vars);

    }
});
}

function btn2() {
    document.getElementById('myId').focus({preventScroll:false})
}

// focusScrollMethod = function getFocus() {
//     document.getElementById("myid").focus({preventScroll:false});
// }
