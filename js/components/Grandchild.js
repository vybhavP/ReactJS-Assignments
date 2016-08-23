var React=require('react');
var Grandchild = React.createClass({
  render :function(){
    return(
      <div>
      <h2>Grandchild</h2>
      <p>In Childcomponent:::::::::{this.props.burger}</p>
      </div>
    );
  }
});
module.exports = Grandchild
