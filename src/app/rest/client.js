import axios from 'axios'

import config from './config'

export default function getVacantList() {
  return axios.get(config.PUBLIC_API_URL)
}
