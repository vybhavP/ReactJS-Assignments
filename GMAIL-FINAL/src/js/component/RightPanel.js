var React=require('react');
//var LabelComponent=require('./LabelComponent');
var MailHeaders=require('./MailHeaders');
var TableCreation=require('./TableCreation');

var RightPanel=React.createClass({ //creating class

  getHTMLPart: function(arr)
{
  for(var i = 0; i <= arr.length; i++)
  {
    if(typeof arr[i].parts === 'undefined')
    {
      if(arr[i].mimeType === 'text/html')
      {
        return arr[i].body.data;
      }
    }
    else
    {
      return this.getHTMLPart(arr[i].parts);
    }
  }
  return '';
},
  render:function() //render function
  {
    var vy=this;
    var InboxMail=this.props.rp.map(function(e){

      if(typeof e.payload.parts === 'undefined')
          {
            encodedBody = e.payload.body.data;
          }
          else
          {
            encodedBody = vy.getHTMLPart(e.payload.parts);
          }

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
            <TableCreation mailFrom={from} mailSubject={subject}  mailDate={date} encodedBodyToChild={encodedBody}/>
            </div>
);
    });

    return(
      <div>
      <MailHeaders />
      {InboxMail}
      </div>
    );
  }
});
module.exports=RightPanel;//exporting the RightPanel
