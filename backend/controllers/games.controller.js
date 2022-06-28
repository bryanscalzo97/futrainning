import * as GameModel from '../services/game.services.js'

function viewTeams (req, res) {
  GameModel.viewTeams()
    .then(function (teams) {
      if (teams) {
        res.status(200).json(teams)
      } else {
        res.status(404).json({ message: 'No se encontraron equipos' })
      }
    })
}

function viewGames (req, res) {
  GameModel.viewGames()
    .then(function (games) {
      if (games) {
        res.status(200).json(games)
      } else {
        res.status(404).json({ message: 'No se encontraron juegos' })
      }
    })
}

function newGame (req, res) {
  const locationGame = req.body
  GameModel.newGame(locationGame)
    .then(function (game) {
      res.status(200).json(game)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function removeGame (req, res) {
  const id = req.body._id
  GameModel.removeGame(id)
    .then(function (game) {
      res.status(200).json(game)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function viewOne (req, res) {
  const id = req.params.idGame
  GameModel.findByID(id)
    .then(function (game) {
      res.status(201).json(game)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function updateGame (req, res) {
  const newGame = req.body
  GameModel.updateGame(newGame)
    .then(function (game) {
      res.status(200).json(game)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

export default {
  viewTeams,
  viewGames,
  newGame,
  removeGame,
  viewOne,
  updateGame
}
