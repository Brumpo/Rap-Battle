$(document).ready(function(){
  let $init=$('#loginbutton');
  var id= '770aa5b1d69e46af8f9afff39037cfc0'
  var secret= '92ceab4daea24bf78badceddd8220eb1'
    $init.click(function(){
    // xhr= $.post('https://spoterfyproxy.herokuapp.com/api/token_grantype=client_credentials'
    // var xhr= $.post('https://spoterfyproxy.herokuapp.com/api/token')
    // var xhr = $.ajax({
      //  url :'https://spoterfyproxy.herokuapp.com/authorize/?client_id=770aa5b1d69e46af8f9afff39037cfc0&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000%2Fbattle%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09',
      //  method: 'GET'
     //(':92ceab4daea24bf78badceddd8220eb1')}
      // body: {grant_type:'client_credentials'}
    // })
        //url: 'https://spoterfyproxy.herokuapp.com/api/token',
        // method: 'POST',
        // form: {
        //   redirect_uri: 'http://localhost:3000',
        //   grant_type: 'authorization_code'
        // },
        // headers: {
        //   'Authorization': 'Basic ' + (TypedArray(id + ':' + secret).toString('base64'))
        // },
        // json: true
      //});
      //  var xhr = $.ajax({
        //  method: "POST",
        //  url: "https://spoterfyproxy.herokuapp.com/api/token",
        //  headers: {Authorization:' Basic ' + btoa('x770aa5b1d69e46af8f9afff39037cfc0:92ceab4daea24bf78badceddd8220eb1 ')},
        //  data: { grant_type: 'client_credentials' }
      //  })
      // })
  // });
    //   xhr.done(function(data){
    //     console.log('gucci',data)
    // })
    // $.getJSON('https://spoterfyproxy.herokuapp.com/').done(function(data){
      // console.log("Data",data);
    // })

  })
// });
// curl -X "POST" -H "Authorization: Basic 770aa5b1d69e46af8f9afff39037cfc0:92ceab4daea24bf78badceddd8220eb1" -d grant_type=client_credentials https://accounts.spotify.com/api/token
