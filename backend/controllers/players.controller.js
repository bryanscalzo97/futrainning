import * as PlayerModel from '../services/player.services.js'

function newPlayer (req, res) {
  const playerInfo = req.body
  const id = req.params.idGame
  // console.log(playerInfo)
  PlayerModel.newPlayer(playerInfo, id)
    .then(function (player) {
      res.status(200).json(player)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

export default {
  newPlayer
}
