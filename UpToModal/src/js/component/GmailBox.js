
var React = require('react');

//components that are required
var LeftPanel=require('./LeftPanel');
var RightPanel=require('./RightPanel');
var ModalWindow=require('./ModalWindow');
var loadedData = false;


var GmailBox = React.createClass({
 getInitialState: function() //this function will executes only once at the beginning
   {
     return({allLabelsData:[],inboxData:[]}); //returning the empty array at the beginning
   },
 gmailLogin: function() //function for gmailLogin Authorization
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
   var CLIENTID    =   '122401256733-v8sjqi4gganla48d9f20d2bdfaeg6lh0.apps.googleusercontent.com'; //client_id here
   var REDIRECT    =   'http://localhost:8080'; //after completing the Authorization it will redirects to this address
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600'); //opens new window for Authorization

   var pollTimer   =   window.setInterval(function()
   {

       try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;   //send the token
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.allLabels(); //calling ajax for labels
   this.getmsgIDS('INBOX'); //calling ajax for gmailIDS
   //this.getInbox(); //calling ajax for RightPanel
 },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function for labels
 allLabels: function()
 {
     var accessToken = localStorage.getItem('gToken');
     $.ajax({ //ajax call
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyDQ25IjOBgw2UYXQpSFTmLDtsJrwx_lukk}',//key here
      dataType: 'json',
      type: 'GET',
      async:false,
      beforeSend: function (request) //before sending the request this function will executes for Authorization
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data) //if the Authorization completes successfully then this function will executes
      {
        this.setState({allLabelsData:data.labels}); //assigning data.labels value to allLabelsData
        loadedData=true;
        //console.log(data); //prints the object on success
        //console.log("page loaded successfully");//call once when the page loaded successfully after Authorization
        console.log("inside allLabels function");
      }.bind(this),
      error: function(xhr, status, err) { //if error occurs then this statement will executes
        console.error(err.toString());
      }.bind(this)
   });

 },
//end of labels

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//getting message ids

getmsgIDS: function(mID)
  {
    var accessToken = localStorage.getItem('gToken');
    $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/podalavybhav%40gmail.com/messages?labelIds='+mID+'&maxResults=20&key={AIzaSyDQ25IjOBgw2UYXQpSFTmLDtsJrwx_lukk}',
      dataType: 'json',
      type: 'GET',
      async:false,
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        var arr=[];

        for (var i = 0; i < data.messages.length; i++) {
          //console.log(data.messages[i].id);
          arr.push(this.getInbox(data.messages[i].id));
        }

        this.setState({inboxData:arr});
        console.log(inboxData);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
    });

  },
//end of getting id's

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Inbox
getInbox: function(id)
{
  //console.log(id);
    var accessToken = localStorage.getItem('gToken');
var r=$.ajax({
     url: 'https://www.googleapis.com/gmail/v1/users/podalavybhav%40gmail.com/messages/'+id+'?key={AIzaSyDQ25IjOBgw2UYXQpSFTmLDtsJrwx_lukk}',//key and json object url
     dataType: 'json',
     type: 'GET',
     async:false,
     beforeSend: function (request)
     {
       request.setRequestHeader("Authorization", "Bearer "+accessToken);
     },
     success: function(data)
     {
      // console.log("inside getInbox function");


       //console.log(inboxData);
       //this.setState({inboxData:inboxArray});

     }.bind(this),
     error: function(xhr, status, err) {
       console.error(err.toString());
     }.bind(this)
  });
  return r.responseJSON;

},
//end of inbox
 render:function()
 {
   var leftPanel;
   var rightPanel;

   if(loadedData){
     leftPanel =  <LeftPanel allLabelsData={this.state.allLabelsData} mID={this.getmsgIDS}/>
     rightPanel=  <RightPanel rp={this.state.inboxData} />
     //console.log(this.state.inboxData);
   }

     return(
       /*if we click on button it will call gmailLogin*/

       <div className="GmailBox">
           <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-1">
                  <button id="r-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">SignIn</button>
                  </div>

                  <div className="col-lg-8 pull-right">
                    <h2 id="mailHeading">ReactMails</h2>
                    <hr/>
                  </div>
              </div>
               <div className="row">
                 <div className="col-lg-2">
                    {leftPanel}
                  </div>
                 <div className="col-lg-10">
                 {rightPanel}
                 </div>
               </div>
         </div>
     </div>
     );
 }
 });

module.exports = GmailBox
