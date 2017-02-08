# Group18

# Dev Notes:
DB tables / Web API is handled by Azure Easy Tables & Easy APIs
no ./tables directory will be maintained in this git repo and all edits to tables will take place in azure's "Easy \*" functionaility

-M.Gillespie 02/07/17

# Current Web Service / API model: 
<table>
<tr>
<th>Operation</th>
<th>URI</th>
<th>Description</th>
</tr>
<tr>
  <td>GET</td>
  <td>/tables/tablename</td>
  <td>Get all records in the table</td>
</tr>
<tr>
  <td>GET</td>
  <td>/tables/tablename/:id</td>
  <td>Get a specific record in the table</td>
</tr>
<tr>
  <td>POST</td>
  <td>/tables/tablename</td>
  <td>Create a record in the table</td>
</tr>
<tr>
  <td>PATCH</td>
  <td>/tables/tablename/:id</td>
  <td>Update a record in the table</td>
</tr>
<tr>
  <td>DELETE</td>
  <td>/tables/tablename/:id</td>
  <td>Delete a record in the table</td>
</tr>
</table>

# Current Tables
- Transaction
(Data model to follow)
