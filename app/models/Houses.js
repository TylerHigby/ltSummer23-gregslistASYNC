import { AppState } from "../AppState.js"



export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId.id
    this.creator = data.creator.name
    this.creatorPicture = data.creator.picture
  }

  get HouseTemplate() {
    return /*html*/ `<div class="col-md-10 elevation-5 rounded my-2">
    <div class="row">
      <div class="col-md-4 p-0">
        <img class="img-fluid"
          src=${this.imgUrl}
          alt="Photo not found">
      </div>
      <div class="col-md-8">
        <h1 class="text-center">$${this.price}</h1>
        <p>${this.description}</p>
        
        <div class="d-flex justify-content-around">
          <span>Year:${this.year}</span>
          <span>Bedrooms:${this.bedrooms}</span>
          <span>bathrooms:${this.bathrooms}</span>

        </div>

        <div class="d-flex align-items-center">
        <img class="creator-img"
                    src=${this.creatorPicture}
                    alt="${this.creator}">
          <span>${this.creator}</span>
        </div>
        <div class="my-3 d-flex justify-content-between">
        </div>
      </div>
    </div>
  </div>`
  }


  static createHouseForm() {
    return /*html*/`<form class="row p-2" onsubmit="app.HousesController.createHouse()">

    <div class="form-floating mb-3 col-4">
      <input required type="text" minLength="3" maxLength="15" class="form-control" id="carMake" name="make"
        placeholder="Car Make">
      <label for="carMake">Car Make</label>
    </div>

    <div class="form-floating mb-3 col-4">
      <input required type="text" class="form-control" id="carModel" name="model" placeholder="Car Model">
      <label for="carModel">Car Model</label>
    </div>

    <div class="form-floating mb-3 col-4">
      <input required type="number" class="form-control" min="1950" id="carYear" name="year"
        placeholder="Car Year">
      <label for="carYear">Car Year</label>
    </div>

    <div class="form-floating mb-3 col-6">
      <input required type="number" class="form-control" max="10000000" id="carPrice" name="price"
        placeholder="Car Price">
      <label for="carPrice">Car Price</label>
    </div>

    <div class="form-floating mb-6 col-2">
      <select name="engineType" id="engineType">
        <option value="unknown">unknown</option>
        <option value="2 stroke">2 stroke</option>
        <option value="4 cylinder">4 cylinder</option>
        <option value="v6">v6</option>
        <option value="v8">v8</option>
        <option value="v10">v10</option>
        <option value="v12">v12</option>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
        <option value="chuncko">CHONK</option>
      </select>
    </div>

    <div class="form-floating mb-3 col-12">
      <input required type="text" class="form-control" id="carimgUrl" name="imgUrl"
        placeholder="Car imgUrl">
      <label for="carimgUrl">Car Image Url</label>
    </div>

    <div class="form-floating">
      <textarea required maxLength="144" class="form-control" placeholder="Please describe your car"
        name="description" id="carDescription" style="height: 100px"></textarea>
      <label for="carDescription">Car Description</label>
    </div>

   
    <div class="text-end">
      <button type="submit" class="btn btn-info">Create Listing</button>

    </div>
  </form>`
  }
}