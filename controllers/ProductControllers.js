const ProductModel = require('../models/productModel');

module.exports.getProducts = async (req,res)=>{
    const task = await ProductModel.find();
    res.send(task);
};

// Saving Data
module.exports.saveProduct = (req,res)=>{
  console.log("Saving Product"+req.body)
    const product = req.body;
    const {product1} = product.gamelist[0];
    console.log("product.productid"+product.productid)
    console.log("product.gamelist[0].gameName"+product.gamelist[0])
    // console.log(product.productId)
    ProductModel.create(product).then((
      {
        "productid": product.productIid,
        "productAvailability": product.productAvailability,
        "accountpricevisibility": product.accountpricevisibility,
        "accountPrice": product.accountPrice,
        "primaryAccount": product.primaryAccount,
        "secondaryAccount": product.secondaryAccount,
        "isPsPlus": product.isPsPlus,
        "psplusExp1ry": product.psplusExp1ry,
        "isBooked": product.isBooked,
        "gamelist" : [
            {
                "gameName": "COD",
                "description": "new game",
                "imageLink": "https://th.bing.com/th/id/OIP.8fhuzecwhmiSCBz8jTQ3rwHaJQ?pid=ImgDet&w=1600&h=2000&rs=1",
                "ps4Game": true,
                "ps5Game": false
            }
        ]
      }
    ))};

// Updating data
module.exports.updateProduct = (req,res)=>{
    const {id} = req.params.parseInt();
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
// module.exports.deleteProduct = (req, res) => {
//     const { id } = req.params;
//     const idInString = id.toString()
//     console.log(id)
//     try {
//       ProductModel.deleteOne({ id: idInString }).then(() => {
//         res.send("Deleted successfully...");
//       }).catch((err) => {
//         console.log(err);
//         res.send({
//           error: err,
//           msg: "Something went wrong!"
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       res.send({
//         error: err,
//         msg: "Something went wrong!"
//       });
//     }
//   };

module.exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const idInString = id.toString()
  console.log(id)
  try {
    ProductModel.deleteOne({ productid: idInString }).then((ress) => {
      res.send("Deleted successfully..."+ress);
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
