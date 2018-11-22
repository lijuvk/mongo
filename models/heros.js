var express = require('express');
var mysql=require('mysql2');
    
let Heros= {}
//get all heros from the database
Heros.getAll = function(){
	return new Promise(function(resolve,reject){
		
	
   
	//create connection to database
	const connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		database:'heros',
		password:'ccs#123'
	});


    let query ='select * from hero where is_valid=1';
    connection.query(query,function(err,result,fields){
    	if(err){
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();



    	}
    	else
    	{
    		//console.log(result);
    		//console.log(fields);
    		resolve(result);
    	}
    });
});
   }
Heros.saveNew = function(newHeroData){
	return new Promise(function(resolve,reject){
		
	
   
	//create connection to database
	const connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		database:'heros',
		password:'ccs#123'
	});

	let query=`insert into hero(superhero,publisher,alter_ego,first_appearence,characters,is_valid,update_time) values('${newHeroData.superhero}','${newHeroData.publisher}','${newHeroData.alter_ego}','${newHeroData.first_appearence}','${newHeroData.characters}',1,'${new Date()}')`;

	connection.query(query,function(err,result,fields){
    	if(err){
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();



    	}
    	else
    	{
    		
    		resolve();
    	}
    });
});
}
Heros.delete = function(newHeroData){
	return new Promise(function(resolve,reject){
		
	
   
	//create connection to database
	const connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		database:'heros',
		password:'ccs#123'
	});

	let query=`update hero set is_valid=0 where id='${newHeroData.id}'`;

	connection.query(query,function(err,result,fields){
    	if(err){
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();



    	}
    	else
    	{
    		
    		resolve();
    	}
    });
});


}

Heros.viewHero=function(newHeroData){
	return new Promise(function(resolve,reject){
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			database: 'heros',
			password : 'ccs#123'
		});
		let query=`select * from hero where id='${newHeroData.id}'`;
		connection.query(query,function(err, result, fields){
			if(err) {
				console.log(err);
				console.log('ERR :: fetching data from database');
				reject();
			}
			else{
			//console.log(result);
			//console.log(fields);
				resolve(result);
			}
		});
	});
}
     module.exports = Heros;
 