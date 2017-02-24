var FieldType = require('../Type');
var util = require('util');
var utils = require('keystone-utils');
var keystone = require('../../../');
var _ = require('lodash');

/**
 * Text FieldType Constructor
 * @extends Field
 * @api public
 */
function sizetype2(list, path, options) {
	
	this.filters = options.filters;
	this._defaultSize = 'full';
	this._nativeType = keystone.mongoose.Schema.Types.ObjectId;
	this._underscoreMethods = ['format'];
	sizetype2.super_.call(this, list, path, options);
}
util.inherits(sizetype2, FieldType);
sizetype2.properName = 'SizeType2';
/**
 * Registers the field on the List's Mongoose Schema.
 */
sizetype2.prototype.addToSchema = function(schema) {
	var field = this;
	
	var def = {
		type: this._nativeType,
		
		index: (this.options.index ? true : false),
		required: (this.options.required ? true : false),
		unique: (this.options.unique ? true : false)
	};
	var paths = this.paths = {
		shanks: this._path+'.shanks',
		widths: this._path+'.widths'
	};
	
	//schema.path(this.path, [def]);
	//console.log(this);
	
	
	//*******************************
	
		
	
	schema.nested[this.path] = true;

	schema.add({
		shanks: [this._nativeType],
		widths: [{
			_id:false,
			widths: [this._nativeType],
			sizes: {
				adult_sizes:[this._nativeType],
				child_sizes:[this._nativeType],
				sizes:[this._nativeType],
			}
		}]
	}, this.path + '.');

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
sizetype2.prototype.format = function(item) {
//	var value = item.get(this.path);
//	// force the formatted value to be a string - unexpected things happen with ObjectIds.
//	return value.join(', ');
};

/**
 * Updates the value for this field in the item from a data object.
 * Only updates the value if it has changed.
 * Treats an empty string as a null value.
 */
sizetype2.prototype.updateItem = function(item, data,callback) {
	console.log("here saving")
	console.log(item)
	console.log(data)
	if(data.identifier==2){
		var shanks = JSON.parse(data['type2.shanks']);
		var widths = JSON.parse(data['type2.widths']);
		
		
		item.set('type2.shanks',shanks);
		item.set('type2.widths',widths);
	}
	process.nextTick(callback);
	
};

/* Export Field Type */
exports = module.exports = sizetype2;
