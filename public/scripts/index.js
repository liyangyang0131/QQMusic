window.onload = function(){

	// console.log(audio.src);      //歌曲路径
	// audio.src = "./music/2.mp3";
	// audio.play();
	// console.log(audio.duration); //duration是以秒为单位的歌曲长度
	// console.log(audio.currentTime); //以秒为单位目前歌曲播放的长度
	// audio.currentTime = 45;
	// console.log(audio.volume);
	// audio.volume = 0;

	//四个属性：src duration currentTime volume
	//paused（是否处于暂停状态）  ended

	//play() pause()

	//事件都是小写字母
	// audio.play();
	// var kaiguan = true;
	// audio.ontimeupdate = function(){ //音乐播放的过程中
	// 	if(audio.ended){
	// 		alert(1);
	// 	}
	// 	if(kaiguan && audio.currentTime > 5){
	// 		audio.pause();
	// 		kaiguan = false;
	// 	    setTimeout(function(){
	// 				audio.play();
	// 			},2000);
	// 	}
		
	// }

	var play = document.getElementById('play');
	var tubiao = document.getElementById('tubiao');
	var jindutiao = document.getElementById('jindutiao');
	var changColor = document.getElementById('changColor'),
		circle = document.getElementById('circle'),
		bottom = document.getElementById('bottom'),
	    playerC = document.getElementById('player-current'),
		playerP = document.getElementById('player-process');
	var main = document.getElementById('main');
	var changKuang = document.getElementById('changKuang');
	var allAdd = document.getElementById('allAdd');

	
	var database = [];

	var currentList = null;
	var currentIndex;

	/*var ajax = function(o){
		var req = new XMLHttpRequest();
		req.open('get',o.url);
		req.send();
		req.onreadystatechange = function(){
			if(this.readyState == this.DONE && this.status == 200 ){
				o.success(this.response);
			}
		};
	};
	ajax({
		url:'http://localhost/mymusic',
		success:function(a){
			a = JSON.parse(a);
			// console.log(a);
			var el;
			var xiaoel;
			var add;
			for(var i = 0;i<a.length;i++){
				xiaokuang = document.createElement('div');
				xiaokuang.setAttribute('class','mymusic');
				el = document.createElement('div');
				el.setAttribute('class','information');
				el.innerHTML = a[i];
				changKuang.appendChild(xiaokuang);
				xiaokuang.appendChild(el);

				add = document.createElement('div');
				add.setAttribute('class','tianjia');
				xiaokuang.appendChild(add);
			}
			var mymusic = document.getElementsByClassName('mymusic');
			var tianjia = document.getElementsByClassName('tianjia');

			var dir = {}; 
			for(var i = 0;i<mymusic.length;i++){
				tianjia[i].index = i;
				tianjia[i].onclick = function(){
					if(!dir[a[this.index]]){
						var a1 = a[this.index].slice(a[this.index].indexOf('-')+1,a[this.index].lastIndexOf('.'));
						var a2 = a[this.index].slice(0,a[this.index].indexOf('-'));
						if(a1.length>20){
							a1 = a1.slice(0,20)+'...';
						}
						var div;
						div = document.createElement('div');
						div.setAttribute('class','list');
						// div.setAttribute('index',i);
						div.innerHTML = '<div class="Sname">'+a1+'</div><div class="Hname">'+a2+'</div><div class="hidden"> <div class="like"></div> <div class="share"></div> <div class="favo"></div> <div class="del" id="del"></div> <div class="clear"></div> </div>';
						dir[a[this.index]] = true;
						database.push({name:a1,geshou:a2,src:'./music/'+a[this.index]});
						main.appendChild(div);
						num.innerHTML = database.length;
						if(main.offsetHeight>mainDa.offsetHeight){
							mainDa.style.overflowY='scroll';
						}
					}
					
					var list = document.getElementsByClassName('list');
					for(i = 0;i<list.length;i++){
						list[i].index = i;
						list[i].onclick = function(){
							// this.setAttribute('jishu',this.index);
							currentIndex = this.index;
							// console.log(currentIndex);
							musicChange(currentIndex);
						}
						list[i].onmouseover = function(){
							var that = this;
							this.style.background = '#000';
							this.setAttribute('id','listchange2');
							this.firstElementChild.setAttribute('id','Snamechange2');
							var del = document.getElementById('del');
							del.onclick = function(){
								alert(1);
								// main.removeChild(that);
								// delete database[that];
								// console.log(database);
								// audio.pause();
							}
						}
						list[i].onmouseout = function(){
							this.style.background = 'none';
							this.removeAttribute('id','listchange2');
							this.firstElementChild.removeAttribute('id','Snamechange2');
						}
					}
				};
				tianjia[i].onmousedown = function(e){
					e.preventDefault();
				};
			}

			var OffSet = true;
			allAdd.onclick = function(){
				if(OffSet){
					for(var i = 0;i<a.length;i++){
						var div;
						var a1 = a[i].slice(a[i].indexOf('-')+1,a[i].lastIndexOf('.'));
						var a2 = a[i].slice(0,a[i].indexOf('-'));
						div = document.createElement('div');
						div.setAttribute('class','list');
						div.setAttribute('jishu',i);
						if(a1.length>20){
							a1 = a1.slice(0,20)+'...';
						}
						div.innerHTML = '<div class="Sname">'+a1+'</div><div class="Hname">'+a2+'</div><div class="hidden"> <div class="like"></div> <div class="share"></div> <div class="favo"></div> <div class="del" id="del"></div> <div class="clear"></div> </div>';
						// dirc[a[i]] = true;
						database.push({name:a1,geshou:a2,src:'./music/'+a[i]});
						main.appendChild(div);
						num.innerHTML = database.length;
						if(main.offsetHeight>mainDa.offsetHeight){
							mainDa.style.overflowY='scroll';
						}
					}
					OffSet = false;
				}
				var list = document.getElementsByClassName('list');
				for(i = 0;i<list.length;i++){
					list[i].onclick = function(){
						var index = Number(this.getAttribute('jishu'));
						currentIndex = index;
						musicChange(currentIndex);
					}
					list[i].onmouseover = function(){
						this.style.background = '#000';
						this.setAttribute('id','listchange2');
						this.firstElementChild.setAttribute('id','Snamechange2');
					}
					list[i].onmouseout = function(){
						this.style.background = 'none';
						this.removeAttribute('id','listchange2');
						this.firstElementChild.removeAttribute('id','Snamechange2');
					}
				}
			};

		}
	});*/

	
	var model = function(){
		if( play_bt.getAttribute('class')== 'size play_xunhuan'){
			next_next();
		}
		if( play_bt.getAttribute('class')== 'size play_order'){
			(currentIndex != database.length-1)?next_next():audio.pause();
		}
		if(play_bt.getAttribute('class')== 'size play_unorder'){
			var suijishu = Math.floor(Math.random()*database.length);
			currentIndex = suijishu;
			musicChange(currentIndex);
		}
		if(play_bt.getAttribute('class')== 'size play_single'){
			musicChange(currentIndex);
		}
	}

	var previous = Math.floor((changColor.offsetWidth/jindutiao.offsetWidth)*100)+'%';

	audio.onplay = function(){
		play1.setAttribute('class','size pause');
	}
	audio.onpause = function(){
		play1.setAttribute('class','size play');
	}
	audio.onvolumechange = function(){
		changColor.style.width= (this.volume*100)+'%';
		circle.style.left = (this.volume*100) +'%';
	}
	audio.onseeked = function(){
		var t = this.currentTime/this.duration;
		playerC.style.width= (t*100)+'%';
		playerP.style.left = (t*100)-0.5 +'%';
	}
	audio.ontimeupdate = function(){
		var t = this.currentTime/this.duration;
		playerC.style.width= (t*100)+'%';
		playerP.style.left = (t*100)-0.5 +'%';
		if(audio.ended){
			model();
		}
	}
	var kaiguan = true;
	play1.onclick = function(){
		if(audio.paused){
			audio.play();
			if(kaiguan){
				musicChange(0);
				currentIndex = 0;
				kaiguan = false;
			}	
		}else{
			audio.pause();
		}
	}
	tubiao.onclick = (function(){
		var previous;
		return function(){
			if(this.getAttribute('class') == 'tubiao' ){
				this.setAttribute('class','voiceClosed');
				previous = audio.volume;
				audio.volume = 0;

			}else{
				this.setAttribute('class','tubiao');
				audio.volume = previous;
			}
		}
	})();
	jindutiao.onclick = function(e){
		audio.volume = e.layerX/jindutiao.offsetWidth;
	}
	circle.onclick = function(e){
		e.stopPropagation();
	}
	circle.onmousedown = function(e){
		e.preventDefault();
		document.onmousemove = function(e){
			changColor.style.backgroundPosition = '-290px -22px';
			circle.style.backgroundPosition = '-366px -16px';
			var xx = e.clientX-jindutiao.getBoundingClientRect().left-circle.offsetWidth/2;
			if( xx <= 0){
				tubiao.style.background='url(/images/player.png) -189px -62px';
				audio.volume = 0;
			}
			if(xx >= jindutiao.offsetWidth){
				tubiao.style.background='url(/images/player.png) -189px -2px';
				audio.volume = 1;
			}
			if(xx>0 && xx<jindutiao.offsetWidth){
				tubiao.style.background='url(/images/player.png) -189px -2px';
				audio.volume = xx/jindutiao.offsetWidth;
			}
		}
	}
	circle.onmouseup = function(){
		changColor.style.backgroundPosition = '-290px 0';
		circle.style.backgroundPosition = '-366px 0';
		document.onmousemove = null;
	}
	bottom.onclick = function(e){
		audio.currentTime = e.layerX/bottom.offsetWidth * audio.duration;
	}
	bottom.onmouseover = function(e){
		document.onmousemove = function(e){
			if(database.length!=0){
				var xx = e.clientX;
				time_show.style.display='block';
				footer_sanjiao.style.display='block';
				time_show.style.left = xx-time_show.offsetWidth/2+'px';
				footer_sanjiao.style.left = xx-footer_sanjiao.offsetWidth/2+'px';
				xyz = xx/bottom.offsetWidth*audio.duration;
				var time = Math.round(xyz);
				var i = Math.floor(time/60);
				var j = time%60;
				if(j<10){
					time_show.innerHTML ='0'+i+':'+'0'+j;
				}
				else{
					time_show.innerHTML ='0'+i+':'+j;
				}
			}
		}
	}
	document.onmouseout = function(){
		time_show.style.display='none';
		footer_sanjiao.style.display='none';
		document.onmousemove = null;
	}
	playerP.onclick = function(e){
		e.stopPropagation();
	}
	playerP.onmousedown = function(e){
		e.preventDefault();
		// audio.pause();
		document.onmousemove = function(e){
			var xx = e.clientX;
			audio.currentTime = xx/bottom.offsetWidth*audio.duration;
			time_show.style.display='block';
			footer_sanjiao.style.display='block';
			time_show.style.left = xx-time_show.offsetWidth/2+'px';
			footer_sanjiao.style.left = xx-footer_sanjiao.offsetWidth/2+'px';
			var time = Math.round(audio.currentTime);
			// console.log(time);
			var i = Math.floor(time/60);
			var j = time%60;
			if(j<10){
				time_show.innerHTML ='0'+i+':'+'0'+j;
			}
			else{
				time_show.innerHTML ='0'+i+':'+j;
			}
		}
	}
	document.onmouseup = function(){
		// audio.play();
		time_show.style.display='none';
		footer_sanjiao.style.display='none';
		document.onmousemove = null;
	}


	 var database = [
	 	{name:'Stay Here Forever',geshou:'jewel',duration:'2:58',src:'./music/1.mp3'},
	 	{name:'煎熬(Live)',geshou:'李佳薇',duration:'4:49',src:'./music/2.mp3'},
	 	{name:'笑到流泪',geshou:'李佳薇',duration:'3:56',src:'./music/3.mp3'},
	 	{name:'只牵你的手',geshou:'李玖哲',duration:'4:16',src:'./music/4.mp3'},
	 	{name:'橘子汽水',geshou:'南拳妈妈',duration:'3:32',src:'./music/5.mp3'},
	 	{name:'咱们结婚吧(DJ版)',geshou:'齐晨',duration:'5:55',src:'./music/6.mp3'},
	 	{name:'我要的现在就要',geshou:'李易峰',duration:'4:38',src:'./music/7.mp3'},
	 	{name:'挚爱',geshou:'林志颖',duration:'4:16',src:'./music/8.mp3'},
	 	{name:'最好的未来',geshou:'刘若英',duration:'4:16',src:'./music/9.mp3'},
	 	{name:'残忍的缠绵',geshou:'刘忻',duration:'3:44',src:'./music/10.mp3'},
	 	{name:'那片海',geshou:'刘忻&韩承羽',duration:'3:52',src:'./music/11.mp3'}
	 	// {name:'左右(高清)',geshou:'欧豪',duration:'4:05',src:'./music/12.mp3'}
		
	 ];

	 var div;
	 for(var i = 0;i<database.length;i++){
	 	div = document.createElement('div');
	 	div.setAttribute('class','list');
	 	div.setAttribute('jishu',i);
	 	div.innerHTML = '<div class="Sname">'+database[i].name+'</div> <div class="Hname">'+database[i].geshou+'</div> <div class="time">'+database[i].duration+'</div> <div class="hidden"> <div class="like"></div> <div class="share"></div> <div class="favo"></div> <div class="del" id="del"></div> <div class="clear"></div> </div>';
	 	main.appendChild(div);
	 };

	var list = document.getElementsByClassName('list'),
		songName = document.getElementById('songName'),
		songWriter = document.getElementById('songWriter'),
		songTime = document.getElementById('songTime'),
		songEnjoy = document.getElementById('songEnjoy');

	var time = document.getElementById('time'),
		hidden = document.getElementById('hidden'),
		del = document.getElementById('del');

	 for(i = 0;i<list.length;i++){
	 	list[i].onclick = function(){
	 		var index = Number(this.getAttribute('jishu'));
	 		currentIndex = index;
	 		musicChange(index);
	 	}
	 	list[i].onmouseover = function(){
	 		this.style.background = '#000';
	 		this.setAttribute('id','listchange2');
	 		this.firstElementChild.setAttribute('id','Snamechange2');
	 	}
	 	list[i].onmouseout = function(){
	 		this.style.background = 'none';
	 		this.removeAttribute('id','listchange2');
	 		this.firstElementChild.removeAttribute('id','Snamechange2');
	 	}
	 }
	var musicChange  = function(count){
		audio.src = database[count].src;
		audio.play();
		if(currentList){
			currentList.setAttribute('class','list');
			currentList.firstElementChild.setAttribute('class','Sname');
		}
		list[count].setAttribute('class','list listchange');
		list[count].firstElementChild.setAttribute('class','Sname Snamechange');
		currentList=list[count];

		songTime.style.display = 'block';
		songEnjoy.style.display = 'block';
		if(database[count].name.length>15){
			database[count].name = database[count].name.slice(0,15)+'...';
		}
		songName.innerHTML = database[count].name;
		songWriter.innerHTML = database[count].geshou;
		// songTime.innerHTML = database[count].duration;
	}

	var prev = document.getElementById('prev');
	var next = document.getElementById('next');

	prev.onclick = function(){
		currentIndex -= 1;
		if(currentIndex == -1){
			currentIndex = database.length-1;
			musicChange(currentIndex);	
		}else{
			musicChange(currentIndex);
		}
		
	}

	var next_next = function(){
		currentIndex += 1;
		if(currentIndex == database.length){
			currentIndex = 0;
			musicChange(currentIndex);	
		}else{
			musicChange(currentIndex);
		}
	}
	next.onclick = function(){
		next_next();
	}


	var closeList = document.getElementById('closeList'),
		playing = document.getElementById('playing');
	var kaiguan = true;
	closeList.onclick = function(){
		playing.style.display = 'none';
		kaiguan = false;
	}
	var showList = document.getElementById('showList');
	showList.onclick = function(){	
		if(kaiguan){
			playing.style.display = 'none';
			kaiguan = false;
		}else{
			playing.style.display = 'block';
			kaiguan = true;
		}
	};
	showList.onmousedown = function(e){
		e.preventDefault();
	}
	
	//右边侧栏
	var solid = document.getElementById('solid'),
		sence = document.getElementById('sence');
	solid.onclick = (function(){
		var kaiguan = true;
		return function(){
			if(kaiguan){
				sence.style.display = 'none';
				this.setAttribute('class','solidgreen');
				kaiguan = false;
			}else{
				sence.style.display = 'block';
				this.setAttribute('class','solid');
				kaiguan = true;
			}
		}
	})();


	//歌词部分
	var rly = document.getElementById('rly'),
		rlyKuang = document.getElementById('rlyKuang');
	var kaiguan = true;
	rly.onclick = function(){
		if(kaiguan){
			rlyKuang.style.display = 'block';
			this.style.backgroundPosition = '-475px 0';
			kaiguan = false;
		}else{
			rlyKuang.style.display = 'none';
			this.style.backgroundPosition = '-452px 0';
			kaiguan = true;
		}
		
	}
	rly.onmousedown = function(e){
		e.preventDefault();
	}
	var closed = document.getElementById('closed');
	closed.onclick = function(){
		rlyKuang.style.display = 'none';
		rly.style.backgroundPosition = '-452px 0';
		kaiguan = true;
	}

	var weixin = document.getElementById('weixin'),
		kuang = document.getElementById('kuang');
	weixin.onmouseover = function(){
		kuang.style.display = 'block';
	}
	weixin.onmouseout = function(){
		kuang.style.display = 'none';
	}


	var play_bt = document.getElementById('play_bt');
		type = document.getElementById('type');
	var unorder = document.getElementById('unorder');
	var single = document.getElementById('single');
	var xunhuan = document.getElementById('xunhuan');
	play_bt.onclick = function(){
		this.style.display = 'none';
		type.style.display = 'block';
	}
	type.onclick = function(e){
		var el = e.target;
		this.style.display = 'none';
		play_bt.style.display = 'block';
		var count = el.getAttribute('class');
		// console.log(count);
		if(count == 'yiyang order'){
			play_bt.setAttribute('class','size play_order');
			var order = document.getElementById('order');
			type.removeChild(order);
			type.appendChild(order);

		}else if(count == 'yiyang unorder'){
			play_bt.setAttribute('class','size play_unorder');
			
			type.removeChild(unorder);
			type.appendChild(unorder);
		}else if(count == 'yiyang single'){
			play_bt.setAttribute('class','size play_single');
			type.removeChild(single);
			type.appendChild(single);
		}else{
			play_bt.setAttribute('class','size play_xunhuan');
		
			type.removeChild(xunhuan);
			type.appendChild(xunhuan);
		}
		console.log(play_bt.getAttribute('class'));
	};

	var num = document.getElementById('num');
	num.innerHTML = database.length;
	var clearAll = document.getElementById('clearAll');
	clearAll.onclick = function(){
		audio.pause();
		main.innerHTML = '';
		database.length = 0;
		num.innerHTML = database.length;

		songTime.style.display = 'none';
		songEnjoy.style.display = 'none';
		songName.innerHTML = '听你想听的歌曲!';
		songWriter.innerHTML = 'QQ音乐';

		audio.volume = jindutiao.offsetWidth/jindutiao.offsetWidth;
		audio.currentTime = 0;

		play_bt.setAttribute('class','size play_xunhuan');
	}


	// prev.onmouseover = function(){
	// 	prevSong.style.display = 'block';
	// }
	// prev.onmouseout = function(){
	// 	prevSong.style.display = 'none';
	// }
	// play.onmouseover = function(){
	// 	bofang.style.display = 'block';
	// }
	// play.onmouseout = function(){
	// 	bofang.style.display = 'none';
	// }
	// next.onmouseover = function(){
	// 	nextSong.style.display = 'block';
	// }
	// next.onmouseout = function(){
	// 	nextSong.style.display = 'none';
	// }
	
};