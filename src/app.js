var valuetourl = function(val){
  let query = val.replace(/ /g,'_');
  query = query.toLowerCase();
  return query;
}
var urltovalue = function(val){
  let query = val.replace(/_/g,' ');
  query = query.toUpperCase();
  return query;
}
var randomsongs = ['ultralight_beam',"father_stretch_my_hands,_pt._1","father_stretch_my_hands,_pt._2",'famous','feedback','low_lights','highlights','freestyle_4',
'i_love_kanye','waves', 'fml', 'real_friends', 'wolves', 'silver_surfer_intermission', '30_hours', 'no_more_parties_in_l.a.', 'facts_(charlie_heat_version)', 'fade',
'on_sight','black_skinhead', 'i_am_a_god', 'new_slaves', 'hold_my_liquor', "i'm_in_it",'blood_on_the_leaves','guilt_trip','send_it_up','bound_2',
'dark_fantasy','gorgeous','power','all_of_the_lights','monster','so_appalled','devil_in_a_new_dress','runaway','hell_of_a_life','blame_game','lost_in_the_world','who_will_survive_in_america',
'good_morning','champion','i_wonder','good_life','barry_bonds','drunk_&_hot_girls','flashing_lights','everything_i_am','the_glory','homecoming','big_brother','bittersweet_poetry',
'good_night','good_life','wake_up_mr._west',"heard_'em_say",'touch_the_sky','gold_digger','skit_number_1','drive_slow','my_way_home','crack_music','roses','bring_me_down','addiction','skit_number_2',
'diamonds_from_sierra_leone_(remix)','we_major','skit_number_3','hey_mama','celebration','skit_number_4','gone','diamonds_from_sierra_leone','late','we_can_make_it_better','diamonds_from_sierra_leone',
'touch_the_sky','crack_music','drive_slow',"heard_'em_say",'bring_me_down','gone','late','gold_digger','touch_the_sky','intro_(the_college_dropout)',"we_don't_care",'graduation_day','all_falls_down',
"i'll_fly_away",'spaceship','jesus_walks','never_let_me_down','get_em_high','workout_plan','the_new_workout_plan','slow_jamz','breathe_in,_breathe_out','school_spirit_skit_1','school_spirit',
'school_spirit_skit_2','2_words','through_the_wire','family_business','last_call','through_the_wire','workout_plan','all_falls_down']
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
var getrandom = function(){
  var random = randomsongs[Math.floor(Math.random()*randomsongs.length)];
  return random;
}
var convertobj= function(obj){
  var result = [];
  var sorter = [];
  for(var key in obj){
    sorter.push([key,obj[key]])
  }
  result = sorter.sort(function(a,b){
    return b[1]-a[1];
  })
  console.log(result);
  return result;
}
$(document).ready(function(){
  $('.materialboxed').materialbox();
  $(".button-collapse").sideNav();
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
  var $random = $('#random');
  var $randommobile = $('#mobilerandom');
  var $clear = $('#clear');
  var $clearmobile= $('#mobileclear');
  var $menuface = $('#menuface');
  var titlel= '';
  var titler= '';
  var lyricsl = '';
  var lyricsr = '';
  var winners = JSON.parse(localStorage.getItem('winners'))|| {};
  var winnerarray = convertobj(winners);
  var appendtables = function(){
    let ct=1;
    for(var i=0;i<winnerarray.length;i++){
      if(ct<6){
        $('<tr><td>' + (ct).toString() + '</td><td>' + winnerarray[i][0] + '</td><td>' + (winnerarray[i][1]).toString() + '</td></tr>').appendTo('tbody');
        ct++
      }else{
        $('<tr><td>' + (ct).toString() + '</td><td>' + winnerarray[i][0] + '</td><td>' + (winnerarray[i][1]).toString() + '</td></tr>').appendTo('#leaderboard');
        ct++
      }
    }
  }
  appendtables();
  var getcardl = function(){
    titlel = $trackl.val();
    let query = valuetourl(titlel)
    titlel = titlel.toUpperCase();
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
    xhr.fail(function(){
      swal("Whoops", "please enter a valid kanye joint", "error");
    })
  }
  var getcardr = function(){
    titler = $trackr.val();
    let query = valuetourl(titler)
    titler = titler.toUpperCase();
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
    })
    xhr.fail(function(){
      swal("Whoops", "please enter a valid kanye joint", "error");
    })
  }
  var randombattle = function(){
    titler = getrandom();
    titlel = getrandom();
    let xhl=$.getJSON('https://spoterfyproxy.herokuapp.com/api/track/'+titlel)
    xhl.done(function(data){
      let album = ''
      let sprite = ''
      titlel = urltovalue(titlel);
      lyricsl = data.lyrics;
      album = data.album;
      sprite = getsprite(album);
      $spritel[0].src = sprite;
      $namel[0].innerHTML=titlel;
      $cardl[0].style = 'display:block;';
    })
    xhl.fail(function(){
      alert('Something went wrong with the randomizer, please try again')
    })
    let xhr=$.getJSON('https://spoterfyproxy.herokuapp.com/api/track/'+titler)
    xhr.done(function(data){
      let album = ''
      let sprite = ''
      titler = urltovalue(titler);
      lyricsr = data.lyrics;
      album = data.album;
      sprite = getsprite(album);
      $spriter[0].src = sprite;
      $namer[0].innerHTML=titler;
      $cardr[0].style = 'display:block;';
    })
    xhr.fail(function(){
      alert('Something went wrong with the randomizer, please try again')
    })
  }
  var clear = function(e){
    e.preventDefault();
    localStorage.removeItem('winners');
    location.reload();
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
    winners[titler] = winct;
    localStorage.setItem('winners',JSON.stringify(winners));
    alert(titler + ' Wins!');
    location.reload();
  }
  var storewinnerl = function(e){
    let winct = winners[titlel] || 0;
    winct++;
    winners[titlel] = winct;
    localStorage.setItem('winners',JSON.stringify(winners));
    alert(`${titlel} Wins!`);
    location.reload();
  }
  $tracklbutton.on('click',getcardl)
  $trackrbutton.on('click',getcardr)
  $menuface.on('click',function(){
    $('.tap-target').tapTarget('open');
  })
  $random.on('click',randombattle)
  $randommobile.on('click',randombattle)
  $clear.on('click',clear)
  $clearmobile.on('click',clear)
  $fight.on('click', function(){
    $form[0].style = 'display:none;';
    $cardr[0].style = 'display:none;';
    $cardl[0].style = 'display:none;';
    $namel[0].style = 'display:none;';
    $namer[0].style = 'display:none;';
    $fight[0].style = 'display:none;';
    appendlyricsl();
    appendlyricsr();
    $winnerr[0].style = 'display:block;';
    $winnerl[0].style = 'display:block;';
  })
  $winnerr.on('click',storewinnerr);
  $winnerl.on('click',storewinnerl);
});
