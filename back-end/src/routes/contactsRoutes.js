const express = require("express");
const router = express.Router();

const {
    createContact,
    getContact,
    findContact,
    getAllContact
} = require('../controlador/contact.controlers');

router.use(express.json());

// Método GET para obtener todos los contactos
router.get('/', getAllContact);

// Método GET para obtener un contacto específico
router.get('/:id', getContact);

// Método GET para buscar contactos
router.get('/search', findContact);

// Método POST para crear un nuevo contacto
router.post('/', createContact);

module.exports = router;
