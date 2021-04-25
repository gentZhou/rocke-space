//这个文件是所有的结构请求函数的文件
//每一个请求接口数据功能都给它定义一个函数,以后哪里需要去请求数据,就调用对应的这个接口函数就好了
import Ajax from '@/ajax/Ajax'  //引入暴露出来的instance

export const reqData = () => {
    return Ajax({
        url: '/getTest',
        method: 'get'
    })
};


// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "192.168.1.201",
//   user: "zk_test",
//   database: "zk_test",
//   password: "hKSwCezpTfBy5pjn",
// });

// export function getTest() {
//   // 查
// connection.connect();
//   connection.query("select * from test", function(err, result) {
//     if (err) {
//       console.log("[SELECT ERROR] - ", err.message);
//       return;
//     } else {
//       console.log(result);
//       return result;
//     }
//   });
//   // console.log('getTest')
// }
// console.log(getTest())

//   // 改;
// export function putTest() {
//   // var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
//   var modSqlParams = ["菜鸟移动站", "https://m.runoob.com", 6];

//   connection.query(
//     "UPDATE test set name = ? where id = 1",
//     modSqlParams,
//     function(err, result) {
//       if (err) {
//         console.log("[UPDATE ERROR] - ", err.message);
//         return;
//       }
//       console.log("UPDATE affectedRows", result.affectedRows);
//     }
//   );
// }

// export function postTest() {
//   //增
//   var addSql = "INSERT INTO test(name) VALUES(?,?)";
//   var addSqlParams = ["jack"];
//   connection.query(addSql, addSqlParams, function(err, result) {
//     if (err) {
//       console.log("[INSERT ERROR] - ", err.message);
//       return;
//     }

//     console.log("--------------------------INSERT----------------------------");
//     //console.log('INSERT ID:',result.insertId);
//     console.log("INSERT ID:", result);
//     console.log(
//       "-----------------------------------------------------------------\n\n"
//     );
//   });

//   connection.end();
// }

// export function deleteTest() {
//   var delSql = "DELETE FROM test where id=0";
//   //删
//   connection.query(delSql, function(err, result) {
//     if (err) {
//       console.log("[DELETE ERROR] - ", err.message);
//       return;
//     }

//     console.log("--------------------------DELETE----------------------------");
//     console.log("DELETE affectedRows", result.affectedRows);
//     console.log(
//       "-----------------------------------------------------------------\n\n"
//     );
//   });

//   connection.end();
// }
