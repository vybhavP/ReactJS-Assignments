var React=require('react');

var About=React.createClass({

  render:function()
  {

    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
             <h1>AboutUs{this.props.params.aboutName}</h1>
             </div>
            </div>
          </div>
        </div>
    );
  }
});
module.exports=About
