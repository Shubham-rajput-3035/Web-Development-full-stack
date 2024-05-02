CREATE DATABASE collage;
 CREATE DATABASE xyz_company;

drop database xyz_company;

 

 CREATE TABLE student(
 Roll_num INT,
 Name VARCHAR(30),
 Age INT
 );
 INSERT INTO student
VALUES
 (101,Shubham,18),
 (102,Ankit,29);
 SELECT * FROM student;

show tables;





CREATE DATABASE Instagram;
USE Instagram;
CREATE TABLE user(
id INT,
age INT,
name VARCHAR(50) NOT NULL,
email VARCHAR(30) UNIQUE,
follwer INT DEFAULT 0,
following INT,
PRIMARY KEY(id), 
CONSTRAINT age_check CHECK(age>=13)
);


INSERT INTO user
(id,age,name,email,follwer,following)
VALUES
(1,14,"Aman","aman53467@email.com",156,80),
(2,23,"shivam","shivam5785@gmail.com",580,290);


create table post(
id int primary key,
contents varchar(100),
users int,
foreign key(users) references user(id)
);



CREATE DATABASE school;
USE school;
CREATE TABLE student(
roll_num INT,
age INT,
name VARCHAR(50) NOT NULL,
subjective_teacher VARCHAR(30),
marks INT,
PRIMARY KEY(roll_num)
);

INSERT INTO student
(roll_num,age,name,subjective_teacher,marks)
VALUES
(101,18,"Shubham Singh","Pankaj Sir",98),
(102,19,"Ankit Singh","Amit Sir",68),
(103,20,"Shivam Singh","Gunjan Sir",78),
(104,22,"Rahul Singh","Abhishek Sir",68),
(105,28,"Aman Singh","Pankaj Sir",88);

SELECT name 
FROM student
WHERE age>18
LIMIT 3;

CREATE TABLE teacher(
teacher_code INT,
age INT,
subjects INT,
name VARCHAR(50) NOT NULL,
salary INT,
PRIMARY KEY(teacher_code),
FOREIGN KEY(subjects) REFERENCES student(subject_code)
);
INSERT INTO teacher
(teacher_code,age,subjects,name,salary)
VALUES
(111,48,789,"Pankaj Sir",9800),
(122,39,568,"Amit Sir",6800),
(133,50,965,"Gunjan Sir",7800),
(144,42,987,"Abhishek Sir",6800),
(155,48,896,"Pankaj Sir",8000);
