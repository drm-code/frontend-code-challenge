import client from '../../rest/client'
import { SET_VACANT_LIST } from '../types';

export const setVacantList = payload => ({
  type: SET_VACANT_LIST,
  payload
})

export const getVacantList = () => async (dispatch) => {
  const resource = await client.getVacantList()
  const vacants = resource.data.data.slice(0, 10).map(vacant => ({
    id: vacant._id.$id,
    sellPrice: vacant.advertisementPrice.sellPrice || null,
    image: vacant.advertisementAssets[0].advertisementThumbnails.inventory_m.url,
    baseRent: vacant.advertisementPrice.baseRent || null,
    title: vacant.title,
    rooms: vacant.realestateSummary.numberOfRooms,
    postalCode: vacant.realestateSummary.address.postalCode,
    city: vacant.realestateSummary.address.city
  }))
  dispatch(setVacantList(vacants))
}
