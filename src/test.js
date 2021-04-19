var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "192.168.1.201",
  user: "zk_test",
  database: "zk_test",
  password: "hKSwCezpTfBy5pjn",
});
// connection.connect();
// var  sql = 'select * from test';
// //查
// connection.query(sql,function (err, result) {
//         if(err){
//           console.log('[SELECT ERROR] - ',err.message);
//           return;
//         }
 
//        console.log('--------------------------SELECT----------------------------');
//        console.log(result[0].name);
//        console.log('------------------------------------------------------------\n\n');  
// });
 
// connection.end();

connection.connect();
 
var modSql = 'UPDATE test set name = ? where id = 1';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
//改
connection.query(modSql,modSqlParams,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});