const db = require('../util/database');


module.exports={

    createEmployeeDetails : function(req,res,next){
        if (!req.body.employeeName || !req.body.employeeOrg || !req.body.employeeLoc) {
            return res.status(400).json({
              message: "Please fillup all details",
            });
          } else {           
            db.execute('INSERT INTO employees (employeeName, employeeOrg, employeeLoc) VALUES (?,?,?)',
            [req.body.employeeName,req.body.employeeOrg,req.body.employeeLoc]).then(result=>{
              return res.status(200).json({
                isError: false,
                message: "Employee inserted successfully",
                statuscode: 200,
                details: result
              });
            }).catch(err=>{
              return res.status(400).json({
                isError: true,
                message: "Failed",
                statuscode: 500,
                details: err
              });
            });
          }
    },

    readAllEmployeeDetails : function(req,res,next){
       db.execute('SELECT * FROM employees').then(([rows])=>{
        return res.status(200).json({
          isError: false,
          message: "Employee details",
          statuscode: 200,
          details: rows
        });
       }).catch(err=>{
        return res.status(400).json({
          isError: true,
          message: "Failed",
          statuscode: 500,
          details: err
        });
        }
       )
    },

    updateEmployeeDetails : function(req,res,next){
        if (!req.body.employeeId || !req.body.employeeName || !req.body.employeeOrg || !req.body.employeeLoc) {
            return res.status(404).json({
              message: "Please fillup all details",
            });
          }

          db.execute('UPDATE employees SET employeeName = ? , employeeOrg=? , employeeLoc=? WHERE employeeId=?',
          [req.body.employeeName, req.body.employeeOrg, req.body.employeeLoc, req.body.employeeId]).then(result=>{
            return res.status(200).json({
              isError: false,
              message: "Employee details updated successfully",
              statuscode: 200,
              details: result
            });
          }).catch(err=>{
            return res.status(400).json({
              isError: true,
              message: "Some error occured",
              statuscode: 501,
              details: err
            });
          }) 
    },

    deleteEmployeeDetails : function(req,res,next){
        if (!req.body.employeeId ) {
            return res.status(404).json({
              message: "Please send employeeid to delete",
            });
          }
        
        db.execute('DELETE FROM employees WHERE employeeId=?',[req.body.employeeId]).then(result=>{
          return res.status(200).json({
            isError: false,
            message: "Deleted successfully",
            statuscode: 200,
            details: result
          });
        }).catch(err=>{
          return res.status(400).json({
            isError: true,
            message: "Some error occured",
            statuscode: 502,
            details: err
          });
        })    
    }

    
}