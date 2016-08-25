var React=require('react');
var TableCreation=React.createClass({
  render:function(){

  return(
    <div className="list-group-item">
      {this.props.fr}
      {this.props.sub}
      {this.props.dt}
    </div>
  );
}
});

module.exprots=TableCreation;
