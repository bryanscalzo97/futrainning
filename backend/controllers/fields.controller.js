
import * as FieldsModel from '../services/field.services.js'

function viewFields (req, res) {
  return FieldsModel.viewFields()
    .then(function (fields) {
      if (fields) {
        res.status(200).json(fields)
      } else {
        res.status(404).json({ message: 'No se encontraron campos' })
      }
    })
}

function newField (req, res) {
  const dataField = req.body
  FieldsModel.newField(dataField)
    .then(function (field) {
      res.status(200).json(field)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function removeField (req, res) {
  const id = req.params.idField
  FieldsModel.removeField(id)
    .then(function (field) {
      res.status(200).json(field)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function viewOne (req, res) {
  const id = req.params.idField
  FieldsModel.findByID(id)
    .then(function (field) {
      res.status(201).json(field)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function updateField (req, res) {
  const dataField = req.body
  const id = req.params.idField
  FieldsModel.updateField(dataField, id)
    .then(function (field) {
      res.status(200).json(field)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}
export default {
  viewFields,
  newField,
  removeField,
  viewOne,
  updateField
}
