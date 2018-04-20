var express = require('express');
var router = express.Router();

/* GET All booking. */
router.get('/getAllBooking', function(req, res, next) {
	connection.query('SELECT bookingID, UID, substr(bookingdate, 1, 10) bookingdate, bookingstarttime, bookingattendance, bookingstatus from booking', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});


/* GET booking by User ID. */
router.get('/getBooking', function(req, res, next) {
	connection.query('SELECT bookingID, UID, substr(bookingdate, 1, 10) bookingdate, bookingstarttime, bookingattendance, bookingstatus from booking where uid = ?', [req.query.uid], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* GET booking by date. */
router.get('/getBookingByDate', function(req, res, next) {
	connection.query('SELECT bookingID, UID, substr(bookingdate, 1, 10) bookingdate, bookingstarttime, bookingattendance, bookingstatus from booking where bookingdate = ? order by bookingstarttime', [req.query.bookingdate], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* Create booking. */
router.get('/insBooking', function(req, res, next) {
	connection.query('insert into booking (`UID`, `bookingdate`, `bookingstarttime`, `bookingfinishtime`, `bookingattendance`) VALUES (?,?,?,?,?)', [req.query.uid, req.query.bookingdate, req.query.bookingstarttime, req.query.bookingfinishtime, req.query.bookingattendance], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* Delete booking by bookingID. */
router.get('/delBooking', function(req, res, next) {
	connection.query('delete from booking where bookingID = ?', [req.query.bookingID], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* Update booking by bookingID. */
router.get('/updBooking', function(req, res, next) {
	connection.query('update booking set bookingstatus = ? where bookingID = ?', [req.query.bookingstatus, req.query.bookingID], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

module.exports = router;
