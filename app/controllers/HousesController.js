import { AppState } from "../AppState.js"
import { House } from "../models/Houses.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
  console.log('drawing houses')
  this.getHouses

}
export class HousesController {
  constructor() {
    // console.log('hello')
    this.getHouses()
    AppState.on('houses', _drawHouses())

  }
  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      pop.error(error.message)
    }
  }
}

