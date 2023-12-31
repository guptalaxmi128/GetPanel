import React,{useState,useEffect} from "react";
import { useGetProfileQuery,  useUpdateProfileMutation, } from "../../../services/signUpApi";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import close from "../../../assets/close.png";

const countries = [
  { country: "Afghanistan", nationality: "Afghan" },
  { country: "Albania", nationality: "Albanian" },
  { country: "Algeria", nationality: "Algerian" },
  { country: "Andorra", nationality: "Andorran" },
  { country: "Argentina", nationality: "Argentinian" },
  { country: "Australia", nationality: "Australian" },
  { country: "Austria", nationality: "Austrian" },
  { country: "Belgium", nationality: "Belgian" },
  { country: "Bolivia", nationality: "Bolivian" },
  { country: "Brazil", nationality: "Brazilian" },
  { country: "Bulgaria", nationality: "Bulgarian" },
  { country: "Cambodia", nationality: "Cambodian" },
  { country: "Canada", nationality: "Canadian" },
  { country: "Chile", nationality: "Chilean" },
  { country: "China", nationality: "Chinese" },
  { country: "Colombia", nationality: "Colombian" },
  { country: "Croatia", nationality: "Croatian" },
  { country: "Cuba", nationality: "Cuban" },
  { country: "Czech Republic", nationality: "Czech" },
  { country: "Denmark", nationality: "Danish" },
  { country: "Ecuador", nationality: "Ecuadorians" },
  { country: "Egypt", nationality: "Egyptian" },
  { country: "England", nationality: "English" },
  { country: "Ethiopia", nationality: "Ethiopian" },
  { country: "Finland", nationality: "Finnish" },
  { country: "France", nationality: "French" },
  { country: "Georgia", nationality: "Georgian" },
  { country: "Germany", nationality: "German" },
  { country: "Greece", nationality: "Greek" },
  { country: "Holland / the Netherlands", nationality: "Dutch" },
  { country: "Honduras", nationality: "Honduran" },
  { country: "Hungary", nationality: "Hungarian" },
  { country: "Iceland", nationality: "Icelander" },
  { country: "India", nationality: "Indian" },
  { country: "Iran", nationality: "Iranian" },
  { country: "Iraq", nationality: "Iraqi" },
  { country: "Ireland", nationality: "Irish" },
  { country: "Israel", nationality: "Israeli" },
  { country: "Italy", nationality: "Italian" },
  { country: "Jamaica", nationality: "Jamaican" },
  { country: "Japan", nationality: "Japanese" },
  { country: "Jordan", nationality: "Jordanian" },
  { country: "Kenya", nationality: "Kenyan" },
  { country: "Korea", nationality: "Korean" },
  { country: "Kuwait", nationality: "Kuwaiti" },
  { country: "Laos", nationality: "Laotian" },
  { country: "Latvia", nationality: "Latvian" },
  { country: "Lebanon", nationality: "Lebanese" },
  { country: "Lithuania", nationality: "Lithuanian" },
  { country: "Malaysia", nationality: "Malaysian" },
  { country: "Mexico", nationality: "Mexican" },
  { country: "New Zealand", nationality: "New Zealander" },
  { country: "Nicaragua", nationality: "Nicaraguan" },
  { country: "Norway", nationality: "Norwegian" },
  { country: "Pakistan", nationality: "Pakistani" },
  { country: "Panama", nationality: "Panamanian" },
  { country: "Peru", nationality: "Peruvian" },
  { country: "Philippines", nationality: "Filipino" },
  { country: "Poland", nationality: "Polish" },
  { country: "Portugal", nationality: "Portuguese" },
  { country: "Puerto Rico", nationality: "Puerto Rican" },
  { country: "Romania", nationality: "Romanian" },
  { country: "Russia", nationality: "Russian" },
  { country: "Saudi Arabia", nationality: "Saudi" },
  { country: "Slovakia", nationality: "Slovak" },
  { country: "Spain", nationality: "Spanish" },
  { country: "Sweden", nationality: "Swedish" },
  { country: "Switzerland", nationality: "Swiss" },
  { country: "Talwan", nationality: "Taiwanese" },
  { country: "Thailand", nationality: "Thai" },
  { country: "Turkey", nationality: "Turkish" },
  { country: "Ukraine", nationality: "Ukrainian" },
  { country: "United States", nationality: "American" },
  { country: "Venezuela", nationality: "Venezuelan" },
  { country: "Vietnam", nationality: "Vietnamese" },
];

const religions = [
  { religion: "Christianity" },
  { religion: "Islam" },
  { religion: "Hinduism" },
  { religion: "Buddhism" },
  { religion: "Sikhism" },
  { religion: "Judaism" },
  { religion: "Baháʼí Faith" },
  { religion: "Confucianism" },
  { religion: "Jainism" },
  { religion: "Shinto" },
  { religion: "Taoism" },
  { religion: "Zoroastrianism" },
];

const ProfileDetails = () => {
  const [userData,setUserData]=useState('');
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("default");
  const [nationality, setNationality] = useState("default");
  const [gender, setGender] = useState("default");
  const [currentAddress, setCurrentAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [religion, setReligion] = useState("default");
  const [occupation, setOccupation] = useState("");
  const [qualification, setQualification] = useState("");
  const [fromWhereHearAboutUs, setFromWhereHearAboutUs] = useState("default");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [name, setName] = useState("");

  const [showAlert,setShowAlert]=useState(false);

 


  const {data,isSuccess}=useGetProfileQuery();
  const handleDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0]; // Assuming you only allow selecting one date
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
    const day = String(selectedDate.getDate()).padStart(2, "0"); // Adding leading zero if needed

    const formattedDate = `${year}-${month}-${day}`;

    setDateOfBirth(formattedDate);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  
  const [updateProfile] = useUpdateProfileMutation();

  const clearTextInput = () => {
    setName("");
    setFatherName("");
    setMotherName("");
    setDateOfBirth(null);
    setCurrentAddress("");
    setDistrict("");
    setGender("default");
    setMaritalStatus("default");
    setQualification("");
    setNationality("default");
    setMaritalStatus("default");
    setOccupation("");
    setReligion("default");
    setFromWhereHearAboutUs("default");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      fatherName,
      motherName,
      maritalStatus,
      nationality,
      gender,
      currentAddress,
      district,
      religion,
      occupation,
      fromWhereHearAboutUs,
      dateOfBirth,
      Qualification: qualification,
      email,
      mobileNumber,
    };
    console.log(formData);
    const res = await updateProfile(formData);
    if(res.data){
     setShowAlert(true);
      console.log(res);
      clearTextInput();
    }
   
  };

  useEffect(() => {
    if (data && isSuccess ) {
   setUserData(data)
   setName(data.name);
   setMobileNumber(data.mobileNumber);
   setEmail(data.email);

    }
  }, [data,isSuccess]);
  console.log(data)

  // To change date format
  function formatDate(dateString) {
    if (!dateString) {
      console.error("Invalid date string.");
      return "";
    }
  
    const dateParts = dateString.split('-');
  
    if (dateParts.length !== 3) {
      console.error("Invalid date format. Expected format: yyyy-mm-dd");
      return "";
    }
  
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
  
    const date = new Date(year, month - 1, day);
  
    if (isNaN(date)) {
      console.error("Invalid date.");
      return "";
    }
  
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  
    return formattedDate;
  }

  const formattedDate = formatDate(userData.dateOfBirth);

  const status = userData.maritalStatus;
  const response = status ? "married" : "unmarried";

  return (
    <>
    {userData.fatherName ? ( <div className="card-text h-full">
    <form className="space-y-4" id="multipleValidation">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="input-area">
          <label htmlFor="name" className="form-label">
            Student's Name
          </label>
          <div className="relative form-control">
          {userData.name}
          </div>
        </div>
        <div className="input-area">
          <label htmlFor="father_name" className="form-label">
            Father's Name
          </label>
          <div className="relative form-control">
          {userData.fatherName}
          </div>
        </div>
        <div className="input-area">
          <label htmlFor="mother_name" className="form-label">
            Mother's Name
          </label>
          <div className="relative form-control">
          {userData.motherName}
          </div>
        </div>

        <div className="input-area">
          <div>
            <label
              htmlFor="default-picker"
              className="form-label"
            >
              Date of Birth
            </label>
            <div className="relative form-control">
            {formattedDate}
            </div>
          </div>
        </div>

        <div className="input-area">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <div className="relative form-control">
          {userData.gender}
          </div>
        </div>

        <div className="input-area">
          <label htmlFor="nationality" className="form-label">
            Nationality{" "}
          </label>
          <div className="relative form-control">
          {userData.nationality}
          </div>
        </div>

        <div className="input-area">
          <label
            htmlFor="current_address"
            className="form-label"
          >
            Current Address
          </label>
          <div className="relative form-control">
          {userData.currentAddress}
          </div>
        </div>

        <div className="input-area">
          <label htmlFor="district" className="form-label">
            District
          </label>
          <div className="relative form-control">
          {userData.district}
          </div>
        </div>

        <div className="input-area">
          <label htmlFor="religion" className="form-label">
            Religion
          </label>
          <div className="relative form-control">
          {userData.religion}
          </div>
        
        </div>

        <div className="input-area">
          <label
            htmlFor="mobile_number"
            className="form-label"
          >
            Mobile Number
          </label>
          <div className="relative form-control">
          {userData.mobileNumber}
          </div>
        </div>

        <div className="input-area">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="relative form-control">
          {userData.email}
          </div>
        </div>

        <div className="input-area">
          <label htmlFor="occupation" className="form-label">
            Occupation
          </label>
          <div className="relative form-control">
          {userData.occupation}
          </div>
        </div>

        <div className="input-area">
          <label htmlFor="status" className="form-label">
            Marital Status
          </label>
          <div className="relative form-control">
          {response}
          </div>
        </div>

        <div className="input-area">
          <label
            htmlFor="qualification"
            className="form-label"
          >
            Qualification
          </label>
          <div className="relative form-control">
          {userData.Qualification}
          </div>
        </div> 

       
      </div>

     
    </form>
  </div>):( <div className="card-text h-full">
                      <form className="space-y-4" id="multipleValidation">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="input-area">
                            <label htmlFor="name" className="form-label">
                              Student's Name
                            </label>
                            <div className="relative">
                              <input
                                id="name"
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Student's Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required="required"
                              />
                            </div>
                          </div>
                          <div className="input-area">
                            <label htmlFor="father_name" className="form-label">
                              Father's Name
                            </label>
                            <div className="relative">
                              <input
                                id="father_name"
                                type="text"
                                name="father_name"
                                className="form-control"
                                placeholder="Father's Name"
                                required="required"
                                value={fatherName}
                                onChange={(e) => setFatherName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="input-area">
                            <label htmlFor="mother_name" className="form-label">
                              Mother's Name
                            </label>
                            <div className="relative">
                              <input
                                id="mother_name"
                                type="text"
                                name="mother_name"
                                className="form-control"
                                placeholder="Mother's Name"
                                required="required"
                                value={motherName}
                                onChange={(e) => setMotherName(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="input-area">
                            <div>
                              <label
                                htmlFor="default-picker"
                                className="form-label"
                              >
                                Date of Birth
                              </label>
                              <div className="relative">
                                <Flatpickr
                                  className="form-control"
                                  id="default-picker"
                                  value={dateOfBirth}
                                  onChange={handleDateChange}
                                  options={{
                                    dateFormat: "Y-m-d",
                                    enableTime: false,
                                    time_24hr: true, // Use 24-hour time format
                                    utc: false, // Set to false if you want to display local time
                                    timeZone: "UTC", // Set the desired time zone
                                  }}
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="input-area">
                            <label htmlFor="gender" className="form-label">
                              Gender
                            </label>
                            <div className="relative">
                              <select
                                id="gender"
                                className="form-control"
                                value={gender}
                                onChange={handleGenderChange}
                              >
                                <option
                                  value="default"
                                  className="dark:bg-slate-700"
                                  disabled
                                >
                                  Select Gender
                                </option>
                                <option
                                  value="Male"
                                  className="dark:bg-slate-700"
                                >
                                  Male
                                </option>
                                <option
                                  value="Female"
                                  className="dark:bg-slate-700"
                                >
                                  Female
                                </option>
                                <option
                                  value="Other"
                                  className="dark:bg-slate-700"
                                >
                                  Other
                                </option>
                              </select>
                            </div>
                          </div>

                          <div className="input-area">
                            <label htmlFor="nationality" className="form-label">
                              Nationality{" "}
                            </label>
                            <div className="relative">
                              <select
                                id="nationality"
                                className="form-control"
                                value={nationality}
                                onChange={handleNationalityChange}
                              >
                                <option
                                  value="default"
                                  className="dark:bg-slate-700"
                                  disabled
                                >
                                  Select Nationality
                                </option>
                                {countries.map((country, index) => (
                                  <option
                                    key={index}
                                    value={country.nationality}
                                    className="dark:bg-slate-700"
                                  >
                                    {country.nationality}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="input-area">
                            <label
                              htmlFor="current_address"
                              className="form-label"
                            >
                              Current Address
                            </label>
                            <div className="relative">
                              <input
                                id="current_address"
                                type="text"
                                name="current_address"
                                className="form-control"
                                placeholder="Current Address"
                                required="required"
                                value={currentAddress}
                                onChange={(e) =>
                                  setCurrentAddress(e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="input-area">
                            <label htmlFor="district" className="form-label">
                              District
                            </label>
                            <div className="relative">
                              <input
                                id="district"
                                type="text"
                                name="district"
                                className="form-control"
                                placeholder="District"
                                required="required"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="input-area">
                            <label htmlFor="religion" className="form-label">
                              Religion
                            </label>
                            <div className="relative">  
                            <select
                              id="religion"
                              className="form-control"
                              value={religion}
                              onChange={(e) => setReligion(e.target.value)}
                            >
                              <option value="default" disabled>
                                Select Religion
                              </option>
                              {religions.map((religion, index) => (
                                <option key={index} value={religion.religion}>
                                  {religion.religion}
                                </option>
                              ))}
                            </select>
                            </div>
                          </div>

                          <div className="input-area">
                            <label
                              htmlFor="mobile_number"
                              className="form-label"
                            >
                              Mobile Number
                            </label>
                            <div className="relative">
                              <input
                                id="mobile_number"
                                type="number"
                                name="mobile_number"
                                className="form-control"
                                placeholder="Mobile Number"
                                value={mobileNumber}
                                disabled
                                // onChange={(e) =>
                                //   setMobileNumber(e.target.value)
                                // }
                                // required="required"
                              />
                            </div>
                          </div>

                          <div className="input-area">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <div className="relative">
                              <input
                                id="email"
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                disabled
                                // onChange={(e) => setEmail(e.target.value)}
                                // required="required"
                              />
                            </div>
                          </div>

                          <div className="input-area">
                            <label htmlFor="occupation" className="form-label">
                              Occupation
                            </label>
                            <div className="relative">
                              <input
                                id="occupation"
                                type="text"
                                name="occupation"
                                className="form-control"
                                placeholder="Occupation"
                                required="required"
                                value={occupation}
                                onChange={(e) => setOccupation(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="input-area">
                            <label htmlFor="status" className="form-label">
                              Marital Status
                            </label>
                            <div className="relative">
                              <select
                                id="status"
                                className="form-control"
                                value={maritalStatus}
                                onChange={(e) =>
                                  setMaritalStatus(e.target.value)
                                }
                              >
                                <option
                                  value="default"
                                  className="dark:bg-slate-700"
                                  selected
                                  disabled
                                >
                                  Select Status
                                </option>
                                <option
                                  value="false"
                                  className="dark:bg-slate-700"
                                >
                                  Unmarried
                                </option>
                                <option
                                  value="true"
                                  className="dark:bg-slate-700"
                                >
                                  Married
                                </option>
                              </select>
                            </div>
                          </div>

                          <div className="input-area">
                            <label
                              htmlFor="qualification"
                              className="form-label"
                            >
                              Qualification
                            </label>
                            <div className="relative">
                              <input
                                id="qualification"
                                type="text"
                                name="qualification"
                                className="form-control"
                                placeholder="Qualification"
                                required="required"
                                value={qualification}
                                onChange={(e) =>
                                  setQualification(e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="input-area">
                            <label htmlFor="social" className="form-label">
                              From where you here about us ?
                            </label>
                            <div className="relative">
                              <select
                                id="social"
                                className="form-control"
                                value={fromWhereHearAboutUs}
                                onChange={(e) =>
                                  setFromWhereHearAboutUs(e.target.value)
                                }
                              >
                                <option
                                  value="default"
                                  className="dark:bg-slate-700"
                                  disabled
                                >
                                  Select Option
                                </option>
                                <option
                                  value="socialmedia"
                                  className="dark:bg-slate-700"
                                >
                                  Social Media
                                </option>
                                <option
                                  value="option2"
                                  className="dark:bg-slate-700"
                                >
                                  Option 2
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <button
                          className="btn inline-flex justify-center btn-dark"
                          type="button"
                          onClick={(e) => handleSubmit(e)}
                        >
                          Submit
                        </button>
                      </form>
                    </div>)}
   
                    {showAlert && (
                <>
                  <div className="alert-modal">
                    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                      <div
                        className="bg-white rounded-md p-6 "
                        style={{
                          width: "500px",
                          height: "150px",
                          borderRadius: "5px",
                          padding: "20px",
                        }}
                      >
                        <img
                          src={close}
                          style={{
                            width: "20px",
                            height: "20px",
                            marginLeft: "445px",
                            marginTop: "3px",
                            marginBottom: "5px",
                            pointer: "cursor",
                          }}
                          alt="close"
                          onClick={() => setShowAlert(false)}
                        />
                        <div className="alert alert-danger light-mode">
                        Congratulations 🎉! Your Profile Details have been Updated!
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
  </>
  );
};

export default ProfileDetails;
