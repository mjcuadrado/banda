
/*!
 * Module dependencies.
 */

var mongoose = require('mongoose')
var Articulo = mongoose.model('Articulo')

exports.dameArticulos= function(req, res){
	Articulo.find(function(error, data){
		if (error) return res.status(500).send(err.message);
		return res.status(200).jsonp(data);
	});
};

exports.nuevo=function(req,res){
	var datos = req.body;
	console.log('Añadir a: -> ' + req.params.id);
	//console.log ('Datos pasados ->');
	//console.log(datos);

	articulo = new Articulo(datos);
	articulo.save(function(err, object){
		if (err){
			//console.log("ERROR -> Al crear el articulo")
			//console.log(err.message);
			return res.status(500).send(err.message);
		}else{
			console.log("Articulo creado");
			return res.status(200).send('Correcto');
		}

	});
};