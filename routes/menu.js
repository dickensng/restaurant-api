var express = require('express');
var router = express.Router();

/* GET All menu. */
router.get('/getAllMenu', function(req, res, next) {
	connection.query('SELECT * from menu', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});


/* GET menu by menutype. */
router.get('/getMenuByType', function(req, res, next) {
	connection.query('SELECT * from menu where menutype = ?', [req.query.menutype], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* GET menu by menuID. */
router.get('/getMenuByID', function(req, res, next) {
	connection.query('SELECT * from menu where menuID = ?', [req.query.menuID], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* Create menu. */
router.get('/insMenu', function(req, res, next) {
	connection.query('insert into menu (`menuname`, `menutype`, `menudesc`, `menuinventory`, `menuprice`, `menuimageurl`) VALUES (?,?,?,?,?,?)', [req.query.menuname, req.query.menutype, req.query.menudesc, req.query.menuinventory, req.query.menuprice, req.query.menuimageurl], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* Delete menu by menuID. */
router.get('/delMenu', function(req, res, next) {
	connection.query('delete from menu where menuID = ?', [req.query.menuID], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* Update menu by menuID. */
router.get('/updMenu', function(req, res, next) {
	connection.query('update menu set menuname = ?, menutype = ?, menudesc = ?, menuinventory = ?, menuprice = ?, menuimageurl = ? where menuID = ?', [req.query.menuname, req.query.menutype, req.query.menudesc, req.query.menuinventory, req.query.menuprice, req.query.menuimageurl, req.query.menuID], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

module.exports = router;
