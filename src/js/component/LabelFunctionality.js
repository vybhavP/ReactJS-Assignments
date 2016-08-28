var React=require('react');

var LabelFunctionality=React.createClass({
  change:function(){
    console.log(this.props.g1);
    this.props.mID2(this.props.g1);
  },
  render:function()
  {
    console.log("inside label functionality");
    return(
      <div>
      <button onClick={this.change}>{this.props.g1}</button>
      </div>
    );
  }
});
module.exports=LabelFunctionality
