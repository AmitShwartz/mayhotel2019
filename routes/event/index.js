const router = require('express').Router();
const ctrl = require('../../controllers/hotel/event');
const auth = require('../../middleware/auth');

router.post('/', ctrl.addEvent );
router.post('/reservation', auth, ctrl.addReservation );

router.get('/one/:event_id', ctrl.getEvent );
router.get('/:hotel_id', ctrl.getByHotel );

router.delete('/:event_id', ctrl.deleteEvent );
router.delete('/reservation/:reservation_id', auth, ctrl.cancleReservation );

module.exports = router;