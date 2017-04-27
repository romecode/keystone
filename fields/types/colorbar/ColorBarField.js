import Field from '../Field';
import React from 'react';
import Select from 'react-select';
import superagent from 'superagent';
import Color from 'color';
import {
	Button,
	FormField,
	FormInput,
	FormNote,
} from '../../../admin/client/App/elemental';

module.exports = Field.create({
	statics: {
		type: 'ColorBar'
		
	},
	//fired everytime the actual value is changed
	valueChanged: function() {
		this.setState({
			init:false
		})
		var colorbar = {
				base:[],
				supp:[]
		}
		var getBackground=function (el){ 
			var color = el.attr('color-id');
			return color ? color : undefined
		}
		var getPattern=function (el){
			var image = el.attr('pattern-id') ;
			return image ? image : undefined
		}

		var parseTable=function (el,obj,init){
			var self = this;
			if(init){
				el.each(function(){
					if($(this).children('div.base').length > 0){
						parseTable($(this).children(),obj);
					}else{
						var follow = obj['supp'].push([]);
						parseTable($(this).children(),obj['supp'][follow-1]);
					}
				})
			}else if(!init && el.length > 1){
				el.each(function(){
					parseTable($(this),obj)
				})
			}else if(el.hasClass('parent')){
				var follow = obj.push([]);
				parseTable(el.children(),obj[follow-1]);
			}else if(el.hasClass('col-split')){
				obj.push([parseTable(el.children(),obj)])
			}else if(el.hasClass('base')){
				
				obj['base'].push({v:el.html(),color:getBackground(el),pattern:getPattern(el)})
			}else if(el.hasClass('child')){
				return {v:el.html(),color:getBackground(el),pattern:getPattern(el)}
			}
		}
		//run recursion to parse the table and set it as the value of the hidden input form element
		parseTable($('#table').children(),colorbar,true);
		
		this.props.onChange({
			path: this.props.path,
			value: JSON.stringify(colorbar)
		});
		
	},
	getOptions: function(model, callback) {
		superagent
			.get('/api/' + model + '/list?context=relationship&list='+model+'&field=type&limit=2000&filters[type]='+this.state.type)
			.set('Accept', 'application/json')
			.end(function (err, res) {
				if (err) throw err;
				callback(model, res.body);
			});
	},
	getInitialState: function() {
		var self = this;
		window.colorbar={
				parent:self,
				ep: Keystone.brand.toLowerCase(),
				el : null,
				lastUrl : null,
				options : "<option disabled selected value> -- select an option -- </option>",
				addQtip:function(e){
					e.qtip({
				        content: {
				            text: function(event, api) {
				                window.colorbar.el = $(this);
				                
				                var tooltip = "<div class='tooltiptext'><input type='text' onkeyup='window.colorbar.desc(this)' id='desc' placeholder='Description'/>\
				                	<select id='colors' onchange='window.colorbar.colors(this)'></select>\
				                	<a href='#' onclick='window.colorbar.split();return false;' class='btn btn-default' >Split</a><a href='#' onclick='window.colorbar.remove();return false;' class='btn btn-default'>Remove row</a></div>";
				                tooltip = $('<div/>').html(tooltip).contents();
				                tooltip[0].children.colors.innerHTML=window.colorbar.options;
				                
				                tooltip[0].children.desc.innerHTML=window.colorbar.el.html();
				                
				                return tooltip
				            }
				        },
				        position:{
				        	target: 'mouse',
				        	adjust:{
				        		mouse: false
				        	}
				        },
				        hide: {
				            fixed: true,
				            delay: 7000,
				            event: 'unfocus'
				        },
				        show: {
				            solo: true,
				            event: 'mouseover'
				        },
				        style:{
				        	classes: 'qtip-bootstrap'
				        }
				    });
				},
				split:function() {
					
        	    	var _parent = this.el.parent();
        	    	var _wrapper = $("<div class='col-split'></div>");
        	    	var _child = $("<div class='child' contenteditable='true' ></div>");
        	    	this.addQtip(_child);
        	    	this.el.wrap(_wrapper);
        	    	
        	    	if(this.el.hasClass('base')){
        	    		this.el.toggleClass('base child');
        	        	
        	    	}else{
        	    		_parent.addClass('parent');
        	    	}
        	    	_parent.append(_child);
        	    	_child.wrap(_wrapper);
        	    	_parent.sortable({update:function(){window.colorbar.parent.valueChanged()}});
        	        _parent.disableSelection();
        	        this.parent.valueChanged();
        	        
        	    },

        	    remove:function() {
        	    	
        	    	this.el.parents('.color-row').remove();
        	    	this.parent.valueChanged();
        	    	
        	    },
        	    colors:function(e) {
        	    	var id = e.value;
        	    	
        	    	this.el.css('background-color','');
        	    	this.el.css('background-image','');
        	    	this.el.removeAttr('color-id');
        	    	this.el.removeAttr('pattern-id');
        	    	if(!this.parent.state.patterns[id]){
        	    		var color = "#"+this.parent.state.colors[id]['hex_code'];
        	    		this.el.css('background-color',color);
        	    		this.el.css('color',Color(color).light() ? "black":"white");
        	    		this.el.attr('color-id',id);
        	    	}else{
        	    		var url = "url('/"+this.ep+"/patterns/"+this.parent.state.patterns[id]['filename']+"')";
        	    		this.el.css('background-image',url);
        	    		this.el.attr('pattern-id',id);
        	    	}
        	    	this.parent.valueChanged();
        	    },
        	    desc:function(e) {
        	    	var text = e.value;
                	this.el.html(text);
                	this.parent.valueChanged();
        	    }
		}
		return {
			ready: false,
			colors: {},
			patterns: {},
			init:true,
			type:this.props.values.type
		};
	},
	renderLoadingUI: function() {
		return <div className='help-block'>loading...</div>;
	},
	componentDidUpdate:function(){
		var ep = window.colorbar.ep;
		var value = this.props.value;
		if(value){value=JSON.parse(value)};
		var self = this;
		var table = $("#table");
		
	    table.sortable({update:function(){self.valueChanged()}});
	    table.disableSelection();
	    var buildSupp = function (_item){
	    	
			var _parent = $("<div class='col-split'></div>");
			if(_item.length > 1){
				_parent = $("<div class='col-split parent'></div>");
				for (var i = 0; i < _item.length; i++) {
					_parent.append(buildSupp(_item[i]));
				}
				return _parent
			}else{
				var _type 	= _item[0]['color'] ? 'color' : _item[0]['pattern'] ? 'pattern' : null;
	    		var _v		= _item[0]['v'];
				var _child = $("<div class='child' contenteditable='true' ></div>");

				if(_type == 'pattern'){
					var url = "url('/"+ep+"/patterns/"+self.state.patterns[_item[0][_type]].filename+"')";
	            	_child.css({'background-image':url})
	            	_child.attr('pattern-id',_item[0][_type]);
	            	
	            }else if (_type == 'color'){
	            	var color = "#"+self.state.colors[_item[0][_type]]['hex_code'];
	            	_child.css('color',Color(color).light() ? "black":"white");
	            	_child.css({'background-color':color})
	            	_child.attr('color-id',_item[0][_type]);
	            }
	            _child.html(_v);
	            window.colorbar.addQtip(_child);
				_parent.append(_child);
				
	            return _parent
			}
	    }
	    if(value && this.state.ready && this.state.init){
	    	this.setState({
				init:false
			})
	    	var base = value['base'];
	    	var supp = value['supp'];
	    	for(var i=0;i<base.length;i++){
	    		var _type 	= base[i]['color'] ? 'color' : base[i]['pattern'] ? 'pattern' : null;
	    		var _v		= base[i]['v'];
	    		var _parent = $("<div class='color-row' ></div>");
	            var _child = $("<div class='base' contenteditable='true'></div>");
	            
				
			    
			    
	            if(_type == 'pattern'){
	            	var url = "url('/"+ep+"/patterns/"+this.state.patterns[base[i][_type]]['filename']+"')";
	            	_child.css({'background-image':url})
	            	_child.attr('pattern-id',base[i][_type]);
	            	
	            }else if(_type == 'color'){
	            	var color = "#"+this.state.colors[base[i][_type]]['hex_code'];
	            	_child.css('color',Color(color).light() ? "black":"white");
	            	_child.css({'background-color':color})
	            	_child.attr('color-id',base[i][_type]);
	            }
	            _child.html(_v);
	            window.colorbar.addQtip(_child);
	            _parent.append(_child);
	            
	            table.append(_parent);
	    	}
	    	for(var i=supp.length-1;i>=0;i--){
	    		var _item = supp[i];
	    		var _row = $("<div class='color-row'></div>");
	    		$(_item).each(function(){
	    			_row.append(buildSupp($(this)));
	    		})
	    		_row.sortable({update:function(){self.valueChanged()}});
	            _row.disableSelection();
	    		table.prepend(_row);
	    	}
	    	
	    }
	    
	    
	    
	    
			
	    
	},
	
	componentDidMount:function(){
		var self =this;
		
		var colors={};
		var patterns={};
		var ready = function(){
			
			self.setState({
				ready:true,
				colors:colors,
				patterns:patterns
			})
		}
		var callBackCount = 0;
		
		var callback_c = function(_model,_data){
			callBackCount++;
			for (var i = 0; i < _data.length; i++) {
				window.colorbar.options += "<option value="+JSON.stringify(_data[i]['id']) +">" + _data[i]['name'] + '</option>';
				colors[_data[i]['id']]={name:_data[i]['name'],hex_code:_data[i]['hex_code']};
			  }
			if(callBackCount==2){
				ready()
			}
		}
		var callback_p = function(_model,_data){
			callBackCount++;
			for (var i = 0; i < _data.length; i++) {
				window.colorbar.options += "<option value="+JSON.stringify(_data[i]['id']) +">" + _data[i]['name'] + '</option>';
				patterns[_data[i]['id']]={name:_data[i]['name'],filename:_data[i]['pattern']['filename']};
			  }
			if(callBackCount==2){
				ready()
			}
		}
		this.getOptions("colors",callback_c);
		this.getOptions("patterns",callback_p);
		
	},
    addRow: function(e) {
    	e.preventDefault()
    	var table = $("#table");
    	console.log(window)
        var _parent = $("<div class='color-row' ></div>");
        var _child = $("<div class='base' contenteditable='true' ></div>");
        window.colorbar.addQtip(_child);
        _parent.append(_child);
        table.prepend(_parent);   
        this.valueChanged();
    },
	renderField: function () {
		
		if(true){
			return (
					
						<div >
							
							<div id="table"></div>
							<a href="#" onClick={this.addRow} className="btn btn-default" >Add row</a>
							<input type="hidden" ref="focusTarget" name={this.props.path} placeholder={this.props.placeholder} value={this.props.value} className="form-control" />
						</div>
					
			);
		}else return this.renderLoadingUI();
	}
});

