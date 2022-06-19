
import * as TemasModel from '../services/game.services.js'

function viewTeams (req, res) {
  TemasModel.viewTeams()
    .then(function (teams) {
      if (teams) {
        res.status(200).json(teams)
      } else {
        res.status(404).json({ message: 'No se encontraron equipos' })
      }
    })
}

export default {
  viewTeams
}
