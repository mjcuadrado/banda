
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
/**
 * User schema
 */

var ArticuloSchema = new Schema({
title: {type: String, required: true},
summary: {type: String, required: true},
content: {type: String, required: true},
author: {type: String, required: true},
iconURL: {type: String, required: true},
creationDate: Date,
modifDate:Date,
active:Boolean,
});


ArticuloSchema.pre('save', function(next){
	now = new Date();
 	fechamodificacion = now;
	if ( !this.modifDate) {
		this.modifDate = now;
  	}
  	next();
	});


/**
 * User plugin
 */


ArticuloSchema.method({

});

/**
 * Statics
 */

ArticuloSchema.static({

});

/**
 * Register
 */

mongoose.model('Articulo', ArticuloSchema);
