var React=require('react');
var Grandchild=require('./Grandchild.js');
var Component1 = React.createClass({
  render :function(){
    return(
      <div>
      <h1>Header</h1>
      <p>In Component1:::::::::{this.props.pizza}</p>
        <p>{this.props.data}</p>
      <Grandchild burger={this.props.pizza}></Grandchild>
      </div>
    );
  }
});
module.exports = Component1
