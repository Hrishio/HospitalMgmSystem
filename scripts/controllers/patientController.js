//Create new patient:
exports.createPatient = async (req, res) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  const {
    first_name,
    last_name,
    gender,
    address,
    email,
    dob,
    phone_number,
    employee_id,
    createdBy,
    updatedBy,
  } = req.body;
  console.log("Request body:", req.body);
  try {
    // Check if SchemaModel is available
    if (!SchemaModel) {
      return res.status(500).json({ error: "Database model not found" });
    }
    if (
      !first_name ||
      !last_name ||
      !gender ||
      !address ||
      !email ||
      !dob ||
      !phone_number ||
      !employee_id ||
      !createdBy ||
      !updatedBy
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create a new patient entry
    const patient = await SchemaModel.Patients.create({
      first_name,
      last_name,
      gender,
      address,
      email,
      dob,
      phone_number,
      employee_id,
      createdBy,
      updatedBy,
    });

    return res.status(201).json({ message: "Patient Added", patient });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//GetAll patients.
exports.getAllPatients = async (req, res) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  try {
    // Check if SchemaModel is available
    if (!SchemaModel) {
      return res.status(500).json({ error: "Database model not found" });
    }

    // Fetch all patients
    const allPatients = await SchemaModel.Patients.findAll();
    if (!allPatients.length) {
      return res.status(404).json({ error: "Patients not found" });
    }

    return res.status(200).json(allPatients);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Get [patient by ID]:

exports.updatePatient = async (req, res) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  let patientId = req.params.patientId;
  try {
    console.log(req.body);
    const patient = await SchemaModel.Patients.update(req.body, {
      where: { patientId },
    });
    if (patient[0] === 0) {
      res.status(404).json({ Error: "Patient Not found" });
    }
    return res.status(201).json({ message: "Updated Successfuly", patient });
  } catch (error) {
    console.log("Error : ", error);
    res.status(404).json({ Error: "Internal Server Error" });
  }
};

//Delete Patient:

exports.deletePatient = async (req, res) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  let patientId = req.params.patientId;

  try {
    const patient = await SchemaModel.Patients.findOne({
      where: { patientId: req.params.patientId },
    });
    if (patient == null) {
      return res.status(404).json({ message: "Not found" });
    }
    await patient.destroy();
    return res.status(200).json({ message: "Deleted Successfuly" });
  } catch (error) {
    res.status(404).json({ message: "Internal Server Error" });
  }
};

//Find Patient by ID:
exports.findPatientById = async (req, res) => {
  const { connection, getSchemaModel } = require("../../database.js");
  const SchemaModel = getSchemaModel();
  let patientId = req.params.patientId;

  try {
    const patient = await SchemaModel.Patients.findOne({
      where: { patientId: patientId },
    });
    if (patient == null) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.status(200).json({ message: "Found Patient", patient });
  } catch (error) {
    res.status(404).json({ message: "Patient with mentioned Id is not found" });
  }
};

/*
This logic is for refrence of how to use deletedAt field in industry level.

    const foundPatient = SchemaModel.Patients.findOne({
      where: { deletedAt: !null },
    });
    if (foundPatient == 0) {
     const foundPatient = SchemaModel.Patients.findOne({
      where: { deletedAt: !null },
    });
    if (foundPatient == 0) {
      const patient = await SchemaModel.Patients.create({
        first_name,
        last_name,
        gender,
        address,
        email,
        dob,
        phone_number,
        employee_id,
        createdBy,
        updatedBy,
      });

    } else {
      res.status(404).json({ message: "already Deleted" });
    }
*/
