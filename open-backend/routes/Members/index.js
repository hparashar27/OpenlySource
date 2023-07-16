const router = require('express').Router()
const memberController = require('../../controllers/Members/members')

router.post('/members', memberController.add)
router.get('/members', memberController.getallmembers)
router.put('/members/:id',memberController.update);
router.delete('/members/:id',memberController.delete);
module.exports = router