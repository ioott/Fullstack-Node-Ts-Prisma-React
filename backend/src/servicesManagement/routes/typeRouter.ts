// /* eslint-disable @typescript-eslint/no-misused-promises */
import * as express from 'express'
import * as controller from '../controllers/typeController'

const router = express.Router()

router.get('/', (req, res) => controller
.allTypes( req, res ))
router.get('/:id', (req, res) => controller
.findTypeById( req, res ));
router.post('/', (req, res) => controller
.createType ( req, res ))
router.put('/:id', (req, res) => controller
.updateType( req, res ))

export default router
