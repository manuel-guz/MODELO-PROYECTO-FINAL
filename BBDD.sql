create database quokka;

use quokka;

create table users(
    id_user int not null auto_increment,
    usuario varchar(60) not null,
    email_user  varchar(60) not null,
    contraseña varchar(120) not null,
    primary key (id_user)
);


create table WO(
    id_cliente int not null auto_increment,
    nombre varchar(60) not null,
    email_cliente  varchar(60) not null,
    tipo_trabajo varchar(120) not null,
    fecha varchar(60) not null,
    telefono int(20)  unsigned not null,
    id_user int not null,
    primary key (id_cliente),
	foreign key (id_user) references users (id_user)  
);



DATOS DE HEROKU:


CLEARDB_DATABASE_URL



mysql://

                USERNAME:  baa299a13fe6a5
:
                PASSWORDD: e65d8e91
@
                HOSTNAME:  us-cdbr-east-04.cleardb.com
/
                DBname: heroku_d7430de00b0cf5e

?reconnect=true

en heroku la DB estaba como utf8    utf8-bin  -----se pasa a---> utf8-unicode