/* eslint-disable @typescript-eslint/no-misused-promises */
import * as express from 'express'
import * as controller from './serviceManagementController'

const router = express.Router()

router.get('/', (req, res) => controller.allBuffets( req, res ))
router.get('/:id', (req, res) => controller.findBuffetById( req, res ));
router.post('/', (req, res) => controller.createBuffet ( req, res ))
router.put('/:id', (req, res) => controller.updateBuffet( req, res ))

export default router
