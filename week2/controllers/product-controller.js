const products = ["Smast TV", "Mobile Phone"];

const getData = async (req, res) => {
  return res.json({ products: products });
};

const addProduct = async (req, res) => {
  
  products.push(req.body.product);
  return res.json({ products: products });
};

exports.getData = getData;
exports.addProduct = addProduct;
