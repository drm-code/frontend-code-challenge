import axios from 'axios'

import config from './config'

export default class client {
  static getVacantList() {
    return axios.get(config.PUBLIC_API_URL)
  }
}
