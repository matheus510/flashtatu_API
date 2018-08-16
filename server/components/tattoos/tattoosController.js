import TattooDAL from './tattoosDAL'

const tattoosDAL = new TattooDAL()

class TattooController {
  // Create Tattoo
  // Required: userName and hashedPassword
  createTattoo (req, res) {
    let reqTattoo = `${req.body.userName}:${req.body.hashedPassword}`

    // Wait for Tattoo to be successfully created and then return the Tattoo
    tattoosDAL.insertTattoo(reqTattoo).then((newTattoo) => {
      // Send result
      res.status(201).send(JSON.stringify(newTattoo))
    })
  }
  // Get Tattoo
  // Required:
  getTattoo (req, res) {
    res.send('200')
  }
  // Edit Tattoo
  // Required:
  editTattoo (req, res) {
    res.send('200')
  }
  // Delete Tattoo
  // Required:
  deleteTattoo (req, res) {
    res.send('200')
  }
}

export default TattooController
