const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const PatientMedicines = sequelize.define("PatientMedicines", {
    patientId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Patients",
        key: "patientId",
      },
    },
    medId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Medicines",
        key: "medId",
      },
    },
  });

  return PatientMedicines;
};
