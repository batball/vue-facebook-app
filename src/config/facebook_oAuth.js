export const initFbsdk = () => {
  return new Promise(resolve => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: 280117127304371,
        cookie: true,
        xfbml: true,
        version: 'v8.0',
        scope:'user_photos'
      });

      FB.getLoginStatus(({ authResponse }) => {
        if (authResponse) {
          resolve();
        } else {
          resolve();
        }
      });
    }(function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s); js.id = id
      js.src = 'https://connect.facebook.net/en_US/all.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
  })
}

