const PurchasesModel = require('../models/purchasesModel');

module.exports.getPurchase = async (req,res)=>{
    const task = await PurchasesModel.find();
    res.send(task);
};

// Saving Data
module.exports.savePurchase = (req,res)=>{
    const product = req.body;
    PurchasesModel.create(product).then((data)=>{
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
module.exports.updatePurchase = (req,res)=>{
    const {id} = req.params;
    const {task} = req.body;

    PurchasesModel.findByIdAndUpdate(id, {task}).then(()=>{
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
module.exports.deletePurchase = (req, res) => {
    const { id } = req.params;
  
    try {
        PurchasesModel.findByIdAndDelete(id).then(() => {
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
  