//创建Audio元素对象
var audioplayer = document.createElement("audio");
audioplayer.volume = 0.2;
var musicplayerautosave = 0;

//初始化歌曲列表
var playlists = [
    {
        name:"手毬の調べ",
        author:"松井洋平",
        url:"https://oss.acgme.cn/musicplayer/松井洋平 - 手毬の調べ.mp3"
    }
];

//初始化播放器状态
var playerstatus = {
    playnow: 0
};

//设置播放器句柄
var StatusHandle = setInterval(function(){
    playerOnPlay();
},1000);

//播放时执行的函数
function playerOnPlay(){
    playerstatus['playnow'] = Math.floor(Math.random() * playlists.length);
    //判断歌曲URL是否一致
    if(audioplayer.src !== encodeURI(playlists[playerstatus['playnow']]['url'])){
        audioplayer.src = encodeURI(playlists[playerstatus['playnow']]['url']);
    }
    //判断播放是否结束
    if(audioplayer.ended===true){
        playerstatus['playnow'] = Math.floor(Math.random() * playlists.length);
    }
    //判断播放器是否被暂停
    if(audioplayer.paused===true){
        audioplayer.play();
    }
}

//分割URL用的函数
function getMusicName(url){
    var urlarray = new Array();
    urlarray = url.split("/");
    var musicname = urlarray[urlarray.length-1].split(".")[0];
    return musicname;
}