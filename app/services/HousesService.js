import { AppState } from "../AppState.js"
import { House } from "../models/Houses.js"
import { api } from "./AxiosService.js"


class HousesService {
  async getHouses() {
    const response = await api.get('api/houses')
    // const mappedHouses = response.data.map(dataObj => new House(dataObj))
    console.log(response)
    // AppState.houses = mappedHouses
  }
}

export const housesService = new HousesService()

