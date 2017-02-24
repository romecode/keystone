var Select = require('react-select'),
	Checkbox = require('react-checkbox'),
	React = require('react'),
	Field = require('../Field'),
	superagent = require('superagent'),
	_ = require('lodash');
	
	



module.exports = Field.create({
	
	getInitialState: function() {
		console.log(this);
		return {
			ready: this.props.value ? false : true,
			existing: this.props.value,
			type: this.props.values.identifier,
			expandedType: null,
			sizes: null,
			
		};
	},
	
	componentWillMount: function() {
		
		
		
	},
	componentDidMount: function() {
		var self = this;
		var count = 0;
		
		var callback = function(_model,_data){
			
			self.setState({sizes:_data,ready:true})
		}
		this.getOptions("sizes",callback)
		
	},
	createBlank: function(){
		return {
				sizes:[],
				size:""
				}	
	},
	//fired everytime the actual value is changed
	updateValue: function(array_index,checked,event) {
		
		var value = this.props.value;
		var _new = [];
		var path = "sizes";
		
		if(!value.length){
			value[0] = this.createBlank();
		}
		
		if(typeof array_index == 'number') path = array_index +'.'+ path;
		

		if(checked){
			_new=_.union(_.get(value,path,[]),[event.target.value]);
		}else{
			_new=_.without(_.get(value,path,[]),event.target.value);
		}
		
		
		value[array_index].sizes = _new;
		
		
		
		this.props.onChange({
			
			value: value
		
		});
	},
	updateTextValue: function(array_index,event) {
		
		var value = this.props.value;
		if(!value.length){
			value[0] = this.createBlank();
		}		
		
		value[array_index].size=event.target.value;
		
		
		
		this.props.onChange({
			
			value: value
		
		});
	},
	
	buildArray: function(existing,array_index){		
		
		var _return = [];
		var checked = false;
		var _class="btn btn-info btn-mod"
		for (var x = 0; x < _.get(this.state,"sizes",0).length; x++) {
			checked = false;
			_class="btn btn-info btn-mod"
			var item = _.get(this.state,'sizes.'+x);
			if(existing && _.includes(existing,item.id)){
				checked=true;
				_class+=" active"
			}			
			_return.push(<label className={_class}><Checkbox defaultChecked={checked} onChange={this.updateValue.bind(this,array_index)} value={item.id}/>{item.name}</label>);
		}
		return _return
	},
	
	buildType4: function(){
		var _return = [];
		var self = this;
		var checked = false;
		var style={
				border:"solid black thin",
				margin:"10px",
				padding: "10px"
		};
		
		for (var x = 0; x < self.props.value.length; x++) {
			
			var _wrap = []
			//existing width array objects
			var item = self.props.value[x];
			for ( var key in item) {
				
				if(key == 'sizes'){
					
						
						_wrap.unshift(<div className="btn-group">{this.buildArray(item.sizes,x)}</div>);
						_wrap.unshift(<p className="clear-top-pad sub-titles">Sizes</p>);
					
				}else if(key == 'size'){
					
					_wrap.unshift(<textarea autoComplete="off" className="form-control" value={item.size} onChange={this.updateTextValue.bind(this,x)}/>);
					_wrap.unshift(<p className="clear-top-pad sub-titles">Size</p>);
				}
			}
			_return.push(<div style={style}>{_wrap}<a href="#" id="" className="btn btn-danger clear-top-pad" onClick={this.removeSet.bind(this,x)}>Remove set</a></div>);
			
		}
		if (!self.props.value.length ){
			
			_return.push(<p className="clear-top-pad sub-titles">Sizes</p>);
			_return.push(<div className="btn-group">{this.buildArray(null,0)}</div>);
			_return.unshift(<textarea autoComplete="off" className="form-control" onChange={this.updateTextValue.bind(this,0)}/>);
			_return.unshift(<p className="clear-top-pad sub-titles">Size</p>);
			
			
		}else{
			_return.push(<a href="#" id="" className="btn btn-danger clear-top-pad" onClick={this.addSet}>Add set</a>);
		}
		
	
		return _return
	},
	addSet(){
		
		//need new index number for array
		//length works as its index+1 already
		var newIndex	= this.props.value.length;
		var value		= this.props.value;
		
		
		
			
				value[newIndex]= this.createBlank();
				
			
		
		
		//push new array to props
				this.props.onChange({
					
					value: value
				});
		
	},
	removeSet(index){
		var value = this.props.value;
		value.splice(index,1);
		
		this.props.onChange({
			value: value
		});
		
	},
	getOptions: function(model, callback,loc) {
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
			
			body.push(this.buildType4());
			
			
			body.push(<input type="hidden" ref="focusTarget" name={this.props.path} placeholder={this.props.placeholder} value={JSON.stringify(this.props.value)} className="form-control" />);
			return body
		}
		
		
		return null
	}
});

