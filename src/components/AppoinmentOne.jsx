import React from "react";
import "../Style/appoinment.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function AppoinmentOne() {
  const [validationError, setValidationError] = React.useState(null);
  const validateForm = () => {
    // Basic validation for required fields
    if (!selectedDepartment || !selectedDoctor || !selectedDate) {
      setValidationError("Please fill out all required fields.");
      setTimeout(() => {
        setValidationError(null); // Clear validation error after 3 seconds
      }, 3000);
      return false;
    }
    return true;
  };

  const departmentOptions = [
    { value: "1", label: "Department" },
    { value: "2", label: "Cardiac Clinic" },
    { value: "3", label: "Neurology" },
    { value: "4", label: "Dentistry" },
    { value: "5", label: "Gastroenterology" },
  ];

  const doctorOptions = [
    { value: "1", label: "Doctor" },
    { value: "2", label: "Dr. Akther Hossain" },
    { value: "3", label: "Dr. Dery Alex" },
    { value: "4", label: "Dr. Jovis Karon" },
  ];

  const [selectedDepartment, setSelectedDepartment] = React.useState(null);
  const [selectedDoctor, setSelectedDoctor] = React.useState(null);
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDepartmentChange = (selectedOption) => {
    setSelectedDepartment(selectedOption);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDoctorChange = (selectedOption) => {
    setSelectedDoctor(selectedOption);
  };

  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      department: selectedDepartment?.label,
      doctor: selectedDoctor?.label,
      date: selectedDate,
      message: e.target.message.value,
    };

    if (!validateForm()) {
      return;
    }

    try {
      // Make the API request
      const response = await fetch(
        "https://4c51-115-242-209-74.ngrok-free.app/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Reset form fields
        e.target.reset();
        setSelectedDepartment(null);
        setSelectedDoctor(null);
        setSelectedDate(null);

        // Display success message
        setShowSuccessMessage(true);

        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      } else {
        console.error("Failed to book appointment. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <section className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                <img src="/assets/img/section-img.png" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              {validationError && (
                <div className="alert alert-danger" role="alert">
                  {validationError}
                </div>
              )}

              {showSuccessMessage && (
                <div className="alert alert-success" role="alert">
                  Appointment booked successfully!
                </div>
              )}

              <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="name" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="phone" type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <Select
                        //  style={{ marginLeft: '-135px' }}
                        placeholder="Department"
                        value={selectedDepartment}
                        onChange={handleDepartmentChange}
                        options={departmentOptions}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <Select
                        placeholder="Doctor"
                        value={selectedDoctor}
                        onChange={handleDoctorChange}
                        options={doctorOptions}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="react-datepicker-wrapper">
                        <DatePicker
                          placeholderText="Date"
                          selected={selectedDate}
                          onChange={handleDateChange}
                          dateFormat="MM/dd/yyyy"
                          id="datepicker"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Write Your Message Here....."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-12">
                    <div className="form-group">
                      <div className="button">
                        <button type="submit" className="btn">
                          Book An Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="appointment-image">
                <img src="/assets/img/contact-img.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppoinmentOne;
