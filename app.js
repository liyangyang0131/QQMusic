var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static('public'));

var musics = [];
var fs = require('fs');
fs.readdir('./public/music',function(err,files){
	// console.log(files);  //输出所有img文件夹中的图片
	for(var i = 0;i<files.length;i++){
		musics.push(files[i]);
		// fs.stat('./public/music/'+files[i],(function(i){
		// 	return function(err,stats){
		// 		var key = stats.mtime.getFullYear()+'_'+stats.mtime.getMonth()+'_'+stats.mtime.getDate();
		// 		// console.log(key);
		// 		if( !musics[key] ){
		// 			musics[key] = [];
		// 		}
		// 		musics[key].push(files[i]);
		// 		// console.log(musics);
		// 	}
		// })(i));
	}
});

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});
app.get('/mymusic',function(req,res){
	res.json(musics);
});
http.listen(80,function(){
	console.log('listening on *:80');
});
