Meteor.methods({
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

