var React=require('react');

var TableManibulation=React.createClass({

render:function(){
    return(
      <div className="container">
        <button type="button" className="btn btn-info btn-md" data-toggle="modal" data-target="#myModal" id="composebtn">Compose</button>

      <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">

      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">close</button>
          <h4 className="modal-title">Modal Header</h4>
        </div>
        <div className="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
  </div>
    );
  }
});
module.exports=TableManibulation;
