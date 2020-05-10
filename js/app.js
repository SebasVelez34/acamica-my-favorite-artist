(function() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=David Guetta", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "f28f5f55b3msha27b48788d03224p18eae7jsncd6f685b2484"
	}
    })
    .then(response => {
        return response.json();
    })
    .then((data) => {
        console.log(data.data);
        appendSongs(data.data);
    })
    .catch(err => {
        console.log(err);
    });
 })();


 function appendSongs(data) {
    if( typeof data != "object" ) return false;
    let html = '';
    data.forEach(element => {
        html += `<div class="card shadow-2" style="background:url('${element.album.cover_big}')">
                    <div class="card-header">${element.title_short}</div>
                    <div class="card-body"></div>
                    <div class="card-footer">
                        <audio controls>
                            <source src="${element.preview}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>`;
        
    });
    document.querySelector('.container-cards').innerHTML += html;
    
 }