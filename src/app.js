var valuetourl = function(val){
  let query = val.replace(/ /g,'_');
  query = query.toLowerCase();
  return query;
}
var kanyeAlbums = {
  the_college_dropout: 'http://i.imgur.com/X2ruUdL.jpg',
  late_registration:'http://lamusicblog.com/wp-content/uploads/2015/08/kanye-west-Late-Registration-cover.jpg',
  graduation:'http://cdn3.pitchfork.com/albums/10462/afa9da9d.jpg',
  heartbreak:'http://www.hypebeast.com/image/2008/11/kanye-west-808s-heartbreak-kaws-2.jpg',
  mbdtf : 'http://www.missinfo.tv/wp-content/uploads/2010/11/kanye-west-my-beautiful-dark-twisted-fantasy-album-cover-4.png',
  yeezus : 'https://qph.ec.quoracdn.net/main-qimg-0b4d3539b314fb898a95d424fe1af853',
  the_life_of_pablo : 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/17/11/kanye-26de4d2f26f82661.jpg',
  funzies :'https://media.giphy.com/media/51h03rLP33G5G/giphy.gif'
};
var getsprite = function(album){
  if(album==='the_college_dropout'){
    return kanyeAlbums.the_college_dropout;
  }else if(album==='late_registration'){
    return kanyeAlbums.late_registration;
  }else if(album==='graduation'){
    return kanyeAlbums.graduation;
  }else if(album==='808s_&amp;_heartbreak'){
    return kanyeAlbums.heartbreak;
  }else if(album==='my_beautiful_dark_twisted_fantasy'){
    return kanyeAlbums.mbdtf;
  }else if(album==='yeezus'){
    return kanyeAlbums.yeezus;
  }else if(album==='the_life_of_pablo'){
    return kanyeAlbums.the_life_of_pablo;
  }else{
    return kanyeAlbums.funzies;
  }
}
$(document).ready(function(){
  var $trackl = $('#track_left');
  var $trackr = $('#track_right');
  var $tracklbutton = $('#tracklsub');
  var $trackrbutton = $('#trackrsub');
  var $cardl = $('#cardl');
  var $cardr = $('#cardr');
  var $spritel = $('#spriteleft');
  var $spriter = $('#spriteright');
  var $namel = $('#nameleft');
  var $namer = $('#nameright');
  var $lyricl = $('#lyricl');
  var $lyricr = $('#lyricr');
  var $fight = $('#fight');
  var $form = $('form');
  var $winnerl = $('#winnerl');
  var $winnerr = $('#winnerr');
  var titlel= '';
  var titler= '';
  var lyricsl = '';
  var lyricsr = '';
  var winners = JSON.parse(localStorage.getItem('winners'))|| {};
  console.log(winners);
  // var convertobj = function(){
  //   let result = []
  //   for(let key in winners){
  //
  //   }
  // }
  var appendtables = function(){
    let ct=1;
    for(let key in winners){
      if(ct<6){
        $('<tr><td>' + (ct).toString() + '</td><td>' + key + '</td><td>' + winners[key] + '</td></tr>').appendTo('tbody');
        ct++
      }else{
        $('<tr><td>' + (ct).toString() + '</td><td>' + key + '</td><td>' + winners[key] + '</td></tr>').appendTo('#leaderboard');
        ct++
      }
    }
  }
  appendtables();
  var getcardl = function(){
    titlel = $trackl.val();
    let query = valuetourl(titlel)
    let album = ''
    let sprite = ''
    let xhr=$.getJSON('https://spoterfyproxy.herokuapp.com/api/track/'+query)
    xhr.done(function(data){
      lyricsl = data.lyrics;
      album = data.album;
      sprite = getsprite(album);
      $spritel[0].src = sprite;
      $namel[0].innerHTML=titlel;
      $cardl[0].style = 'display:block;';
    })
  }
  var getcardr = function(){
    titler = $trackr.val();
    let query = valuetourl(titler)
    let album = ''
    let sprite = ''
    let xhr=$.getJSON('https://spoterfyproxy.herokuapp.com/api/track/'+query)
    xhr.done(function(data){
      lyricsr = data.lyrics;
      album = data.album;
      sprite = getsprite(album);
      $spriter[0].src = sprite;
      $namer[0].innerHTML=titler;
      $cardr[0].style = 'display:block;';
      $fight[0].style = 'display:block;';
    })
  }
  var appendlyricsl = function(){
    $lyricl[0].innerHTML = lyricsl
    $lyricl[0].style = 'display:block;'
  }
  var appendlyricsr = function(){
    $lyricr[0].innerHTML = lyricsr
    $lyricr[0].style = 'display:block;'
  }
  var storewinnerr = function(e){
    let winct = winners[titler] || 0;
    winct++;
    winners[titler] = winct
    localStorage.setItem('winners',JSON.stringify(winners))
    alert('we made it');
    location.reload();
  }
  var storewinnerl = function(e){
    let winct = winners[titlel] || 0;
    winct++;
    winners[titlel] = winct
    localStorage.setItem(JSON.stringify(winners))
    alert('we made it');
    location.reload();
  }
  $tracklbutton.on('click',getcardl)
  $trackrbutton.on('click',getcardr)
  $fight.on('click', function(){
    $form[0].style = 'display:none;';
    $cardr[0].style = 'display:none;';
    $cardl[0].style = 'display:none;';
    $fight[0].style = 'display:none;';
    appendlyricsl();
    appendlyricsr();
    $winnerr[0].style = 'display:block;';
    $winnerl[0].style = 'display:block;';
  })
  $winnerr.on('click',storewinnerr);
  $winnerl.on('click',storewinnerl);
});
