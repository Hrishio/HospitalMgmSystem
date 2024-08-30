class DeptDTO {
  constructor({
    deptName,
    location,
    patientId,
    employeeId,
    createdBy,
    updatedBy,
  }) {
    if (
      !deptName ||
      !location ||
      !patientId ||
      !employeeId ||
      !createdBy ||
      !updatedBy
    ) {
      throw new Error("Missing required fields");
    }
    this.deptName = deptName;
    this.location = location;
    this.patientId = patientId;
    this.employeeId = employeeId;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}

module.exports = DeptDTO;

/*
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
*/
