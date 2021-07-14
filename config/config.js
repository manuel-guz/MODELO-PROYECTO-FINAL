
const mysqlConfig = {  
    mysql:{
        host     : 'us-cdbr-east-04.cleardb.com',                  
        user     : 'baa299a13fe6a5',                        
        password : 'e65d8e91',               
        database : 'heroku_d7430de00b0cf5e'
    }    
};

module.exports = mysqlConfig;   


/*
host     : 'localhost',                  
    user     : 'root',                        
    password : 'Telechubi646',               
    database : 'personas'

 host     : process.env.HOST,                  
    user     : process.env.USER,                        
    password : process.env.PASSWORD,               
    database : process.env.DATABASE
*/