import mysql from 'mysql2'

const connection = mysql.createConnection("mysql://uldpdjetvtqvc3bc:exTA0aDoYamKOg3zS9My@b6rzyrdp4xwc5tq1p9dx-mysql.services.clever-cloud.com:3306/b6rzyrdp4xwc5tq1p9dx")

connection.connect((err)=>{
     if(err){
        console.log('Error connecting to the database', err)
        
     }
})
export default connection