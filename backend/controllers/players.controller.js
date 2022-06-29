import * as PlayerModel from '../services/player.services.js'

function newPlayer (req, res) {
  const playerInfo = req.body
  console.log(playerInfo)
  PlayerModel.newPlayer(playerInfo)
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
