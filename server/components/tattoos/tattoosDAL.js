import Tattoo from './tattoosModel'

class TattooDAL {
  // Insert Tattoo Database Interactor
  // Required:
  async insertTattoo (reqTattoo) {
    const tattoo = new Tattoo({ tattoo: reqTattoo })
    try {
      let newTattoo = await tattoo.save()
      return newTattoo
    } catch (err) {
      return err
    }
  }
  // Get Tattoo Database Interactor
  // Required:
  getTattoo () {

  }

  // Edit Tattoo Database Interactor
  // Required:
  editTattoo () {

  }

  // Delete Tattoo Database Interactor
  // Required:
  deleteTattoo () {

  }
}

export default TattooDAL
