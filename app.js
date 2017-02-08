var express = require('express');
var azureMobileApps = require('azure-mobile-apps');

var app = express();
var mobile = azureMobileApps();

 // Define a TodoItem table
// mobile.tables.add('TodoItem');

 // Add the mobile API so it is accessible as a Web API
// app.use(mobile);

 // Start listening on HTTP
// app.listen(process.env.PORT || 3000);

// Provide initialization of any tables that are statically defined
mobile.tables.initialize().then(function () {
    // Add the mobile API so it is accessible as a Web API
    app.use(mobile);

    // Start listening on HTTP
    app.listen(process.env.PORT || 3000);
});
