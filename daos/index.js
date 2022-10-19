const ProductosDAOMongoDB = require(`../daos/productos/ProductosDAOMongoDB`);
const CarritoDAOMongoDB = require(`../daos/carritos/CarritoDAOMongoDB`);
const OrdenesDAOMongoDB = require(`./ordenes/OrdenesDAOMongoDB`);
const MessagesDAOMongoDB = require(`../daos/mensajes/MessageDAOMongoDB`);

const getStorage = () => {
    //const storage = process.env.STORAGE;
    const storage = `MongoDb`; //Prueba: forzar variable para trabajar con la DB deseada.

    switch (storage) {

        case `MongoDB`:
            return {
                productos: new ProductosDAOMongoDB(),
                carrito: new CarritoDAOMongoDB(),
                ordenes: new OrdenesDAOMongoDB(),
                mensajes: new MessagesDAOMongoDB()
            }
            break

        default:
            return {
                productos: new ProductosDAOMongoDB(),
                carrito: new CarritoDAOMongoDB(),
                ordenes: new OrdenesDAOMongoDB(),
                mensajes: new MessagesDAOMongoDB()
            }
            break
    }
}

module.exports = getStorage;