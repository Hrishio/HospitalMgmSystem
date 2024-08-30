class PatientDTO {
  constructor({
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
  }) {
    if (!first_name || !last_name || !email || !dob) {
      throw new Error("Missing required fields");
    }

    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.address = address;
    this.email = email;
    this.dob = dob;
    this.phone_number = phone_number;
    this.employee_id = employee_id;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}

module.exports = PatientDTO;
