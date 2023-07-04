const {Router} = require('express');
const router = Router();

const { getProducts, saveProduct, updateProduct, deleteProduct } = require('../controllers/ProductControllers');
const { getPurchase, savePurchase, updatePurchase, deletePurchase } = require('../controllers/PurchasesControllers');
const { login, signUp } = require('../controllers/AdminControllers');

router.get('/', (req,res)=>{
    res.send('Hii, welcome to CRUD server. <br><br>use /get to get list of tasks,<br>use /save to save tasks,<br>use /update:id to update tasks,<br>use /delete:id to delete tasks,');
}); 

router.get('/getProducts', getProducts); 
router.post('/saveProduct', saveProduct); 
router.put('/updateProduct/:id', updateProduct); 
router.delete('/deleteProduct/:id', deleteProduct); 

router.get('/getPurchase', getPurchase); 
router.post('/savePurchase', savePurchase); 
router.put('/updatePurchase/:id', updatePurchase); 
router.delete('/deletePurchase/:id', deletePurchase); 

router.get('/login', login); 
router.post('/signUp', signUp);

module.exports = router;