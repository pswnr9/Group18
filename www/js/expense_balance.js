// var $ = require('jQuery');

function wtf() {
    window.alert("does this fucking work ..?");
}

var transactions = {};
var first_iteration = false;
var first_iteration_lastmonth = false;
var first_iteration_lastyear = false;
var sum = 0;
var monthval = "";


function expenses() {
    $.ajax({
        url: "http://pockethsamanager.azurewebsites.net/tables/Transaction", //url to access Easy Tables - Transaction table specifically
        headers: {
            'ZUMO-API-VERSION': '2.0.0' //required header by Azure & Easy Tables for all Ajax requests to work
        },
        method: "GET"                   //GET to this url will return all records in the Transaction table
    }).done(function(data) {
        console.dir(data);              //displaying response object (data - should be Json formatted) in console; I had to run a local MAMP server and run html files from browser to get console output, not sure how to dothis in xcode 
        transactions = data;            //saves response to Js object 'transactions' which can be accessed by any html page with this .js file reference
        //window.alert("FUck yea!");
        transactions.forEach( function(tran) {
            console.dir(tran);
  
                    var val = parseFloat(tran.total_amount);
                    sum+=val;
                
            
                    
                    
        
            });
        
        $('p.expenses').append("Expenses: " + sum);
        
        //Come back and add balnce function in
        
        //var nval = parseFloat(user.yearly_balance);
        //var newBalance = nval - sum;
//        $('p.balance').append("Balance: " + newBalance);
        var d = new Date(); 
    
         
            
            if(d.getMonth() == 0){
          
                 monthval = "January";
                
            }
            if(d.getMonth() == 1){
             
                monthval = "Febuary";
                
            }
            if(d.getMonth() == 2){
              
                monthval = "March";
                
            }
            if(d.getMonth() == 3){
               
                monthval = "April";
                
            }
            if(d.getMonth() == 4){
           
                monthval = "May";
                
            }
            if(d.getMonth() == 5){
               
                monthval = "June";
                
            }
            if(d.getMonth() == 6){
              
                monthval = "July";
                
            }
            if(d.getMonth() == 7){
                
              
               monthval = "August";
                
            }
            if(d.getMonth() == 8){
              
                monthval = "September";
                
            }
            if(d.getMonth() == 9){
            
                monthval = "October";
                
            }
            if(d.getMonth() == 10){
               
               
                monthval = "Novmember";
                
            }
            if(d.getMonth() == 11){
              
              
                monthval = "December";
                
            }
        
        console.log("month val: "+monthval);
        $("p.month2").append(monthval);
        
    }).fail(function(err){
        console.log(err);               //if error, log to console
          
    })

    console.log("this is a test");      //sanity check to make sure function at least executed to this line if nothing else worked...
    
     
    
    
};