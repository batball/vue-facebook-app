import axios from 'axios';

class ChangeService {
    async getImages(accessToken) {
        return await axios.get(process.env.VUE_APP_API_URL + '/get_all_user_photos.php?access_token=' + accessToken + '&limit=100')
    }

    async saveImages(accessToken, data) {
        return await axios.post(process.env.VUE_APP_API_URL + '/save_user_selected_photos.php?access_token=' + accessToken, data)
    }
}

export default new ChangeService()
