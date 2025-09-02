const userMusicData = [
  {
    userId: "USER-001",
    userName: "Ramya Krishnan",
    listeningSessions: [
      {
        date: "2024-08-20",
        songsPlayed: [
          {
            songId: "SONG-101",
            artist: "S.P.Balasubrahmanyam",
            genre: "Classical",
            durationSeconds: 210,
          },
          {
            songId: "SONG-102",
            artist: "Sid Sriram",
            genre: "Melody",
            durationSeconds: 195,
          },
          {
            songId: "SONG-103",
            artist: "Armaan Malik",
            genre: "Pop",
            durationSeconds: 180,
          },
        ],
      },
      {
        date: "2024-08-21",
        songsPlayed: [
          {
            songId: "SONG-101",
            artist: "S.P.Balasubrahmanyam",
            genre: "Classical",
            durationSeconds: 210,
          },
          {
            songId: "SONG-104",
            artist: "Devi Sri Prasad",
            genre: "Dance",
            durationSeconds: 225,
          },
        ],
      },
    ],
  },
  {
    userId: "USER-002",
    userName: "Kiran Kumar",
    listeningSessions: [
      {
        date: "2024-08-20",
        songsPlayed: [
          {
            songId: "SONG-105",
            artist: "Thaman",
            genre: "Mass",
            durationSeconds: 200,
          },
          {
            songId: "SONG-106",
            artist: "Anirudh",
            genre: "Mass",
            durationSeconds: 240,
          },
        ],
      },
    ],
  },
];

//variables
let totalTime = 0;
let classical = 0;
let melody = 0;
let pop = 0;
let dance = 0;
let mass = 0;
let days = 0;
let indexVal = 0;
let activeUser = "";
let userIdNo = 0;
let totalsongs = 0;
let songVal = 0;
let songsArray = []
let totalTimeArray = [];


//functions to calculate listening time of user
function time(item){
  totalTime = totalTime+item.durationSeconds
  if(item.genre == "Classical"){
    classical++;
  }else if(item.genre == "Melody"){
    melody++;
  }else if(item.genre == "Pop"){
    pop++;
  }else if(item.genre == "Dance"){
    dance++;
  }else{
    mass++;
  }
  songVal++;
  return totalTime;
  
}
function play(list){
  let num = 0;
  list.map( item => {
      num=time(item)
  })
  return num;
}
function songs(song){
  let num = 0;
  num = num + play(song.songsPlayed)
  return num;
  
}
function sessions(session){
  let num = 0;
  session.map( music =>{
    num = songs(music)
  })
  return num;
}
function users(){
  userMusicData.map( (user,index) => {
    let num = 0;
    let val = user.listeningSessions;
    num = sessions(val);
    songsArray.push(songVal)
    totalTime = 0;
    songVal = 0;
    totalTimeArray.push(num)
    
    if(user.listeningSessions.length > days){
      days = user.listeningSessions.length;
      indexVal = index; 
      activeUser = user.userName;
      userIdNo = user.userId;
    }
  })
}
users();

//function to calculate total time
function totalTimeSum(timeArray){
  let sum = timeArray.reduce( (acc, cVal) => acc+cVal,0)
  return sum;
}

//function that analysyis the report
function makeListenerReport(){
    const appAnalysis = {
        totalUsers:userMusicData.length,
        totalListeningTimeSeconds: totalTimeSum(totalTimeArray),
        favoriteGenres:{
          Classical : classical,
          Melody : melody,
          Pop : pop,
          Dance : dance,
          Mass : mass
        },
        mostActiveUser:{
          userId : userIdNo,
          userName : activeUser,
          totalSongsPlayed : songsArray[indexVal],
          totalListeningTime : totalTimeArray[indexVal]
        }
    }
    console.log(appAnalysis);
    
}
makeListenerReport();