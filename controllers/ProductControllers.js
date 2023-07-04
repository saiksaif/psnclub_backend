const ProductModel = require('../models/productModel');

module.exports.getProducts = async (req,res)=>{
    const task = await ProductModel.find();
    res.send(task);
};

// Saving Data
module.exports.saveProduct = (req,res)=>{
  console.log("Saving Product"+req.body)
    const product = req.body;
    console.log(product.productId)
    ProductModel.create(product).then((data)=>{
        console.log('Saved successfully...');
        res.status(201).send(data);
    }).catch((err)=>{
        console.log(err);
        res.send({
            error: err,
            msg: "Something went wrong!"
        });
    });
};

// Updating data
module.exports.updateProduct = (req,res)=>{
    const {id} = req.params;
    const {task} = req.body;

    productModel.findByIdAndUpdate(id, {task}).then(()=>{
        res.send("Updated successfully...")
    }).catch((err)=>{
        console.log(err);
        res.send({
            error: err,
            msg: "Something went wrong!"
        });
    });
};

// Delete data
// module.exports.deleteTask = (req,res)=>{
//     const {id} = req.params;

//     TaskModel.findByIdAndDelete(id).then(()=>{
//         res.send("Deleted successfully...")
//     }).catch((err)=>{
//         console.log(err);
//         res.send({
//             error: err,
//             msg: "Something went wrong!"
//         });
//     });
// };
// Delete data
module.exports.deleteProduct = (req, res) => {
    const { id } = req.params;
  
    try {
      ProductModel.findByIdAndDelete(id).then(() => {
        res.send("Deleted successfully...");
      }).catch((err) => {
        console.log(err);
        res.send({
          error: err,
          msg: "Something went wrong!"
        });
      });
    } catch (err) {
      console.log(err);
      res.send({
        error: err,
        msg: "Something went wrong!"
      });
    }
  };
  