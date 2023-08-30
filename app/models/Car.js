import { AppState } from "../AppState.js"

export class Car {
  constructor(data) {
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.engineType = data.engineType
    // this.creator = data.creator
    // NOTE: this is reffered as 'flattening' out a data object
    // NOTE: we are 'adapting' the data object properties into our own property on our class
    this.creatorId = data.creator.id
    this.creatorName = data.creator.name
    this.creatorPicture = data.creator.picture
  }

  // NOTE statics only exist as members of the class
  // NOTE getters exist on INSTANCES of the class

  // NOTE Car.CardTemplate ❌❌
  // NOTE new Car().CardTemplate ✅✅
  get CardTemplate() {
    return /*html*/`       <div class="col-md-10 elevation-5 rounded my-2">
            <div class="row">
              <div class="col-md-4 p-0">
                <img class="img-fluid"
                  src=${this.imgUrl}
                  alt="${this.make} ${this.model}">
              </div>
              <div class="col-md-8">
                <h1 class="text-center">${this.year} ${this.make} ${this.model}</h1>
                <div class="d-flex justify-content-around">
                  <span>Price: $${this.price}</span>
                  <span>Engine Type: ${this.engineType}</span>
                </div>
                <p>${this.description}</p>
                <div class="d-flex align-items-center">
                  <img class="creator-img"
                    src=${this.creatorPicture}
                    alt="${this.creatorName}">
                  <span>${this.creatorName}</span>
                </div>
                <div class="my-3 d-flex justify-content-between">
                ${this.ComputeEditButton}
                ${this.ComputeDeleteButton}
                </div>
              </div>
            </div>
          </div>`
  }


  // NOTE statics only exist as members of the class
  // NOTE getters exist on INSTANCES of the class

  // NOTE Car.CreateCarForm() ✅✅
  // NOTE new Car().CreateCarForm() ❌❌

  static CreateCarForm() {
    return ` <form class="row p-2" onsubmit="app.CarsController.createCar()">

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

  get EditCarForm() {
    return ` <form class="row p-2" onsubmit="app.CarsController.editCar('${this.id}')">

                <div class="form-floating mb-3 col-4">
                  <input required type="text" minLength="3" maxLength="15" class="form-control" id="carMake" name="make"
                    placeholder="Car Make" value="${this.make}">
                  <label for="carMake">Car Make</label>
                </div>

                <div class="form-floating mb-3 col-4">
                  <input required type="text" class="form-control" id="carModel" name="model" placeholder="Car Model" value="${this.model}">
                  <label for="carModel">Car Model</label>
                </div>

                <div class="form-floating mb-3 col-4">
                  <input required type="number" class="form-control" min="1950" id="carYear" name="year"
                    placeholder="Car Year" value="${this.year}">
                  <label for="carYear">Car Year</label>
                </div>

                <div class="form-floating mb-3 col-6">
                  <input required type="number" class="form-control" max="10000000" id="carPrice" name="price"
                    placeholder="Car Price" value="${this.price}">
                  <label for="carPrice">Car Price</label>
                </div>

                <div class="form-floating mb-6 col-2">
                  <select name="engineType" id="engineType">
                    <option value="${this.engineType}">${this.engineType}</option>
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
                    placeholder="Car imgUrl" value="${this.imgUrl}">
                  <label for="carimgUrl">Car Image Url</label>
                </div>

                <div class="form-floating">
                  <textarea required maxLength="144" class="form-control" placeholder="Please describe your car"
                    name="description" id="carDescription" style="height: 100px">${this.description}</textarea>
                  <label for="carDescription">Car Description</label>
                </div>

               
                <div class="text-end">
                  <button type="submit" class="btn btn-info">Edit Listing</button>

                </div>
              </form>`
  }

  get ComputeEditButton() {
    // NOTE check to see if there is an account logged in, if there is, are they the creator?
    if (AppState.account == null || AppState.account.id != this.creatorId) return ''

    return `<button class="btn btn-primary" onclick="app.CarsController.setActive('${this.id}')">Edit Car ✏️</button>`
  }

  get ComputeDeleteButton() {
    if (AppState.account == null || AppState.account.id != this.creatorId) return ''
    return `<button class="btn btn-danger" onclick="app.CarsController.deleteCar('${this.id}')" >Delete Car 🚨</button>`
  }

}

