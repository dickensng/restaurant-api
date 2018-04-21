var express = require('express');
var router = express.Router();


/* Add item to shopping cart */
router.get('/addCart', function(req, res, next){
	connection.query('insert into cart ( `menuID`, `UID` ) VALUES ( ?, ? )', [req.query.menuID, req.query.uid], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
})


/* Get shopping cart */
router.get('/getCart', function(req, res, next) {
	connection.query('select a.* from menu a, cart b where a.menuid = b.menuid and b.UID = ? order by a.menutype', [req.query.uid], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
            connection.query('select sum(menuprice) subcost from menu a, cart b where a.menuid = b.menuid', function (error, results2, fields2) {
                if(error){
                    res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
                } else {
                    res.send(JSON.stringify({"status": 200, "error": null, "subtotal":results2, "response": results}));
                }
            })
	  	}
  	});
})


/* Get grouped shopping cart */
router.get('/getGroupedCart', function(req, res, next) {
	connection.query('select a.*, b.qty quantity, b.qty*a.menuprice subtotal from menu a, (select menuid, count(*) qty from cart group by menuid) b where a.menuid = b.menuid', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
            connection.query('select sum(menuprice) subcost from menu a, cart b where a.menuid = b.menuid', function (error, results2, fields2) {
                if(error){
                    res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
                } else {
                    res.send(JSON.stringify({"status": 200, "error": null, "subtotal":results2, "response": results}));
                }
            })
	  	}
  	});
})


/* Remove item from shopping cart */
router.get('/removeCart', function (req, res, next) {
	connection.query('delete from cart where menuID = ? and UID = ? LIMIT 1', [req.query.menuID, req.query.uid], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
})

module.exports = router;
