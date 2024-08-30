module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PatientMedicines", {
      patientId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Patients",
          key: "patientId",
        },
      },
      medId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Medicines",
          key: "medId",
        },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("PatientMedicines");
  },
};
