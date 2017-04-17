// var $ = require('jQuery');

function wtf() {
    window.alert("does this fucking work ..?");
}

var transactions = {};
var first_iteration = false;
var first_iteration_lastmonth = false;
var first_iteration_lastyear = false;
var sum = 0;


function testAjax() {
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
            var d = new Date(); 
            var trans_date = new Date(tran.trans_date);
            
          
            
            if(d.getMonth() == trans_date.getMonth()){
                console.log("this happened this month");
                //append this months header here 
                         
                    if(first_iteration == false){
                        do_one_time();
                        first_iteration = true;
                    }
  
                
            }else if(d.getMonth() - trans_date.getMonth() == 1 ){
                console.log("This happened last month");
                //append last month's header here
                
                 if(first_iteration_lastmonth == false){
                        do_one_time_lastmonth();
                        first_iteration_lastmonth = true;
                }
               
            }else if(d.getFullYear() - trans_date.getFullYear() == 1){
                console.log("This happened last year");
                //append last month's header here
                
                 if(first_iteration_lastyear == false){
                        do_one_time_lastyear();
                        first_iteration_lastyear = true;
                }
                    
            }
            
            function do_one_time(){
                    $('ul.table-view').append("<h3 style='background-color:#E0E0E0;'>This Month" + "<hr>" + "</h3>");
                       first_iteration = false;
            }
            
            function do_one_time_lastmonth(){
                    $('ul.table-view').append("<h3 style='background-color:#E0E0E0;'>Last Month" + "<hr>" + "</h3>");
                    first_iteration_lastmonth = false;
            }
            function do_one_time_lastyear(){
                    $('ul.table-view').append("<h3 style='background-color:#E0E0E0;'>Last Year" + "<hr>" + "</h3>");
                    first_iteration_lastyear = false;
            }
            //additional months to go back. maybe even years.
           
            //transaction append statements below the headers
           
//                 $(tran.tran_date).val($.datepicker.formatDate('dd M yy', new Date()));
                var formattedDate = trans_date.getDate() + "-" + (trans_date.getMonth() + 1) + "-" + trans_date.getFullYear();
            
                    $('ul.table-view').append(tran.payment_method + "<p>"+ formattedDate + "<span class='pull-right'>" + "$" + tran.total_amount +"</span></p>" + "<hr>");
                   
                    
                    var val = parseFloat(tran.total_amount);
                    sum+=val;
                    
                     
                  
                    console.log(sum);
                    
                    
        
            });
        
        $('p.expenses').append("Expenses: " + sum);
        
        //Come back and add balnce function in
        
        //var nval = parseFloat(user.yearly_balance);
        //var newBalance = nval - sum;
//        $('p.balance').append("Balance: " + newBalance);
        
    }).fail(function(err){
        console.log(err);               //if error, log to console
          
    })

    console.log("this is a test");      //sanity check to make sure function at least executed to this line if nothing else worked...
    
     
    
    
};