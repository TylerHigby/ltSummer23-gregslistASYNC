import { AppState } from "../AppState.js"
import { House } from "../models/Houses.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
  // console.log('drawing houses')
  let template = ''
  AppState.houses.forEach(house => template += house.HouseTemplate)
  setHTML('houses', template)
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


  async createHouse() {
    window.event.preventDefault()
    const form = window.event.target
    const formData = getFormData(form)
    await housesService.createHouse(formData)
    console.log('create')
    form.reset()
  } catch(error) {
    Pop.error(error.message)
  }


}

