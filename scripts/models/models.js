const { DataTypes, TEXT } = require("sequelize");
const { all } = require("../routes/patientRoutes");

const createPatientModel = async (sequelize) => {
  // Define the Patients model
  const Patients = sequelize.define(
    "Patients",
    {
      patientId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      gender: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          isLowercase: true, // Ensure email is lowercase
        },
      },
      dob: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true, // Enable soft deletion
    }
  );

  // Define the Employee model
  const Employee = sequelize.define(
    "Employee",
    {
      empId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      gender: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          isLowercase: true, // Ensure email is lowercase
        },
      },
      dob: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      patientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true, // Enable soft deletion
    }
  );
  //Define Departments Model.
  const Department = sequelize.define(
    "Department",
    {
      deptId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      deptName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      patientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true, // Enable soft deletion
    }
  );

  //Define Model for Medicines

  const Medicines = sequelize.define(
    "Medicines",
    {
      medId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      medName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      cause: {
        type: DataTypes.TEXT(),
        allowNull: true,
      },
      patientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true, // Enable soft deletion
    }
  );
  //Define Appoinemtment Model

  const Appointment = sequelize.define(
    "Appointment",
    {
      appId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      appDate: {
        type: DataTypes.STRING(50),
      },
      reason: {
        type: TEXT,
        allowNull: true,
      },
      patientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true, // Enable soft deletion
    }
  );
  const PatientDepartment = sequelize.define("PatientDepartment", {
    patientId: {
      type: DataTypes.INTEGER,
      references: {
        model: Patients,
        key: "patientId",
      },
    },
    departmentId: {
      type: DataTypes.INTEGER,
      references: {
        model: Department,
        key: "deptId",
      },
    },
  });

  // Define relationships between models
  Employee.belongsTo(Patients, { foreignKey: "patientId" });
  Patients.hasMany(Employee, { foreignKey: "patientId" });
  Patients.hasMany(Medicines, { foreignKey: "patientId" });
  Patients.hasMany(Appointment, { foreignKey: "patientId" });
  Patients.hasMany(Department, { foreignKey: "patientId" });
  Patients.belongsToMany(Department, {
    through: PatientDepartment,
    foreignKey: "patientId",
  });
  Department.belongsToMany(Patients, {
    through: PatientDepartment,
    foreignKey: "departmentId",
  });
  Employee.hasMany(Appointment, { foreignKey: "employeeId" });
  Appointment.belongsTo(Employee, { foreignKey: "employeeId" });
  Medicines.belongsTo(Department, { foreignKey: "departmentId" });
  Department.hasMany(Medicines, { foreignKey: "departmentId" });
  Employee.belongsTo(Department, { foreignKey: "departmentId" });
  Department.hasMany(Employee, { foreignKey: "departmentId" });

  Patients.belongsToMany(Department, {
    through: PatientDepartment,
    foreignKey: "patientId",
  });
  Department.belongsToMany(Patient, {
    through: PatientDepartment,
    foreignKey: "departmentId",
  });

  // Synchronize all models with the database
  await sequelize.sync();

  // Return the models
  return {
    Patients,
    Employee,
    Department,
    Medicines,
    Appointment,
    PatientDepartment,
  };
};

module.exports = { createPatientModel };
