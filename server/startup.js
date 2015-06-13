if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log("Checking if DB is Empty");
    if (Collections.find().count() === 0) {
      var dt=   moment().format("MM/DD/YYYY");
      var time = moment().format("h:mm a");
      var firstnames = ['Arturo','Erik','Sagar','Sam','Bob','Melissa','Pancho','Loren','Elisa','Bella'];
      var lastnames = ['Montoya','Singh','Hills','Kennedy','Clinton','Trump','Quen','Storen','Villa','Luther'];
      for (i = 1; i <= 10; i++) { 
        var firstname = (firstnames[i%10]).toString();
        var dob =  ([i]%12).toString()+"/"+([i]%28).toString()+"/1994";
        for (j = 1; j < 11; j++) { 
        var lastname = (lastnames[j%10]).toString();
        Collections.insert({"firstName":firstname, "lastName":lastname, "dob":dob });

        }
      }


      Accounts.createUser({
         password: "test",
           email: "test@gmail.com",
           profile: {
             firstname: "test",
             lastname: "test"
           }
         });
  }
  })
}