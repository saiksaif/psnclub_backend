const {Router} = require('express');
const router = Router();

const { getProducts, saveProduct, updateProduct, updateGame, deleteProduct } = require('../controllers/ProductControllers');
const { getPurchase, savePurchase, updatePurchase, deletePurchase } = require('../controllers/PurchasesControllers');
const { login, signUp, getAdminInfo } = require('../controllers/AdminControllers');
const verifyToken = require('../controllers/middleware/authenticate');

router.get('/', (req,res)=>{
    res.send('Hii, welcome to CRUD server. <br><br>use /get to get list of tasks,<br>use /save to save tasks,<br>use /update:id to update tasks,<br>use /delete:id to delete tasks,');
}); 


router.get('/getProducts', getProducts); 
router.post('/saveProduct', verifyToken, saveProduct); 
router.put('/updateProduct/:id', verifyToken, updateProduct); 
router.put('/updateGame/:id', updateGame); 
router.delete('/deleteProduct/:id', deleteProduct); 

router.get('/getPurchase', verifyToken, getPurchase); 
router.post('/savePurchase', savePurchase); 
router.put('/updatePurchase/:id', updatePurchase); 
router.delete('/deletePurchase/:id', verifyToken, deletePurchase); 

router.post('/login', login); 
router.post('/signUp', signUp);
router.get('/getAdminInfo', getAdminInfo); 


module.exports = router;