var express = require('express');
var router = express.Router();

/* GET All Users. */
router.get('/getAllUsers', function(req, res, next) {
	connection.query('SELECT * from users', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});


/* Sign In by User ID and password. */
router.get('/signin', function(req, res, next) {
	connection.query('SELECT * from users where uid = ? and password = ?', [req.query.uid, req.query.pw], function (error, results, fields) {
	  	if(error){
	  		req.session.uid = null;
            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
            
	  	} else if ( results.length > 0 ) {
  			req.session.uid = req.query.uid;
            connection.query('delete from cart', function (error, results3, fields3) {});
            res.send(JSON.stringify({"status": 200, "error": null, "response": "success", "role": results[0].role}));
            
	  	} else {
            req.session.uid = null;
            res.send(JSON.stringify({"status": 200, "error": null, "response": "failure"}));
            
        }
  	});
});


/* Sign Out */
router.get('/signout', function(req, res, next) {
    req.session.uid = null;
    res.send(JSON.stringify({"status": 200, "error": null, "response": "success"}));
});


/* GET User ID from session attribute. */
router.get('/getUserID', function(req, res, next) {
    if ( req.session.uid ) {
        res.send(JSON.stringify({"status": 200, "error": null, "response": req.session.uid}));
    } else {
        res.send(JSON.stringify({"status": 200, "error": null, "response": null}));
    }
});


/* GET User by User ID (session attribute). */
router.get('/getUser', function(req, res, next) {
	connection.query('SELECT * from users where uid = ?', [req.session.uid], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* GET User by User ID (IN parameter). */
router.get('/getUser', function(req, res, next) {
	connection.query('SELECT * from users where uid = ?', [req.query.uid], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* Delete User by User ID. */
router.get('/delUser', function(req, res, next) {
	connection.query('delete from users where uid = ?', [req.query.uid], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* Update User by User ID. */
router.get('/updUser', function(req, res, next) {
	connection.query('update users set role = ? where uid = ?', [req.query.role, req.query.uid], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

module.exports = router;
