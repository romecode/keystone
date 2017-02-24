var Select = require('react-select'),
	Checkbox = require('react-checkbox'),
	React = require('react'),
	Field = require('../Field'),
	superagent = require('superagent'),
	
	_ = require('lodash');
	



module.exports = Field.create({
	
	getInitialState: function() {
		
		return {
			ready: this.props.value ? false : true,
			
			type: this.props.values.identifier,
			expandedType: null,
			shanks: null,
			widths: {
					widths:null,
					sizes:{
						adult_sizes: null,
						child_sizes: null,
						sizes: null
					}
			},
		};
	},
	
	componentWillMount: function() {
		
		
		
	},
	componentDidMount: function() {
		var self = this;
		var count = 0;
		var callback = function(_model,_data){
			var newState = self.state;
			
			count++;
			if (count == 3) newState['ready'] = true;;
			
			
			if(_model == 'sizes'){
				newState.widths.sizes.sizes=_data;
				newState.widths.sizes.adult_sizes=_data;
				newState.widths.sizes.child_sizes=_data;
				
			}else if(_model == 'widths'){
				newState.widths.widths=_data;
			}else{
				newState[_model]=_data;
			}
			self.setState(newState)
		}
		this.getSizeOptions("sizes",callback);
		this.getOptions("shanks",callback);
		this.getOptions("widths",callback);
		
	},
	//fired everytime the actual value is changed
	updateValue: function(path,width_array_index,checked,event) {
		
		var value = this.props.value;
		var _new = [];
		
		if(!value.widths.length){
			
				value['widths']= [{
						
						sizes:{
							sizes: [],
							
							child_sizes: [],
							adult_sizes: []
							
						},
						widths:[]
					}]
				
			
		}
		
		
		if(typeof width_array_index == 'number') path = path.slice(0, 6) +'.'+ width_array_index +'.'+ path.slice(7);
		
		if(checked){
			_new=_.union(_.get(value,path,[]),[event.target.value]);
		}else{
			_new=_.without(_.get(value,path,[]),event.target.value);
		}
		
		_.set(value,path,_new);
		
		
		
		this.props.onChange({
			
			value: value
		
		});
		
		
	},
	buildShanks: function(){
		var _return = [];
		var checked = false;
		var self = this;
		//var _path = path
		_return.push(<p>Shanks</p>);
		
		_return.push(<div className="btn-group">{this.buildArray(self.props.value.shanks,'shanks')}</div>);
		
		
		return _return
	},
	buildArray: function(existing,path,width_array_index){		
		
		var _return = [];
		var checked = false;
		var _class="btn btn-info btn-mod"
		for (var x = 0; x < _.get(this.state,path,0).length; x++) {
			checked = false;
			_class="btn btn-info btn-mod"
			var item = _.get(this.state,path+'.'+x);
			if(existing && _.includes(existing,item.id)){
				checked=true;
				_class+=" active"
			}			
			_return.push(<label className={_class}><Checkbox defaultChecked={checked} onChange={this.updateValue.bind(this,path,width_array_index)} value={item.id}/>{item.name}</label>);
		}
		
		return _return
	},
	buildWidths: function(){
		var _return = [];
		var self = this;
		var checked = false;
		var style={
				border:"solid black thin",
				margin:"10px",
				padding: "10px"
		};
		var verbose={adult_sizes:"Adult Sizes",child_sizes:"Child Sizes",sizes:"Sizes"};
		for (var x = 0; x < self.props.value.widths.length; x++) {
			
			var _wrap = []
			//existing width array objects
			var item = self.props.value.widths[x];
			for ( var key in item) {
				if(key == 'sizes'){
					for ( var size_key in item[key]) {
						
						_wrap.unshift(<div className="btn-group">{this.buildArray(item[key][size_key],'widths.'+key+'.'+size_key,x)}</div>);
						_wrap.unshift(<p className="clear-top-pad sub-titles">{verbose[size_key]}</p>);
					}
				}else if(key == 'widths'){
					
					_wrap.unshift(<div className="btn-group">{this.buildArray(item[key],'widths.widths',x)}</div>);
					_wrap.unshift(<p className="clear-top-pad sub-titles">Widths</p>);
				}
			}
			_return.push(<div style={style} >{_wrap}<a href="#" id="" className="btn btn-danger clear-top-pad" onClick={this.removeWidth.bind(this,x)}>Remove set</a></div>);
			
		}
		if (!self.props.value.widths.length ){
			var size_key = ['adult_sizes','child_sizes','sizes'];
			
			_return.push(<p>Widths</p>);
			_return.push(<div className="btn-group">{this.buildArray(null,'widths.widths',0)}</div>);
			for ( var index in size_key) {
				_return.push(<p className="clear-top-pad sub-titles">{verbose[size_key[index]]}</p>);
				_return.push(<div className="btn-group">{this.buildArray(null,'widths.sizes'+'.'+size_key[index],0)}</div>);
			}
			
			
		}else{
			_return.push(<a href="#" id="" className="btn btn-danger clear-top-pad" onClick={this.addSet}>Add set</a>);
		}
		
	
		return _return
	},
	addSet(){
		
		//need new index number for array
		//length works as its index+1 already
		var newIndex	= this.props.value.widths.length;
		var value		= this.props.value;
		
		
		
			
				value['widths'][newIndex]= {
						
						sizes:{
							sizes: [],
							
							child_sizes: [],
							adult_sizes: []
							
						},
						widths:[]
					}
				
			
		
		
		//push new array to props
				this.props.onChange({
					
					value: value
				});
		
	},
	removeWidth(index){
		var value = this.props.value;
		value.widths.splice(index,1);
		
		this.props.onChange({
			path: this.props.path,
			value: value
		});
		
	},
	getOptions: function(model, callback,loc) {
		superagent
			.get('/keystone/api/' + model + '?limit=2000')
			.set('Accept', 'application/json')
			.end(function (err, res) {
				if (err) throw err;

				var data = res.body;

				
					
				callback(model, data.results,loc);
					
				
			});
	},
	getSizeOptions: function(model, callback,loc) {
		superagent
		.get('/api/' + model + '/list?context=relationship&list='+model+'&field=type&limit=2000&filters[type]='+this.props.values.type)
			.set('Accept', 'application/json')
			.end(function (err, res) {
				if (err) throw err;

				var data = res.body;

				
					
				callback(model, data,loc);
					
				
			});
	},
	
	renderField: function () {
		

		var body =[];
		
		if (this.state.ready){
			
			
			
			body.push(this.buildShanks());
			body.push(this.buildWidths());
			
			body.push(<input type="hidden" ref="focusTarget" name='type2.shanks' placeholder={this.props.placeholder} value={JSON.stringify(this.props.value['shanks'])} className="form-control" />);
			body.push(<input type="hidden" ref="focusTarget" name='type2.widths' placeholder={this.props.placeholder} value={JSON.stringify(this.props.value['widths'])} className="form-control" />);
			
			return body
		}
		
		
		return null
	}
});

