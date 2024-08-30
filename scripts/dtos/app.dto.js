class AppDTO {
  constructor({
    appDate,
    reason,
    patientId,
    employeeId,
    createdBy,
    updatedBy,
  }) {
    if (
      !appDate ||
      !reason ||
      !patientId ||
      !employeeId ||
      !createdBy ||
      !updatedBy
    ) {
      throw new Error("Missing required fields");
    }
    this.appDate = appDate;
    this.reason = reason;
    this.patientId = patientId;
    this.employeeId = employeeId;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}

module.exports = AppDTO;
