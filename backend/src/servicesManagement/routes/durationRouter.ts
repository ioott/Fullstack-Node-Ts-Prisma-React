/* eslint-disable @typescript-eslint/no-misused-promises */
import * as express from 'express'
import * as controller from '../controllers/durationController'

const router = express.Router()

router.get('/', (req, res) => controller
.allDurations( req, res ))
router.get('/:id', (req, res) => controller
.findDurationById( req, res ));
router.post('/', (req, res) => controller
.createDuration ( req, res ))
router.put('/:id', (req, res) => controller
.updateDuration( req, res ))

export default router
