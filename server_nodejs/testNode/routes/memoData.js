exports.send = function(req, res){

	// form data receive to html
	// var text_memo = req.body.textarea_memo;

	// var query = connection.query('select * from test',function(err,rows){
 //        console.log(rows);
 //        console.log(err);
 //        // res.json(rows);
 //    });
 //    console.log(query);

	// console.log(req.body.textarea_memo);
	console.log(req.params.data);
	// res.send(req.params.data);
	res.end(req.params.data);
	// res.render('send', { title: req.params.name });
}

exports.receive = function(req, res){
	console.log(req.body.textarea_memo);
	res.send(req.body.textarea_memo);
}