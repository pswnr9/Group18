var Jan = 0;
var Feb = 0;
var March = 0;
var April = 0;
var May = 0;
var June = 0;
var July = 0;
var Aug = 0;
var Sep = 0;
var Oct = 0;
var Nov = 0;
var Dec = 0;


google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);
  
    
function drawChart() {
     
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
        
            
            var d = new Date(); 
            var trans_date = new Date(tran.trans_date);
         
            
            if(trans_date.getMonth() == 0){
                console.log("January " + trans_date);
                var val = parseFloat(tran.total_amount);
                Jan+=val; 
                
            }
            if(trans_date.getMonth() == 1){
                console.log("Febuary " + trans_date);
                var val = parseFloat(tran.total_amount);
                Feb+=val;
                
            }
            if(trans_date.getMonth() == 2){
                console.log("March " + trans_date);
                var val = parseFloat(tran.total_amount);
                March+=val;
                
            }
            if(trans_date.getMonth() == 3){
                console.log("April " + trans_date);
                var val = parseFloat(tran.total_amount);
                April+=val;
                
            }
            if(trans_date.getMonth() == 4){
                console.log("May " + trans_date);
                var val = parseFloat(tran.total_amount);
                May+=val;
                
            }
            if(trans_date.getMonth() == 5){
                console.log("June " + trans_date);
                var val = parseFloat(tran.total_amount);
                June+=val;
                
            }
            if(trans_date.getMonth() == 6){
                console.log("July " + trans_date);
                var val = parseFloat(tran.total_amount);
                July+=val;
                
            }
            if(trans_date.getMonth() == 7){
                console.log("August " + trans_date);
                var val = parseFloat(tran.total_amount);
                Aug+=val;
                
            }
            if(trans_date.getMonth() == 8){
                console.log("Septemeber " + trans_date);
                var val = parseFloat(tran.total_amount);
                Sep+=val;
                
            }
            if(trans_date.getMonth() == 9){
                console.log("October " + trans_date);
                var val = parseFloat(tran.total_amount);
                Oct+=val;
                
            }
            if(trans_date.getMonth() == 10){
                console.log("November " + trans_date);
                var val = parseFloat(tran.total_amount);
                Nov+=val;
                
            }
            if(trans_date.getMonth() == 11){
                console.log("December " + trans_date);
                var val = parseFloat(tran.total_amount);
                Dec+=val;
                
            }
        });
        
        
     console.log("Jan: " + Jan + "Feb: " + Feb + "March: " + March +"April: " + April + "May: " + May +"June: " + June + "July: " + July + "Aug: " + Aug +"Sep: "+ Sep +"Nov: " + Nov + "Dec: " + Dec);
      
        
      var data = google.visualization.arrayToDataTable([
        ['Genre', 'Jan', 'Feb', 'March', 'April',
         'May', 'June','July','Aug','Sep','Oct','Nov','Dec', { role: 'annotation' }],
        ['2016', Jan, Feb, March, April, May, June, July, Aug, Sep, Oct, Nov, Dec, ''],
        
      ]);

      var options = {
    
        height: 50,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '100%' },
        isStacked: true,
          colorAxis: {colors: ['yellow', 'lightblue']}
      };


      // Instantiate and draw the chart.
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
        
    
    
    }).fail(function(err){
        console.log(err);               //if error, log to console
          
    })
     
    };