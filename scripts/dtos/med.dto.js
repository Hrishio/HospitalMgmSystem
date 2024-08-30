class MedDTO {
  constructor({ medName, cause, patientId, employeeId, createdBy, updatedBy }) {
    if (
      !medName ||
      !cause ||
      !patientId ||
      !employeeId ||
      !createdBy ||
      !updatedBy
    ) {
      throw new Error("Missing required fields");
    }
    this.medName = medName;
    this.cause = cause;
    this.patientId = patientId;
    this.employeeId = employeeId;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}

module.exports = MedDTO;
