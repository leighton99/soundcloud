//soundcloud!!

	SC.initialize({
		client_id: "fd4e76fc67798bfa742089ed619084a6"
	});
	// console.log("initialize");


//get playlist

// SC.get("/playlists/4126213").then(function (player){
// 	console.log(player);
// 	player.play();
// }); 



var tracks = ['82235908', '69704083', '81772245']



//get one song

function Sound() {
	SC.stream('/tracks/' + tracks[0]).then(function(player){
		// console.log(player);
		player.play();
		// player.on('finish',function(){
		// 	Sound = 1;
		// });
	});
}


//play button

document.getElementById('playbtn').addEventListener('click', function(){
	Sound();
	artwork();
	songtitle();
})


//pause button

// document.getElementById('pausebtn').addEventListener('click', function(){
// 	Sound().pause();
// })

//stop button


// document.getElementById('stopbtn').addEventListener('click', function(){
// 	Sound().pause();
// 	Sound().seek(0);
// })

//next button

	var i = 1;

function next() {

	SC.stream( '/tracks/' + tracks[i]).then(function(player){
		console.log(player);
		player.play();
		i++;
	});

}

document.getElementById('nextbtn').addEventListener('click', function(){
	next();
});


//previous button


function previous() {

	SC.stream( '/tracks/' + tracks[i]).then(function(player){
		console.log(player);
		player.play();
		i--;
	});

}

document.getElementById('previousbtn').addEventListener('click', function(){
	previous();
});


//artwork
function artwork(){
SC.stream('/tracks/' + tracks[i]).then(function(player){
	document.getElementById('artwork').innerHTML = "<img src=" + tracks[i].artwork_url + ">";

})
};


//title
function songtitle(){
SC.stream('/tracks/' + tracks[i]).then(function(player){
	document.getElementById('title').innerHTML = tracks[i].title;

})
};



