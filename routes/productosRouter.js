const { Router } = require("express");

const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
  viewUpdateProduct
} = require("../controller/productosControllers");

const productosRouter = Router();

productosRouter.get(`/`, getAllProducts);
productosRouter.get(`/:id`, getProductById);
productosRouter.post(`/modificar`, viewUpdateProduct);
productosRouter.post(`/`, addProduct);
productosRouter.put(`/:id`, updateProductById);
productosRouter.delete(`/:id`, deleteProductById);

module.exports = productosRouter;