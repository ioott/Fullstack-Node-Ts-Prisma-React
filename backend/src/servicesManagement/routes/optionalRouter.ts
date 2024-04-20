// /* eslint-disable @typescript-eslint/no-misused-promises */
import * as express from 'express'
import * as controller from '../controllers/optionalController'

const router = express.Router()

router.get('/', (req, res) => controller
.allOptional( req, res ))
router.get('/:id', (req, res) => controller
.findOptionalById( req, res ));
router.post('/', (req, res) => controller
.createOptional ( req, res ))
router.put('/:id', (req, res) => controller
.updateOptional( req, res ))

export default router
