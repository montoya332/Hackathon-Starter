twilio = Twilio('gC6psbhf4dg8b15392rpsbhf6psbhf82g8', '6psbhfe1401f7dg22e1dfg4fa6psbhf7');

Meteor.methods({
  sendTwilioMessage: function (sendTo,message) {
    this.unblock();
    twilio.sendSms({
      to: sendTo,  // any number twilio can deliver to
      from: '+16508888887', // A number you bought from Twilio and can use for outbound communication
      body:  message // body of the SMS message
    }, function(err, responseData) { //this function is executed when a response is received from Twilio
      if (!err) { // "err" is an error received during the request, if any
        // "responseData" is a JavaScript object containing data received from Twilio.
        console.log(responseData.from); // outputs "+14506647788"
        console.log(responseData.body); // outputs "word to your mother."
      }
      else {console.log("Error:", err);}
    });
  },

  getTwilioMessage: function (sentFrom) {
    twilio.listSms({
      from: sentFrom //'+16508888887'
    }, function (err, responseData) {
      if (!err) { 
        console.log(responseData); 
      }
      else {console.log("Error:", err);}
    });
  }

  // getRecords: function (params) {
  //   console.log("get Records");
  //     if (this.userId) {
  //     return Collections.find({
  //    $and: [
  //    {firstName: {$regex: '^'+params.firstName, $options: 'i'}},
  //    {lastName: {$regex: '^'+params.lastName, $options: 'i'}}
  //    ]
  //  },{
  //    limit: 20
  //   },{sort: {lastName: 1, firstName: 1}}).fetch();
  //     } else {        
  //       return null;              
  //       }
  //     },
    
  //,
});

function uniq_Id() {
  function s1() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return moment().format("MM/DD/YYYY") + '-' + s1() + '-' + s1() + '-' +
    s1() + '-' + s1() ;
}

function uniq_fast(arr) {
    var seen = {};
    var out = [];
    var len = arr.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = arr[i];
         //console.log( item._id)
         if(seen[item._id] !== 1) {
               seen[item._id] = 1;
               out[j++] = item;
         }
    }
    console.log("Input:", arr.length, "Ouput:", out.length);
    return out;
}

function uniq_fastIds(arr) {
    var seen = {};
    var out = [];
    var len = arr.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = arr[i];
         //console.log( item._id)
         if(seen[item._id] !== 1) {
               seen[item._id] = 1;
               out[j++] = item._id;
         }
    }
    console.log("Input:", arr.length, "Ouput:", out.length);
    return out;
}

