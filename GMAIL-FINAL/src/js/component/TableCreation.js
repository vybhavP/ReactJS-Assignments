var React=require('react');
var ViewMail=require('./ViewMail');

var TableCreation=React.createClass({

  getInitialState: function()
    {
      return({status:false});
    },
    change:function(){

    this.setState({status:true});
    },
    changeMsg:function(){

    this.setState({status:false});
    },

render:function(){
    return(
      <div className="list-group-item">
        <div className="container-fluid">

	         <div className="row">

		            <div className="col-lg-3">
                  {this.props.mailFrom}
		            </div>

		            <div className="col-lg-7">
                <a href="#ViewMail" data-toggle="modal"  id="modal" onClick={this.change}> {this.props.mailSubject}</a>
                  {this.state.status?<ViewMail  changeMsg={this.changeMsg} mFrom={this.props.mailFrom} mSubject={this.props.mailSubject} mDate={this.props.mailDate} mEncodedBody={this.props.encodedBodyToChild}/>:null}
		            </div>

		            <div className="col-lg-2">
                  {this.props.mailDate}
		            </div>

	          </div>
        </div>
      </div>

    );

  }
});
module.exports=TableCreation;
