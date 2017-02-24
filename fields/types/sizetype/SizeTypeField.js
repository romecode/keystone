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
	//fired everytime the actual value is changed
	updateValue: function(checked,event) {
		var value = [];
		console.log("updates")
		if(checked){
			value=_.union(this.props.value,[event.target.value]);
		}else{
			value=_.without(this.props.value,event.target.value);
		}
		this.props.onChange({
			path: this.props.path,
			value: value,
			
		});
		this.setState({existing:value});
		
	},
	
	
	
	buildType1: function(){
		var _return = [];
		var checked = false;
		var self = this;
		var _class="btn btn-info btn-mod";
		
		_return.push(<p className="clear-top-pad sub-titles">Sizes</p>);
		for (var x = 0; x < self.state.sizes.length; x++) {
			checked = false;
			_class="btn btn-info btn-mod";
			var item = self.state.sizes[x];
			
			if(_.includes(self.state.existing,item.id)){
				checked=true;
				_class+=" active";
				
			}
			_return.push(<label className={_class}><Checkbox defaultChecked={checked} onChange={this.updateValue} value={item.id} />{item.name}</label>);
		}
		
		return _return
	},
	
	getOptions: function(model, callback) {
		superagent
		.get('/api/' + model + '/list?context=relationship&list='+model+'&field=type&limit=2000&filters[type]='+this.props.values.type)
			
			.set('Accept', 'application/json')
			.end(function (err, res) {
				if (err) throw err;

				var data = res.body;

				
					
				callback(model, data);
					
				
			});
	},
	
	renderField: function () {
		

		var body =[];
		var style="display:block;"
		if (this.state.ready){
			
			body.push(<div className="btn-group"  >{this.buildType1()}</div>);
			
			
			body.push(<input type="hidden" ref="focusTarget" name={this.props.path} placeholder={this.props.placeholder} value={this.props.value} className="form-control" />);
			return body
		}
		
		
		return null
	}
});

