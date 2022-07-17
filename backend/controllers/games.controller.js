
import * as GameModel from '../services/game.services.js'

function viewGames (req, res) {
  return GameModel.viewGames()
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
  const id = req.params.idGame

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
  const id = req.params.idGame
  // console.log(newGame)
  GameModel.updateGame(newGame, id)
    .then(function (game) {
      res.status(200).json(game)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

export default {
  viewGames,
  newGame,
  removeGame,
  viewOne,
  updateGame
}
