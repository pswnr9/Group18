var day = 0;


google.charts.load('current', {packages: ['corechart']});

    google.charts.setOnLoadCallback(drawChart2);
    
  
    
function drawChart2() {
     
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
        
            //if month = current, add each transaction to table
            var d = new Date(); 
            var trans_date = new Date(tran.trans_date);
            
            
            console.log("day: "+ trans_date.getDate());
            
         
                  
          
      
        
       
          
        });
  
         
        function makeGraph(){
                var data = google.visualization.arrayToDataTable([
            ['Product', 'X', 'Y', 'Price'],
            ['',  day,  4000,  120],
            ]);
        
                var options = {
                    colorAxis: {colors: ['darkblue', 'lightblue']}, 
                    height:200,
                };

       

        var chart = new google.visualization.BubbleChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
        }
    
    }).fail(function(err){
        console.log(err);               //if error, log to console
          
    })
     
    };