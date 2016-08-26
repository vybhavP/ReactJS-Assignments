var React=require('react');

//components required
var LabelComponent=require('./LabelComponent');
var ModalWindow =require('./ModalWindow');
var LabelFunctionality=require('./LabelFunctionality');

var LeftPanel=React.createClass({ //creating class
  change:function(id){
    this.props.mID(id);
  },
  render:function() //render function
  {
    console.log("inside left panel");
    var data=this.props.allLabelsData.map(function(i) //map for iteration
    //description.id and description.name fetches the values and assign the value to id and name
    // key={id} unique key to iterate the loop
      {
        return(

<div>
            <LabelFunctionality mID2={this.change} g1={i.id}/>
              </div>

        );
      },this
    );

      return(

        <div>
        <ModalWindow />
        
          {data}
        </div>

      );//end of return statement
  }
});
module.exports=LeftPanel;//exporting the LeftPanel
