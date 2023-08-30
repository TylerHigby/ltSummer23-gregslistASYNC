import { AppState } from "../AppState.js"
import { House } from "../models/Houses.js"
import { api } from "./AxiosService.js"

class HousesService {
  async getHouses() {
    const response = await api.get('api/houses/')
    const mappedHouses = response.data.map(dataObj => new House(dataObj))
    // console.log(response.data)
    AppState.houses = mappedHouses
  }

  async createHouse(formData) {
    const res = await api.post('api/houses', formData)
    const newHouse = new House(res.data)
    AppState.houses.push(newHouse)
    AppState.emit('houses')
  }


}

export const housesService = new HousesService()

