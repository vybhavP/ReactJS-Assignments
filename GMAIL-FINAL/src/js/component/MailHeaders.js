var React=require('react');

var MailHeaders=React.createClass({

render:function(){
    return(
      <div className="list-group-item">
        <div className="container-fluid">
        <div className="row">

           <div className="col-lg-3" id="from">
            <h4>from</h4>
           </div>

           <div className="col-lg-7" id="subject">
            <h4>subject</h4>
           </div>

           <div className="col-lg-2" id="date">
            <h4> date</h4>
           </div>

         </div>
        </div>
      </div>

    );

  }
});
module.exports=MailHeaders
