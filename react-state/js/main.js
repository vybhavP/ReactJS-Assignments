var React=require('react');
var ReactDom=require('react-dom');

var Child1=require('./components/Component1.js');
var Child2=require('./components/Component2.js');
var Child3=require('./components/Component3.js');
var Child4=require('./components/Component4.js');

var MainComponent=React.createClass({
	render :function(){
		return(
			<div className="container">

				<div className="col-lg-12">
					<Child1 pizza = "pizza called in main.js"/>
				</div>

				<div className="col-lg-4">
					<Child2/>
				</div>

				<div className="col-lg-8">
					<Child3/>
				</div>

				<div className="col-lg-12">
				<Child4/>
				</div>

			</div>//end of container
		);
	}
})
ReactDom.render(<MainComponent/>,
document.getElementById('app'));
