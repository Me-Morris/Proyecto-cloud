// contact.controlers.js
let contacts = [

    { nombre: "Juan", numero: "123456789" },
    { nombre: "Pedro", numero: "987654321" },
    { nombre: "Maria", numero: "456789123" },
    { nombre: "Ana", numero: "654321987" }


]; // Almacena contactos en memoria temporal

const createContact = async (req, res) => {
    try {
        const { nombre, numero } = req.body;
        contacts.push({ nombre, numero }); // Agrega contacto al array
        res.status(201).send({
            status: "se creo correctamente",
            message: "Contacto creado correctamente"
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: "NO SE CREÓ EL CONTACTO",
            message: "CONTACTO NO CREADO",
            error: error
        });
    }
};

// Método para obtener todos los contactos
const getAllContact = async (req, res) => {
    try {


        if (req.query.nombre) {
            const contact = contacts.find(contact => contact.nombre.toUpperCase() === req.query.nombre.toUpperCase());
            if (contact) {
                return res.status(200).send({
                    status: "OK",
                    message: "Obtenido correctamente",
                    data: [contact]
                });
            } else {
                return res.status(404).send({
                    status: "ERROR",
                    message: "Contacto no encontrado"
                });
            }
        }
        return res.status(200).send({
            status: "OK",
            message: "Obtenido correctamente",
            data: contacts // Retorna la lista de contactos
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "ERROR",
            message: "Error al obtener contactos",
            error: error
        });
    }
};


const getContact = async (req,res)=>{
    // que hace??
}



const findContact = async (req,res)=>{
    
    // que hace???
};

// Otros métodos siguen igual...

module.exports = {
    createContact,
    getContact,
    findContact,
    getAllContact
};
