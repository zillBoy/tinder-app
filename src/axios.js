import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-backend-application.herokuapp.com"
})

export default instance