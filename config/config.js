
const mysqlConfig = {  
    mysql:{
        host     : 'localhost',                  
        user     : 'root',                        
        password : 'Telechubi646',               
        database : 'personas'
    }    
};

module.exports = mysqlConfig;   

//NO FUNCIONA EL :ENV!!!!!!!!!!1

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