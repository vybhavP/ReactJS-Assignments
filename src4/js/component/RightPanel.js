var React=require('react');
//var LabelComponent=require('./LabelComponent');
var TableManibulation=require('./TableManibulation');
var TableCreation=require('./TableCreation');

var RightPanel=React.createClass({ //creating class
  render:function() //render function
  {
    var InboxMail=this.props.rp.map(function(e){

               var from;
               var subject;
               var date;
               for(var i=0;i<e.payload.headers.length;i++){
                    if(e.payload.headers[i].name=="From"){
                      from=e.payload.headers[i].value;
                    }
                    if(e.payload.headers[i].name=="Subject"){
                      subject=e.payload.headers[i].value;
                    }
                    if(e.payload.headers[i].name=="Date"){
                      date=e.payload.headers[i].value;
                    }
               }

         return(
           <div>
            <TableCreation mailFrom={from} mailSubject={subject}  mailDate={date} />
            </div>
);
    });

    return(
      <div>
      <TableManibulation />
      {InboxMail}
      </div>
    );
  }
});
module.exports=RightPanel;//exporting the RightPanel
