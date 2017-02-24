var FieldType = require('../Type');
var util = require('util');
var utils = require('keystone-utils');
var keystone = require('../../../');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('underscore');

/**
 * Text FieldType Constructor
 * @extends Field
 * @api public
 */
function sizetype4(list, path, options) {
	
	this.filters = options.filters;
	this._defaultSize = 'full';
	this._nativeType = keystone.mongoose.Schema.Types.ObjectId;
	this._underscoreMethods = ['format'];
	sizetype4.super_.call(this, list, path, options);
}
util.inherits(sizetype4, FieldType);
sizetype4.properName = 'SizeType4';
/**
 * Registers the field on the List's Mongoose Schema.
 */
sizetype4.prototype.addToSchema = function(schema) {
	var field = this;
	
	var custom = new Schema({
		size: String,
		sizes: [this._nativeType]
	});
	
	var def = {
		type: [custom],
		
		index: (this.options.index ? true : false),
		required: (this.options.required ? true : false),
		unique: (this.options.unique ? true : false)
	};
//	var paths = this.paths = {
//		shanks: this._path.append('.shanks'),
//		widths: this._path.append('.widths')
//	};

	
	schema.path(this.path, def);
	//console.log(this);
	
	
	//*******************************
	
		
	
	//schema.nested[this.path] = true;
	//console.log(this);
	

//	schema.virtual(paths.serialised).get(function() {
//		var text = _.compact([
//		          			this.get(paths.widths),
//		        			this.get(paths.shanks)
//		        			
//		        		]).join(', ');
//		console.log(text);
//		return text
//	});
	//*******************************
	
	this.underscoreMethod('contains', function(find) {
		var value = this.populated(field.path) || this.get(field.path);
		if ('object' === typeof find) {
			find = find.id;
		}
		var result = _.some(value, function(value) {
			return (value + '' === find);
		});
		return result;
	});
	
	this.bindUnderscoreMethods();
};

/**
 * Formats the field value
 */
sizetype4.prototype.format = function(item) {
//	var value = item.get(this.path);
//	// force the formatted value to be a string - unexpected things happen with ObjectIds.
//	return value.join(', ');
};

/**
 * Updates the value for this field in the item from a data object.
 * Only updates the value if it has changed.
 * Treats an empty string as a null value.
 */
sizetype4.prototype.updateItem = function(item, data, callback) {
	
	
	if(data.identifier==4){
		
		
		item.set('type4',JSON.parse(data.type4));
		
	}
	process.nextTick(callback);
};

/* Export Field Type */
exports = module.exports = sizetype4;
