var React=require('react');
var LabelComponent=require('./LabelComponent');

var RightPanel=React.createClass({ //creating class
  render:function() //render function
  {
    var data=this.props.rc.map(function(e) //iterating through map

      {
        return(
          <div className="list-group-item">
          <table>
          <tr>
          <th>{e.name}:</th>
          <td>{e.value}</td>
          </tr>
          </table>
          </div>
        );//end of return in function
        error: if(err) {
          console.log(err.toString());
        }
      });
      return(
        <div>
          {data}
        </div>
      );//end of return in render function
  }
});
module.exports=RightPanel;//exporting the RightPanel
