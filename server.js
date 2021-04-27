const http = require("http");
const mysql = require("mysql");

http
  .createServer((request, response) => {
    var connection = mysql.createConnection({
      host: "192.168.1.201",
      user: "zk_test",
      database: "zk_test",
      password: "hKSwCezpTfBy5pjn",
    });
    if (request.url == "/getTest") {
      connection.connect();
      connection.query("select * from test", function(err, result) {
        if (err) {
          console.log("[SELECT ERROR] - ", err.message);
          return;
        } else {
          console.log(result);
          response.end(JSON.stringify(result));
        }
      });
    }
    // postTest()
    
  })
  .listen(9527);

// 获取数据
let path, get, post;

  // 改;
function putTest() {
  // var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
  var modSqlParams = ["菜鸟移动站", "https://m.runoob.com", 6];

  connection.query(
    "UPDATE test set name = ? where id = 1",
    modSqlParams,
    function(err, result) {
      if (err) {
        console.log("[UPDATE ERROR] - ", err.message);
        return;
      }
      console.log("UPDATE affectedRows", result.affectedRows);
    }
  );
  
}

function postTest() {
  //增
  var addSql = "INSERT INTO test(name,age) VALUES(?,?)";
  var addSqlParams = ["jack",18];
  connection.query(addSql, addSqlParams, function(err, result) {
    if (err) {
      console.log("[INSERT ERROR] - ", err.message);
      return;
    }

    console.log("--------------------------INSERT----------------------------");
    //console.log('INSERT ID:',result.insertId);
    console.log("INSERT ID:", result);
    console.log(
      "-----------------------------------------------------------------\n\n"
    );
  });

  connection.end();
}

 function deleteTest() {
  var delSql = "DELETE FROM test where id=0";
  //删
  connection.query(delSql, function(err, result) {
    if (err) {
      console.log("[DELETE ERROR] - ", err.message);
      return;
    }

    console.log("--------------------------DELETE----------------------------");
    console.log("DELETE affectedRows", result.affectedRows);
    console.log(
      "-----------------------------------------------------------------\n\n"
    );
  });

  connection.end();
}
