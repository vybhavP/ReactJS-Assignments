var React=require('react');

//components required
var LabelComponent=require('./LabelComponent');
var ModalWindow =require('./ModalWindow');
var LabelFunctionality=require('./LabelFunctionality');

var LeftPanel=React.createClass({ //creating class

  getInitialState: function(){
  return({modalWindow:false});
  },

  onClicking:function(){
    this.setState({modalWindow:true});
    },

  change:function(id){
  this.props.mID(id);
  },

  render:function(){ //render function

    console.log("inside left panel");
    var data=this.props.allLabelsData.map(function(i){ //map for iteration
    //description.id and description.name fetches the values and assign the value to id and name
    // key={id} unique key to iterate the loop
    if(i.id=="INBOX"||i.id=="SENT"||i.id=="UNREAD"||i.id=="DRAFT"||i.id=="SPAM"){
    return(
      <div>
      <LabelFunctionality mID2={this.change} g1={i.id}/>
      </div>
    );
  }
  },this
  );
  var modalWindow=this.state.modalWindow?<ModalWindow/>:null;//if modalWindow is true then the modalWindow will appear otherwise null
  return(
    <div>
      <a href="#myModal" role="button" className="btn btn-primary" data-toggle="modal"  id="modalWindow" onClick={this.onClicking}>Compose</a>
      {modalWindow}
      {data}
    </div>
  );//end of return statement
}
});
module.exports=LeftPanel;//exporting the LeftPanel
