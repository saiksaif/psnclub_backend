const TaskModel = require('../models/TaskModel');

module.exports.getTasks = async (req,res)=>{
    const task = await TaskModel.find();
    res.send(task);
};

// Saving Data
module.exports.saveTask = (req,res)=>{
    const {task} = req.body;

    TaskModel.create({task}).then((data)=>{
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
module.exports.updateTask = (req,res)=>{
    const {id} = req.params;
    const {task} = req.body;

    TaskModel.findByIdAndUpdate(id, {task}).then(()=>{
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
module.exports.deleteTask = (req,res)=>{
    const {id} = req.params;

    TaskModel.findByIdAndDelete(id).then(()=>{
        res.send("Deleted successfully...")
    }).catch((err)=>{
        console.log(err);
        res.send({
            error: err,
            msg: "Something went wrong!"
        });
    });
};