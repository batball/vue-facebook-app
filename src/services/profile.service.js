import axios from 'axios';

class ProfileService {
  async getImages(accessToken) {
    return await axios.get(process.env.VUE_APP_API_URL + '/get_user_photo.php?access_token=' + accessToken)
  }
}

export default new ProfileService()
