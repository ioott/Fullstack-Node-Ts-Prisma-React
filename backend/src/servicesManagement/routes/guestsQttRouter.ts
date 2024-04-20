// /* eslint-disable @typescript-eslint/no-misused-promises */
import * as express from 'express'
import * as controller from '../controllers/guestsQttController'

const router = express.Router()

router.get('/', (req, res) => controller
.allGuestsQtt( req, res ))
router.get('/:id', (req, res) => controller
.findGuestsQttById( req, res ));
router.post('/', (req, res) => controller
.createGuestsQtt ( req, res ))
router.put('/:id', (req, res) => controller
.updateGuestsQtt( req, res ))

export default router
