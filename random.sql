create table PatientNames(
	patient_names_id serial primary key,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
	gender char(1) not null,
	address varchar(255) not null,
	email varchar(100) not null,
	dob date not null,
	phone_number varchar(30) not null,
	patient_id int
);


create table EmployeeNames(
	employee_names_id serial primary key,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
	gender char(1) not null,
	address varchar(255) not null,
	email varchar(100) not null,
	dob date not null,
	phone_number varchar(30) not null,
	dept varchar(50),
	patient_id integer
);

create table Appointments(
	app_id serial primary key,
	app_date timestamp not null,
	reason text
);

create table Departments(
	dept_id serial primary key,
	dept_name varchar(50) not null,
	dept_location varchar(50) not null,
	emp_id integer
);

create table Medicines(
	medicine_id serial primary key,
	medicine_name varchar(50) not null,
	cause text
);


create table PatientEmployee(
	pe_id serial primary key,
	patient_names varchar(50),
	patient_names_id int,
	employee_names_id int,
	foreign key (patient_names_id) references PatientNames(patient_names_id),
	foreign key (employee_names_id) references EmployeeNames(employee_names_id)
)
	
create table PatientRecords(
	record_id serial primary key,
	patient_names_id integer,
	employee_names_id integer,
	app_id integer,
	dept_id integer,
	medicine_id integer,
	foreign key(patient_names_id) references PatientNames(patient_names_id),
	foreign key(employee_names_id) references EmployeeNames(employee_names_id),
	foreign key(app_id) references Appointments(app_id),
	foreign key(dept_id) references Departments(dept_id),
	foreign key(medicine_id) references Medicines(medicine_id)
)


INSERT INTO PatientNames (first_name, last_name, gender, address, email, dob, phone_number, patient_id) VALUES
('John', 'Doe', 'M', '123 Elm St', 'john.doe@example.com', '1985-06-15', '555-123-4567',1),
('Jane', 'Smith', 'F', '456 Maple Ave', 'jane.smith@example.com', '1990-09-25', '555-234-5678',2),
('Alice', 'Johnson', 'F', '789 Oak Dr', 'alice.johnson@example.com', '1982-03-10', '555-345-6789',1),
('Bob', 'Williams', 'M', '321 Pine Ct', 'bob.williams@example.com', '1978-12-05', '555-456-7890',5),
('Carol', 'Jones', 'F', '654 Cedar Rd', 'carol.jones@example.com', '1995-07-20', '555-567-8901',3),
('David', 'Brown', 'M', '987 Birch Blvd', 'david.brown@example.com', '1988-11-30', '555-678-9012',1),
('Eve', 'Davis', 'F', '135 Walnut St', 'eve.davis@example.com', '1992-04-18', '555-789-0123',4),
('Frank', 'Miller', 'M', '246 Oak Dr', 'frank.miller@example.com', '1981-10-02', '555-890-1234',3),
('Grace', 'Wilson', 'F', '369 Maple St', 'grace.wilson@example.com', '1989-05-15', '555-901-2345',2),
('Henry', 'Moore', 'M', '741 Pine Ave', 'henry.moore@example.com', '1994-01-28', '555-012-3456',1),
('Ivy', 'Taylor', 'F', '852 Cedar Ln', 'ivy.taylor@example.com', '1983-08-22', '555-123-6789',4),
('Jack', 'Anderson', 'M', '963 Oak Blvd', 'jack.anderson@example.com', '1987-11-15', '555-234-7890',3),
('Kathy', 'Thomas', 'F', '147 Birch St', 'kathy.thomas@example.com', '1991-02-10', '555-345-8901',1),
('Liam', 'Jackson', 'M', '258 Walnut Dr', 'liam.jackson@example.com', '1986-09-17', '555-456-9012',3),
('Mia', 'White', 'F', '369 Cedar Ct', 'mia.white@example.com', '1993-12-25', '555-567-0123',2),
('Nate', 'Harris', 'M', '741 Maple Ave', 'nate.harris@example.com', '1984-06-09', '555-678-1234',1),
('Olivia', 'Martin', 'F', '852 Pine Dr', 'olivia.martin@example.com', '1990-03-05', '555-789-2345',5),
('Paul', 'Clark', 'M', '963 Oak St', 'paul.clark@example.com', '1987-10-30', '555-890-3456',2),
('Quinn', 'Lee', 'F', '147 Cedar Ave', 'quinn.lee@example.com', '1995-07-12', '555-901-4567',1),
('Rita', 'Walker', 'F', '258 Maple Blvd', 'rita.walker@example.com', '1982-11-20', '555-012-5678',3),
('Sam', 'Hall', 'M', '369 Birch Dr', 'sam.hall@example.com', '1991-05-15', '555-123-6789',1);


INSERT INTO EmployeeNames (first_name, last_name, gender, address, email, dob, phone_number, dept, patient_id) VALUES
('James', 'Morris', 'M', '123 Pine Street', 'james.morris@company.com', '1980-01-10', '555-111-2233', 'Cardiology',1),
('Sarah', 'Adams', 'F', '456 Elm Road', 'sarah.adams@company.com', '1985-04-22', '555-222-3344', 'Neurology',2),
('Robert', 'Brown', 'M', '789 Maple Lane', 'robert.brown@company.com', '1978-08-15', '555-333-4455', 'Orthopedics',1),
('Emily', 'Wilson', 'F', '321 Oak Avenue', 'emily.wilson@company.com', '1992-11-30', '555-444-5566', 'Pediatrics',5),
('Michael', 'Johnson', 'M', '654 Cedar Drive', 'michael.johnson@company.com', '1989-06-05', '555-555-6677', 'Emergency',3),
('Laura', 'Martinez', 'F', '987 Birch Court', 'laura.martinez@company.com', '1983-09-12', '555-666-7788', 'Radiology',1),
('David', 'Garcia', 'M', '135 Walnut Street', 'david.garcia@company.com', '1981-03-25', '555-777-8899', 'Oncology',4),
('Jennifer', 'Lee', 'F', '246 Oak Drive', 'jennifer.lee@company.com', '1990-12-04', '555-888-9900', 'Internal Medicine',3),
('Daniel', 'Harris', 'M', '369 Maple Avenue', 'daniel.harris@company.com', '1987-07-18', '555-999-1001', 'Surgery',2),
('Jessica', 'Clark', 'F', '741 Birch Road', 'jessica.clark@company.com', '1993-10-09', '555-100-2112', 'Dermatology',1),
('Matthew', 'Lewis', 'M', '852 Pine Lane', 'matthew.lewis@company.com', '1986-05-19', '555-211-3223', 'Cardiology',4),
('Amy', 'Walker', 'F', '963 Cedar Street', 'amy.walker@company.com', '1991-08-02', '555-322-4334', 'Neurology',3),
('Joshua', 'Allen', 'M', '147 Oak Road', 'joshua.allen@company.com', '1988-01-15', '555-433-5445', 'Orthopedics',1),
('Amanda', 'Young', 'F', '258 Maple Court', 'amanda.young@company.com', '1984-12-28', '555-544-6556', 'Pediatrics',3),
('Ryan', 'Scott', 'M', '369 Birch Avenue', 'ryan.scott@company.com', '1995-11-20', '555-655-7667', 'Emergency',2),
('Samantha', 'King', 'F', '741 Oak Street', 'samantha.king@company.com', '1992-06-11', '555-766-8778', 'Radiology',1),
('Andrew', 'Wright', 'M', '852 Maple Lane', 'andrew.wright@company.com', '1987-03-07', '555-877-9889', 'Oncology',5),
('Elizabeth', 'Mitchell', 'F', '963 Pine Drive', 'elizabeth.mitchell@company.com', '1990-10-14', '555-988-1000', 'Internal Medicine',2),
('Christopher', 'Roberts', 'M', '147 Cedar Road', 'christopher.roberts@company.com', '1983-05-22', '555-100-1111', 'Surgery',1),
('Olivia', 'Turner', 'F', '258 Birch Lane', 'olivia.turner@company.com', '1994-02-09', '555-111-2222', 'Dermatology',3),
('John', 'Parker', 'M', '369 Oak Court', 'john.parker@company.com', '1986-11-30', '555-222-3333', 'Cardiology',1);


INSERT INTO Medicines (medicine_name, cause, patient_names_id) VALUES
('Aspirin', 'Pain relief and anti-inflammatory', 1),
('Amoxicillin', 'Bacterial infections', 2),
('Lisinopril', 'High blood pressure', 3),
('Metformin', 'Type 2 diabetes', 4),
('Omeprazole', 'Acid reflux and stomach ulcers', 5),
('Simvastatin', 'High cholesterol', 5),
('Ibuprofen', 'Pain relief and fever reduction', 4),
('Albuterol', 'Asthma and COPD', 2),
('Atorvastatin', 'High cholesterol', 1),
('Clopidogrel', 'Prevent blood clots', 1),
('Losartan', 'High blood pressure', 1),
('Prednisone', 'Inflammatory conditions', 2),
('Warfarin', 'Prevent blood clots', 2),
('Amlodipine', 'High blood pressure and chest pain', 3),
('Cetirizine', 'Allergic reactions', 4),
('Metoprolol', 'High blood pressure and heart conditions', 16),
('Levothyroxine', 'Hypothyroidism', 3),
('Furosemide', 'Fluid retention (edema) and high blood pressure', 3),
('Hydrochlorothiazide', 'High blood pressure and fluid retention', 1),
('Gabapentin', 'Nerve pain and seizures', 5);

INSERT INTO Appointments (app_date, reason, patient_names_id) VALUES
('2024-08-01 09:30:00', 'Routine check-up', 1),
('2024-08-01 10:00:00', 'Follow-up on blood test results', 2),
('2024-08-01 11:15:00', 'Consultation for chronic back pain', 3),
('2024-08-01 13:00:00', 'Review of medication for hypertension', 4),
('2024-08-01 14:30:00', 'Annual physical examination', 5),
('2024-08-02 08:45:00', 'Initial consultation for diabetes management', 6),
('2024-08-02 10:15:00', 'Skin rash evaluation', 7),
('2024-08-02 11:45:00', 'Discussion of lab results', 8),
('2024-08-02 13:30:00', 'Pre-surgery consultation', 9),
('2024-08-02 15:00:00', 'Follow-up on X-ray results', 10),
('2024-08-03 09:00:00', 'Consultation for anxiety and stress management', 11),
('2024-08-03 10:30:00', 'Review of allergy symptoms', 12),
('2024-08-03 12:00:00', 'Consultation for persistent headaches', 13),
('2024-08-03 14:00:00', 'Post-surgery check-up', 14),
('2024-08-03 15:30:00', 'Follow-up on MRI scan', 15),
('2024-08-04 09:15:00', 'Consultation for digestive issues', 16),
('2024-08-04 10:45:00', 'Review of vaccination status', 17),
('2024-08-04 12:30:00', 'Consultation for weight management', 18),
('2024-08-04 14:15:00', 'Discussion of heart health and cholesterol', 19),
('2024-08-04 15:45:00', 'Follow-up on recent hospital discharge', 20);

INSERT INTO Departments (dept_name, dept_location, emp_id) VALUES
('Cardiology', 'Building A, Floor 3',1),
('Neurology', 'Building B, Floor 2',2),
('Oncology', 'Building C, Floor 1',1),
('Pediatrics', 'Building A, Floor 2',4),
('Radiology', 'Building D, Floor 1',1),
('Emergency', 'Building E, Ground Floor',5),
('Orthopedics', 'Building F, Floor 2',4),
('Dermatology', 'Building B, Floor 1',3),
('Gastroenterology', 'Building C, Floor 3',2),
('Gynecology', 'Building G, Floor 1',1);

insert into PatientEmployee(patient_names_id, employee_names_id, patient_names) values 
(1, 1, 'John Doe'),
(2, 2, 'Jane Smith'),
(3, 3, 'Alice Johnson'),
(4, 4, 'Bob Brown'),
(5, 5, 'Charlie Davis'),
(6, 6, 'Diana Evans'),
(7, 7, 'Edward Clark'),
(8, 8, 'Fiona Lewis'),
(9, 9, 'George Walker'),
(10, 10, 'Hannah White'),
(11, 11, 'Ian Martinez'),
(12, 12, 'Julia Thompson'),
(13, 13, 'Kevin Lee'),
(14, 14, 'Liam Scott'),
(15, 15, 'Mia Turner'),
(16, 16, 'Noah Adams'),
(17, 17, 'Olivia Nelson'),
(18, 18, 'Paul King'),
(19, 19, 'Quinn Wright'),
(20, 20, 'Rachel Green'),
(21, 21, 'Samuel Roberts');


--Code for testing the database and their duplicasy
SELECT 
    pr.medicine_id, 
    pr.app_id, 
    COUNT(*) 
FROM 
    PatientRecords pr
GROUP BY 
    pr.medicine_id, 
    pr.app_id
HAVING 
    COUNT(*) > 1;

DELETE FROM PatientRecords pr
WHERE ctid NOT IN (
    SELECT min(ctid)
    FROM PatientRecords
    GROUP BY medicine_id, app_id
);



--Assignment Questions
-- 1.- Write a query to fetch all records from the Patients table.

select * from PatientNames

-- 2.- Write a query to fetch details of employees in a particular department.
	
select * from EmployeeNames

-- 3.- Write a query to fetch all records from the medicines table prescribed by a specific employee.

alter table Medicines
add column employee_names_id integer

alter table Medicines
add constraints fk_emp_id
foreign key (employee_names_id)
references EmployeeNames(employee_names_id);

select * from Medicines where employee_names_id = 1

-- 4.- Write a query to fetch appointment details for a patient using their patient_id.

alter table Appointments
add column patient_names_id integer

alter table Appointments
add constraint patient_names_id
foreign key(patient_names_id)
references PatientNames(patient_names_id)

truncate Appointments
--Ans
select * from Appointments
left join PatientNames
on Appointments.patient_names_id = PatientNames.patient_names_id where Appointments.patient_names_id = 1

-- 5.- Write a query to fetch details of all departments.

select * from Departments

-- 6.- Write a query to count the number of appointments handled by a specific employee.
select count(*) as total_appointments
from Appointments
left join PatientNames
on Appointments.patient_names_id = PatientNames.patient_names_id
where Appointments.patient_names_id = 1;

-- 7.- Write a query to fetch all patients assigned to a specific employee using employee_id.

alter table PatientNames
add column employee_names_id integer;

alter table PatientNames
add constraint employee_names_id
foreign key (employee_names_id)
references EmployeeNames(employee_names_id)

alter table PatientEmployee
	add column patient_names varchar(50);

select patient_names, PatientEmployee.employee_names_id from PatientEmployee
	left join EmployeeNames
	on PatientEmployee.employee_names_id = EmployeeNames.employee_names_id where PatientEmployee.employee_names_id = 1;

-- 8.- Write a query to count the number of employees in each department.

select 
e.dept as dept_name,
	count(e.employee_names_id) as employee_count from EmployeeNames e
	group by e.dept;


-- 9.- Write a query to fetch appointment details between two specific dates.

select * from Appointments
	where app_date between '2024-08-01 09:30:00' and '2024-08-03 09:00:00';

-- 10.- Write a query to count the number of medicines prescribed to each patient.
alter table Medicines
add column patient_names_id integer;

	select
	count(m.medicine_id) as medicine_count from Medicines as m
	where m.patient_names_id = 4;

-- 11.-	Write a query to fetch details of patients with a specific condition using the patient_records table.


insert into PatientRecords(patient_names_id, employee_names_id, app_id, dept_id, medicine_id)
	select p.patient_names_id, e.employee_names_id, a.app_id, d.dept_id, m.medicine_id from Patientnames p
	join Appointments a on p.patient_names_id = a.patient_names_id
	join EmployeeNames e on e.employee_names_id = a.patient_names_id
	join Departments d on d.emp_id = e.employee_names_id
	join Medicines m on m.patient_names_id = p.patient_names_id;


select
	p.patient_names_id,
	p.first_name,
	p.last_name,
	p.address,
	p.gender,
	p.email,
	p.dob,
	p.phone_number,
	m.medicine_name,
	a.app_date,
	a.reason as app_reason,
	e.first_name as emp_firstname,
	e.last_name as emp_lastname
from
	PatientRecords pr
	join PatientNames p on pr.patient_names_id = p.patient_names_id
	join Medicines m on m.medicine_id = pr.medicine_id
	join Appointments a on a.app_id = pr.app_id
	join Departments d on d.dept_id = pr.dept_id
	join EmployeeNames e on e.employee_names_id = pr.employee_names_id
where
	m.medicine_name = 'Aspirin';

-- 12.-	Write a query to fetch employee names in a specific department using department_id.
select e.first_name, e.last_name, d.dept_name from EmployeeNames e 
	join Departments d on e.employee_names_id = d.emp_id where d.dept_name = 'Cardiology'


-- 13.-	Write a query to fetch medicine names and their use cases.
select m.medicine_name,m.cause from Medicines m

	
-- 14.-	Write a query to fetch details of appointments assigned to a specific patient.
select a.app_id, a.app_date, a.reason, a.patient_names_id from Appointments a where patient_names_id = 1

-- 15.- Write a query to calculate the total revenue from appointments if cost information is available.

select sum(a.cost) as total_revenue from Appointments a ;



-- 16.- Write a query to fetch all patients along with their assigned doctors.

select
	p.patient_names_id,
	p.first_name as pa_firstname,
	p.last_name as pa_lastname,
	e.employee_names_id,
	e.first_name as em_firstname,
	e.last_name as em_lastname
from
	PatientNames p 
join
	PatientEmployee pe on p.patient_names_id = pe.patient_names_id
join
	EmployeeNames e on pe.employee_names_id = e.employee_names_id;
	
-- 17.-	Write a query to fetch department details in a specific location.

select d.dept_name, d.dept_id
from Departments d
where d.dept_location like '%Building A%';

-- 18.-	Write a query to fetch medicines prescribed to a specific patient.

select m.medicine_name, m.cause, m.patient_names_id from Medicines m where m.patient_names_id = 1

-- 19.-	Write a query to fetch the most recent appointment details.
select a.app_id, a.app_date, a.reason from Appointments a order by a.app_date desc limit 1

-- 20.-	Write a query to fetch all employees and count the number of departments they are associated with.

select e.dept, count(*) as total_employees from EmployeeNames e  group by e.dept

-- 21.-	Write a query to fetch details of employees who prescribed a specific medicine.
select e.first_name, e.last_name, pr.medicine_id from PatientRecords pr join EmployeeNames e on e.employee_names_id = pr.employee_names_id
	where pr.medicine_id = 5
	
-- 22.-	Write a query to fetch appointment details for a specific department using dept_id.;
select 
	a.app_date, a.reason, a.app_id , d.dept_name
	from Appointments a 
	join PatientRecords pr on a.app_id = pr.app_id
	join Departments d on pr.dept_id = d.dept_id where d.dept_id = 5;

-- 23.-	Write a query to count the number of employees in each location if location information is available.

select count(*), dept_id, dept_name as total_employees from Departments group by  dept_id;


-- 24.-	Write a query to fetch details of patients who have never had an appointment.
select p.patient_names_id, p.first_name, p.last_name, p.gender 
from PatientNames p 
left join Appointments a on p.patient_names_id = a.patient_names_id 
where a.app_id is null

-- 25.-	Write a query to count the number of appointments handled by a specific department.

select count(*) as total_appointments from PatientRecords where dept_id = 10

-- 26.-	Write a query to fetch details of patients who have never been assigned to an employee.

select p.first_name, p.last_name, p.gender 
from PatientNames p
join PatientRecords pr on p.patient_names_id = pr.patient_names_id
where pr.employee_names_id is null;

-- 27.-	Write a query to fetch department details along with their patients.;

select distinct d.dept_name, d.dept_location, p.first_name, p.last_name
from PatientNames p
join PatientRecords pr on p.patient_names_id = pr.patient_names_id
join Departments d on pr.dept_id = d.dept_id; --Distinct keyword is used to only select distinct records from the database 


-- 28.-	Write a query to fetch patients along with the count of their appointments.

-- select patient_names_id, count(*) from Appointments group by patient_names_id

select p.patient_names_id, p.first_name, p.last_name, p.gender, count(a.app_id) as app_count
from PatientNames p
left join Appointments a on p.patient_names_id = a.patient_names_id
group by p.patient_names_id, p.first_name, p.last_name, p.gender;



-- 29.-	Write a query to fetch medicine details prescribed during a specific appointment.

select m.medicine_id, m.medicine_name, m.cause
from Medicines m
join PatientRecords pr on m.medicine_id = pr.medicine_id
join Appointments a on pr.app_id = a.app_id
where a.app_id = 5;

-- 30.Write a query to fetch details of the department generating the highest revenue if cost information is available.


select d.dept_id, d.dept_name, max(d.revenue) as heighest_revenue from Departments d 

-- 31.-	Write a query to fetch employee details along with the patients they are assigned to.

select pe.patient_names, e.first_name, e.last_name
from PatientEmployee pe 
join EmployeeNames e on pe.employee_names_id = e.employee_names_id;


-- 32.-	Write a query to calculate the average age of patients in a specific department.

select avg(patient_age) as average_age from Patient_names group by patient_age;

-- 33.-	Write a query to fetch appointment details handled by a specific employee.

select distinct 
    a.app_id,
    a.app_date,
    a.reason,
    e.first_name AS employee_first_name,
    e.last_name AS employee_last_name
from 
    Appointments a
join 
    PatientRecords pr ON a.app_id = pr.app_id
join 
    EmployeeNames e ON pr.employee_names_id = e.employee_names_id
where 
    e.employee_names_id = 1;


-- 34.-	Write a query to fetch details of medicines prescribed during a specific time period.
select distinct m.medicine_name, m.cause, a.app_date 
from Medicines m 
join PatientRecords pr on m.medicine_id = pr.medicine_id
join Appointments a on pr.app_id = a.app_id
where a.app_date  between '2024-08-01 09:30:00' and '2024-08-03 15:30:00'

-- 35.-	Write a query to fetch details of the appointment with the longest duration if duration information is available.
select app_id, start_time, end_time, (start_time - end_time) as duration 
from Appointments
order by duration desc
limit 1;

-- 36.-	Write a query to count the number of patients handled by a specific employee.
select e.first_name as employe_first_name,
e.last_name as employee_first_name,
count(distinct p.patient_names_id) as patient_count
from EmployeeNames e
join PatientRecords pr on e.employee_names_id = pr.employee_names_id
join PatientNames p on pr.patient_names_id = p.patient_names_id
where e.employee_names_id = 1
group by e.first_name, e.last_name;

-- 37.-	Write a query to fetch patients who have availed a specific service if service information is available.
select 
    p.first_name, 
    p.last_name, 
    s.service_name
from 
    PatientNames p
join 
    PatientRecords pr ON p.patient_names_id = pr.patient_names_id
join 
    Services s ON pr.service_id = s.service_id
where 
    s.service_name = 'X-Ray';

-- 38. Write a query to fetch details of patients who are currently hospitalized if hospitalization information is available
select p.first_name as patient_firstname, p.last_name as patient_lastname 
from PatientNames p 
where isHospatilized = true;

-- 39.-	Write a query to fetch department details along with the count of employees.
select d.dept_id, d.dept_name, d.dept_location, count(e.employee_names_id) as employee_count  
from Departments d
join PatientRecords pr on d.dept_id = pr.dept_id
join EmployeeNames e on pr.employee_names_id = e.employee_names_id
group by d.dept_id, d.dept_name, d.dept_location;

-- 40.-	Write a query to count the number of appointments made in the current year.
SELECT COUNT(*)
FROM Appointments
WHERE EXTRACT(YEAR FROM app_date) = EXTRACT(YEAR FROM CURRENT_DATE);

-- 41. Write a query to fetch appointment details with a total amount greater than a specific value if cost information is available.

select 
    a.app_id, 
    a.app_date, 
    a.reason, 
    sum(a.cost) as total_amount
from 
    Appointments a
group by 
    a.app_id, 
    a.app_date, 
    a.reason
having 
    sum(a.cost) > 500;

-- 42-	Write a query to fetch employee details along with the count of handled appointments.
select e.first_name, e.last_name, count(a.app_id) from EmployeeNames e
join PatientRecords pr on e.employee_names_id = pr.employee_names_id
join Appointments a on pr.app_id = a.app_id
group by e.first_name, e.last_name

	-- 43.-	Write a query to fetch details of patients who have appointments with multiple employees.
select p.patient_names_id, p.first_name, p.last_name, count(distinct pr.employee_names_id) as employee_count
from PatientNames p
join Appointments a on p.patient_names_id = a.patient_names_id
join PatientRecords pr on a.app_id = pr.app_id
group by p.patient_names_id, p.first_name, p.last_name
having count(distinct pr.employee_names_id) > 1

-- 44.-	Write a query to fetch details of the most frequently prescribed medicine.
select m.medicine_name, m.cause, count(m.medicine_id) as prescription_count from Medicines m
join PatientRecords pr on m.medicine_id = pr.medicine_id
group by m.medicine_name, m.cause
order by prescription_count desc
limit 1

-- 45.-	Write a query to fetch appointment details along with their dates.
select a.app_date, a.reason from Appointments a


-- 46.-	Write a query to calculate the total revenue generated by a specific employee if cost information is available.

	---------------------------------
-- select e.employee_names_id, sum(revenue) as employee_revenue from EmployeeNames e
-- group by e.employee_names_id
-- having employee_names_id = 1

select e.employee_names_id, sum(pr.revenue) as employee_revenue
from EmployeeNames e
join PatientRecords pr on e.employee_names_id = pr.employee_names_id
where e.employee_names_id = 1
group by e.employee_names_id;



-- 47.-	Write a query to fetch medicine details along with their use cases in a specific department.
select m.medicine_id, m.medicine_name, m.cause, d.dept_name from Medicines m
join PatientRecords pr on m.medicine_id = pr.medicine_id
join Departments d on pr.dept_id = d.dept_id
where dept_name = 'Cardiology';

-- 48.-	Write a query to fetch details of the patient with the highest number of appointments.
select p.patient_names_id, p.first_name, p.last_name, count(a.app_id) as app_count from PatientNames p
join Appointments a on p.patient_names_id = a.patient_names_id
group by p.patient_names_id, p.first_name, p.last_name
order by app_count desc
limit 1;

-- 49.-	Write a query to fetch appointment details along with the medicines prescribed.
select a.app_date, a.reason, m.medicine_name, m.cause from Appointments a
join PatientRecords pr on a.app_id = pr.app_id
join Medicines m on pr.medicine_id = m.medicine_id

-- 50.-	Write a query to fetch employee details along with the departments they are associated with.
select distinct e.employee_names_id, e.first_name, e.last_name, d.dept_name, d.dept_location from EmployeeNames e
join PatientRecords pr on e.employee_names_id = pr.employee_names_id
join Departments d on pr.dept_id = d.dept_id;




select * from PatientNames
select * from EmployeeNames
select * from Appointments
select * from Departments
select * from Medicines
select * from PatientEmployee
select * from PatientRecords







