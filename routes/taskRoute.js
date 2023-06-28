const {Router} = require('express');
const router = Router();

const { getTasks, saveTask, updateTask, deleteTask } = require('../controllers/TaskControllers');

router.get('/', (req,res)=>{
    res.send('Hii, welcome to CRUD server. <br><br>use /get to get list of tasks,<br>use /save to save tasks,<br>use /update:id to update tasks,<br>use /delete:id to delete tasks,');
}); 

router.get('/get', getTasks); 
router.post('/save', saveTask); 
router.put('/update:id', updateTask); 
router.delete('/delete:id', deleteTask); 

module.exports = router;