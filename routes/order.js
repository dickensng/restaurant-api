var express = require('express');
var router = express.Router();


/* GET All order. */
router.get('/getAllOrder', function(req, res, next) {
	connection.query('SELECT orderid, substr(orderdate, 1, 10) orderdate, orderstatus, discountrate, paymentmethod, paymentstatus, UID from orders order by orderdate desc', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});


/* GET All PENDING order. */
router.get('/getAllPendingOrder', function(req, res, next) {
	connection.query('SELECT orderid, substr(orderdate, 1, 10) orderdate, orderstatus, discountrate, paymentmethod, paymentstatus, UID from orders where orderstatus = \'Pending\'', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});


/* GET All TODAY order. */
router.get('/getAllTodayOrder', function(req, res, next) {
	connection.query('SELECT orderid, substr(orderdate, 1, 10) orderdate, orderstatus, discountrate, paymentmethod, paymentstatus, UID from orders where orderdate = date(now())', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});


/* GET order by orderstatus. */
router.get('/getOrderByStatus', function(req, res, next) {
	connection.query('SELECT orderid, substr(orderdate, 1, 10) orderdate, orderstatus, discountrate, paymentmethod, paymentstatus, UID from orders where orderstatus = ?', [req.query.orderstatus], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* GET order by orderid. */
router.get('/getOrderByID', function(req, res, next) {
	connection.query('SELECT orderid, substr(orderdate, 1, 10) orderdate, orderstatus, discountrate, paymentmethod, paymentstatus, UID from orders where orderid = ?', [req.query.orderid], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* GET order by uid. */
router.get('/getOrderByUser', function(req, res, next) {
	connection.query('SELECT orderid, substr(orderdate, 1, 10) orderdate, orderstatus, discountrate, paymentmethod, paymentstatus, UID from orders where uid = ? order by orderdate desc', [req.query.uid], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* GET order by orderdate. */
router.get('/getOrderByDate', function(req, res, next) {
	connection.query('SELECT z.orderid, substr(z.orderdate, 1, 10) orderdate, z.orderstatus, z.discountrate, z.paymentmethod, z.paymentstatus, z.UID, y.*, x.menuprice, x.quantity, round(x.menuprice * x.quantity, 1) subtotal from orderdetail x, menu y, orders z where x.orderid = z.orderid and x.menuid = y.menuid and z.orderdate = ? order by z.uid', [req.query.orderdate], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* GET orderdetail by orderid. */
router.get('/getOrderDetailByID', function(req, res, next) {
	connection.query('SELECT z.orderid, substr(z.orderdate, 1, 10) orderdate, z.orderstatus, z.discountrate, z.paymentmethod, z.paymentstatus, z.UID, y.*, x.menuprice, x.quantity, round(x.menuprice * x.quantity, 1) subtotal from orderdetail x, menu y, orders z where x.orderid = z.orderid and x.menuid = y.menuid and x.orderid = ?', [req.query.orderid], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* GET getRevenueMonthly. */
router.get('/getRevenueMonthly', function(req, res, next) {
	connection.query('select year(orderdate) yy, month(orderdate) mm, sum(orderingcost) revenue from orders group by year(orderdate), month(orderdate)', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* Create order. */
router.get('/insOrder', function(req, res, next) {
    connection.query('insert into orders (`orderdate`, `orderingcost`, `UID`) select now(), sum(menuprice), ? from menu a, cart b where a.menuid = b.menuid and b.uid = ?', [req.query.uid, req.query.uid], function (error, results, fields) {
        if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
            var orderid = results.insertId;
            connection.query('insert into orderdetail (`orderid`, `menuID`, `menuprice`, `quantity`) select ?, a.menuid, a.menuprice, b.qty from menu a, (select menuid, count(*) qty from cart where uid = ? group by menuid) b where a.menuid = b.menuid', [orderid, req.query.uid], function (error, results2, fields2) {
                if(error){
                    res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
                } else {
                    connection.query('delete from cart where uid = ?', [req.query.uid], function (error, results3, fields3) {
                        if(error){
                            res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
                        } else {
                            res.send(JSON.stringify({"status": 200, "error": null, "response": results3}));
                        }
                    });
                }
            });
        }
    });
});


/* Delete order by orderID. */
router.get('/delOrder', function(req, res, next) {
	connection.query('delete from orders where orderID = ?', [req.query.orderID], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* Update orderstatus by orderID. */
router.get('/updOrderStatus', function(req, res, next) {
	connection.query('update orders set orderstatus = ? where orderID = ?', [req.query.orderstatus, req.query.orderID], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});


/* Update paymentmethod, paymentstatus by orderID. */
router.get('/updOrderPayment', function(req, res, next) {
	connection.query('update orders set paymentmethod = ?, paymentstatus = ? where orderID = ?', [req.query.paymentmethod, req.query.paymentstatus, req.query.orderID], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

module.exports = router;
