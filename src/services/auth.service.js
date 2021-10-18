
class AuthService {
  logout() {
    FB.logout(function() {
      localStorage.removeItem('user')
    });
  }
}

export default new AuthService();
