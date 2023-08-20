import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Plus } from "react-feather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import edit from "../../assets/edit.png";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Dialog, DialogContent } from "@mui/material";
import close from "../../assets/close.png";
import {
  useAddCourseDocumentMutation,
  useAddverifyOTPForUpdateCourseMutation,
  useDeleteCourseDocumentMutation,
  useGetCourseQuery,
  useGetOTPForUpdateCourseQuery,
} from "../../services/signUpApi";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const YourQualification = () => {
  const navigate = useNavigate();
  const closeIconRef = useRef(null);
  const [currentData, setCurrentData] = useState([]);
  const [highSchoolData, setHighSchoolData] = useState([]);
  const [interData, setInterData] = useState([]);
  const [graduationData, setGraduationData] = useState([]);
  const [postGraduationData, setPostGraduationData] = useState([]);

  const [openPopup, setOpenPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [openPdf, setOpenPdf] = useState("");
  const [openFileType, setOpenFileType] = useState("");

  const [highPopup, setHighPopup] = useState(false);
  const [highImage, setHighImage] = useState("");
  const [highPdf, setHighPdf] = useState("");
  const [highFileType, setHighFileType] = useState("");

  const [interPopup, setInterPopup] = useState(false);
  const [interImage, setInterImage] = useState("");
  const [selectedPdf, setSelectedPdf] = useState("");
  const [selectedFileType, setSelectedFileType] = useState("");

  const [graduationPopup, setGraduationPopup] = useState(false);
  const [graduationImage, setGraduationImage] = useState("");
  const [graduationPdf, setGraduationPdf] = useState("");
  const [graduationFileType, setGraduationFileType] = useState("");

  const [postGraduationPopup, setPostGraduationPopup] = useState(false);
  const [postGraduationImage, setPostGraduationImage] = useState("");
  const [postGraduationPdf, setPostGraduationPdf] = useState("");
  const [postGraduationFileType, setPostGraduationFileType] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  const [showHighModal, setShowHighModal] = useState(false);
  const [showInterModal, setShowInterModal] = useState(false);
  const [showGraduationModal, setShowGraduationModal] = useState(false);
  const [showPostGraduationModal, setShowPostGraduationModal] = useState(false);

  const [highId, setHighId] = useState("");
  const [highOtp, setHighOtp] = useState("");

  const [interId, setInterId] = useState("");
  const [interOtp, setInterOtp] = useState("");

  const [id, setId] = useState("");
  const [currentOtp, setCurrentOtp] = useState("");

  const [graduationId, setGraduationId] = useState("");
  const [graduationOtp, setGraduationOtp] = useState("");

  const [postGraduationId, setPostGraduationId] = useState("");
  const [postGraduationOtp, setPostGraduationOtp] = useState("");

  const localHost = "http://localhost:5000";
  // const localHost="https://global-education-t.onrender.com"
  const { data, isSuccess } = useGetCourseQuery();
  useEffect(() => {
    if (data && isSuccess && data.data.length > 0) {
      const currentCourse = data.data.find((item) => item.onGoing === true);
      const highSchoolCourse = data.data.find(
        (item) => item.courseLevel === "High School" && item.onGoing === false
      );
      const interCourse = data.data.find(
        (item) => item.courseLevel === "Intermediate" && item.onGoing === false
      );
      const graduationCourse = data.data.find(
        (item) => item.courseLevel === "Graduation" && item.onGoing === false
      );
      const postGraduationCourse = data.data.find(
        (item) =>
          item.courseLevel === "Post Graduation" && item.onGoing === false
      );
      setCurrentData(currentCourse ? [currentCourse] : []);
      setHighSchoolData(highSchoolCourse ? [highSchoolCourse] : []);
      setInterData(interCourse ? [interCourse] : []);
      setGraduationData(graduationCourse ? [graduationCourse] : []);
      setPostGraduationData(postGraduationCourse ? [postGraduationCourse] : []);
    }
  }, [data, isSuccess]);

  console.log(currentData);
  console.log(highSchoolData)

  useEffect(() => {
    const ids = highSchoolData.map((item) => item.id).join(", ");
    setHighId(ids);
  }, [highSchoolData]);
  // console.log(highId)

  const { data: sendRequest, isSuccess: sendRequestIsSuccess } =
    useGetOTPForUpdateCourseQuery(highId);

  const handleRequest = () => {
    if (sendRequestIsSuccess) {
      if (sendRequest.success) {
        toast.success(sendRequest.message);
        setShowHighModal(false);
      } else {
        toast.error(sendRequest.message);
      }
    } else {
      toast.error("Request already sent to Global Education Trust!");
    }
  };

  const [addverifyOTPForUpdateCourse] =
    useAddverifyOTPForUpdateCourseMutation();

  const handleEditVerifyOtp = async (e) => {
    e.preventDefault();
    const formData = {
      otp: highOtp,
      courseId: highId,
    };
    console.log(formData);
    const res = await addverifyOTPForUpdateCourse(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      setHighOtp("");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/student/edit-highschool");
    } else {
      toast.error("Updation request is not present!");
    }
  };

  const { data: interRequest, isSuccess: interRequestIsSuccess } =
    useGetOTPForUpdateCourseQuery(interId);

  useEffect(() => {
    const ids = interData.map((item) => item.id).join(", ");
    setInterId(ids);
  }, [interData]);

  const handleInterRequest = () => {
    if (interRequestIsSuccess) {
      if (interRequest.success) {
        toast.success(interRequest.message);
        setShowInterModal(false);
      } else {
        toast.error(interRequest.message);
      }
    } else {
      toast.error("Request already sent to Global Education Trust!");
    }
  };

  const handleInterVerifyOtp = async (e) => {
    e.preventDefault();
    const formData = {
      otp: interOtp,
      courseId: interId,
    };
    console.log(formData);
    const res = await addverifyOTPForUpdateCourse(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      setInterOtp("");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/student/edit-Intermediate");
    } else {
      toast.error("Updation request is not present!");
    }
  };

  const { data: request, isSuccess: requestIsSuccess } =
    useGetOTPForUpdateCourseQuery(id);

  useEffect(() => {
    const ids = currentData.map((item) => item.id).join(", ");
    setId(ids);
  }, [currentData]);

  const handleCurrentRequest = () => {
    if (requestIsSuccess) {
      if (request.success) {
        toast.success(request.message);
        setShowEditModal(false);
      } else {
        toast.error(request.message);
      }
    } else {
      toast.error("Request already sent to Global Education Trust!");
    }
  };

  const handleCurrentVerifyOtp = async (e) => {
    e.preventDefault();
    const formData = {
      otp: currentOtp,
      courseId: id,
    };
    console.log(formData);
    const res = await addverifyOTPForUpdateCourse(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      setCurrentOtp("");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/student/edit-current-course");
    } else {
      toast.error("Updation request is not present!");
    }
  };

  const { data: graduation, isSuccess: graduationIsSuccess } =
    useGetOTPForUpdateCourseQuery(graduationId);

  useEffect(() => {
    const ids = graduationData.map((item) => item.id).join(", ");
    setGraduationId(ids);
  }, [graduationData]);

  const handleGraduationRequest = () => {
    if (graduationIsSuccess) {
      if (graduation.success) {
        toast.success(graduation.message);
        setShowGraduationModal(false);
      } else {
        toast.error(graduation.message);
      }
    } else {
      toast.error("Request already sent to Global Education Trust!");
    }
  };

  const handleGraduationVerifyOtp = async (e) => {
    e.preventDefault();
    const formData = {
      otp: graduationOtp,
      courseId: graduationId,
    };
    console.log(formData);
    const res = await addverifyOTPForUpdateCourse(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      setGraduationOtp("");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/student/edit-graduation");
    } else {
      toast.error("Updation request is not present!");
    }
  };

  const { data: postRequest, isSuccess: postRequestIsSuccess } =
    useGetOTPForUpdateCourseQuery(postGraduationId);

  useEffect(() => {
    const ids = postGraduationData.map((item) => item.id).join(", ");
    setPostGraduationId(ids);
  }, [postGraduationData]);

  const handlePostRequest = () => {
    if (postRequestIsSuccess) {
      if (postRequest.success) {
        toast.success(postRequest.message);
        setShowPostGraduationModal(false);
      } else {
        toast.error(postRequest.message);
      }
    } else {
      toast.error("Request already sent to Global Education Trust!");
    }
  };

  const handlePostGraduationVerifyOtp = async (e) => {
    e.preventDefault();
    const formData = {
      otp: postGraduationOtp,
      courseId: postGraduationId,
    };
    console.log(formData);
    const res = await addverifyOTPForUpdateCourse(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      setPostGraduationOtp("");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/student/edit-post-graduation");
    } else {
      toast.error("Updation request is not present!");
    }
  };

  const handleImageClick = (fileName) => {
    const extension = fileName.split(".").pop();
    setOpenPdf(null);
    setSelectedImage(null);

    if (extension === "pdf") {
      setOpenPdf(fileName);
      setOpenFileType("pdf");
    } else {
      setSelectedImage(fileName);
      setOpenFileType("image");
    }

    setOpenPopup(true);
  };

  const handleInterImageClick = (fileName) => {
    const extension = fileName.split(".").pop();
    setSelectedPdf(null);
    setSelectedImage(null);

    if (extension === "pdf") {
      setSelectedPdf(fileName);
      setSelectedFileType("pdf");
    } else {
      setInterImage(fileName);
      setSelectedFileType("image");
    }

    setInterPopup(true);
  };

  const handleHighImageClick = (fileName) => {
    const extension = fileName.split(".").pop();
    setHighPdf(null);
    setHighImage(null);

    if (extension === "pdf") {
      setHighPdf(fileName);
      setHighFileType("pdf");
    } else {
      setHighImage(fileName);
      setHighFileType("image");
    }

    setHighPopup(true);
  };

  const handleGraduationImageClick = (fileName) => {
    const extension = fileName.split(".").pop();
    setGraduationPdf(null);
    setGraduationImage(null);

    if (extension === "pdf") {
      setGraduationPdf(fileName);
      setGraduationFileType("pdf");
    } else {
      setGraduationImage(fileName);
      setGraduationFileType("image");
    }

    setGraduationPopup(true);
  };

  const handlePostGraduationImageClick = (fileName) => {
    const extension = fileName.split(".").pop();
    setPostGraduationPdf(null);
    setPostGraduationImage(null);

    if (extension === "pdf") {
      setPostGraduationPdf(fileName);
      setPostGraduationFileType("pdf");
    } else {
      setPostGraduationImage(fileName);
      setPostGraduationFileType("image");
    }

    setPostGraduationPopup(true);
  };

  function getYearFromDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    return year;
  }

  const [deleteCourseDocument] = useDeleteCourseDocumentMutation();

  const deleteDocument = async (documentId) => {
    try {
      const res = await deleteCourseDocument(documentId);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const deleteHighDocument = async (documentId) => {
    try {
      const res = await deleteCourseDocument(documentId);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const deleteInterDocument = async (documentId) => {
    try {
      const res = await deleteCourseDocument(documentId);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const deleteGraduationDocument = async (documentId) => {
    try {
      const res = await deleteCourseDocument(documentId);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const deletePostGraduationDocument = async (documentId) => {
    try {
      const res = await deleteCourseDocument(documentId);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       closeIconRef.current &&
  //       !closeIconRef.current.contains(event.target)
  //     ) {
  //       setShowEditModal(false);
  //       setShowHighModal(false);
  //       setShowInterModal(false);
  //       setShowGraduationModal(false);
  //       setShowPostGraduationModal(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  const [addMoreCourseDocument] = useAddCourseDocumentMutation();

  const handleUploadImage = async (event,id) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("courseId", id);
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("courseDocument", files[i]);
    }
    const res = await addMoreCourseDocument(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
    }
  };

  const handleHighImage = async (event,highId) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("courseId", highId);
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("courseDocument", files[i]);
    }
    const res = await addMoreCourseDocument(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
    }
  };

  const handleInterImage = async (event,interId) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("courseId", interId);
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("courseDocument", files[i]);
    }
    const res = await addMoreCourseDocument(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
    }
  };

  const handleGraduationImage = async (event,graduationId) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("courseId", graduationId);
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("courseDocument", files[i]);
    }
    const res = await addMoreCourseDocument(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
    }
  };

  const handlePostGraduationImage = async (event,postGraduationId) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("courseId", postGraduationId);
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("courseDocument", files[i]);
    }
    const res = await addMoreCourseDocument(formData);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
    }
  };

 
  return (
    <>
      <div className=" space-y-5">
        <div className="card">
          {data &&
            currentData?.map((item, index) => (
              <>
                <header className=" card-header noborder">
                  <div className="flex">
                    <h4 className="card-title" style={{ fontSize: "16px" }}>
                      {item.courseLevel}
                      <div
                        className="text-slate-500 dark:text-slate-400 text-base"
                        style={{ fontSize: "14px" }}
                      >
                        ({getYearFromDate(item.endDate)})
                      </div>
                    </h4>{" "}
                    &nbsp;
                    <div
                      className="inline-block px-3 min-w-[30px] text-center  py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                      style={{ height: "27px" }}
                    >
                      85.68%
                    </div>
                  </div>

                  <div className="flex" style={{ marginRight: "22px" }}>
                    <img
                      src={edit}
                      alt="edit"
                      style={{ width: "17px", height: "17px" }}
                    />{" "}
                    &nbsp;
                    <div
                      className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white cursor-pointer"
                      onClick={() => setShowEditModal(!showEditModal)}
                    >
                      Edit
                    </div>
                  </div>
                </header>
                {showEditModal && (
                  <>
                    <div className="alert-modal">
                      <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                        <div
                          className="bg-white rounded-md p-6 "
                          style={{ width: "auto", height: "auto" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              className="text-lg font-bold mb-3 text-center"
                              style={{ flex: 1 }}
                            >
                              Update Request For {item.courseLevel}
                            </div>
                            <img
                              src={close}
                              style={{
                                width: "20px",
                                height: "20px",
                                cursor: "pointer",
                                marginBottom: "20px",
                              }}
                              alt="close"
                              onClick={() => setShowEditModal(false)}
                            />
                          </div>

                          <div className="input-area ">
                            <label htmlFor="verifyOtp" className="form-label">
                              Enter OTP
                            </label>
                            <div className="relative">
                              <input
                                id="verifyOtp"
                                type="number"
                                name="verifyOtp"
                                className="form-control"
                                placeholder="Enter OTP"
                                value={currentOtp}
                                onChange={(e) => setCurrentOtp(e.target.value)}
                              />
                            </div>
                            <div
                              className="text-slate-600 text-xs leading-4"
                              style={{ fontSize: "10px", margin: "8px" }}
                            >
                              {" "}
                              Don't have OTP.{" "}
                              <span
                                onClick={handleCurrentRequest}
                                style={{
                                  color: "blue",
                                  cursor: "pointer",
                                }}
                              >
                                Click here
                              </span>{" "}
                              to send a request to the admin to edit your
                              account details.
                            </div>

                            <button
                              className="btn btn-dark block w-full text-center mt-3"
                              onClick={handleCurrentVerifyOtp}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <div className=" px-6 pb-6">
                  <div className="overflow-x-auto -mx-6 dashcode-data-table">
                    <span className=" col-span-8  "></span>
                    <span className="  col-span-4 "></span>
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden ">
                        <table
                          className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                          id="data-table"
                        >
                          <thead className=" border-t border-slate-100 dark:border-slate-800 ">
                            <tr>
                              <th
                                scope="col"
                                className=" table-th "
                                style={{ color: "#000" }}
                              >
                                Board Name
                              </th>
                              <th
                                scope="col"
                                className=" table-th "
                                style={{ color: "#000" }}
                              >
                                School / College Name
                              </th>

                              <th
                                scope="col"
                                className=" table-th "
                                style={{ color: "#000" }}
                              >
                                Course Duration
                              </th>
                              <th
                                scope="col"
                                className=" table-th "
                                style={{ color: "#000" }}
                              >
                                Duration Type
                              </th>
                              <th
                                scope="col"
                                className=" table-th "
                                style={{ color: "#000" }}
                              >
                                Course Type
                              </th>
                              <th
                                scope="col"
                                className=" table-th "
                                style={{ color: "#000" }}
                              >
                                Certificate / Marksheet
                              </th>
                              <th
                                scope="col"
                                className=" table-th "
                                style={{ color: "#000" }}
                              >
                                Add Document
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                            <tr key={item.id}>
                              <td className="table-td ">
                                {item.boardOrUniversityName}
                              </td>

                              <td className="table-td ">
                                {item.schoolOrCollageName}
                              </td>

                              <td className="table-td ">
                                {item.courseDuration}
                              </td>
                              <td className="table-td ">{item.durationType}</td>
                              <td className="table-td ">{item.courseType}</td>
                              <td className="table-td cursor-pointer">
                                {item.document &&
                                  item.document.map((doc, docIndex) => (
                                    <div
                                      className="flex"
                                      key={docIndex}
                                      onClick={() =>
                                        handleImageClick(doc?.document_FileName)
                                      }
                                    >
                                      <Trash2
                                        size={18}
                                        color="red"
                                        onClick={() => deleteDocument(doc.id)}
                                      />{" "}
                                      &nbsp;{doc.document_Name}
                                    </div>
                                  ))}
                              </td>
                              <td className="table-td cursor-pointer">
                              <label htmlFor={`fileInput_${item.id}`}>
                              <Plus
                                  size={18}
                                  style={{
                                    justifyContent: "center",
                                    margin:'auto'
                                  }}
                                />
                                  </label>
                              
                              
                              </td>
                              <input
                                id={`fileInput_${item.id}`}
                                  type="file"
                                  accept="image/*,.pdf"
                                  style={{ display: "none" }}
                                  onChange={(event)=>handleUploadImage(event,item.id)}
                                  multiple
                                />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>

      <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
        <DialogContent>
          {openFileType === "pdf" && openPdf && (
            <Document
              file={`${localHost}/studentFile/${openPdf}`}
              options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
            >
              <Page pageNumber={1} />
            </Document>
          )}
          {openFileType === "image" && selectedImage && (
            <img
              src={`${localHost}/studentFile/${selectedImage}`}
              alt="document"
              style={{ width: "100%", height: "auto" }}
            />
          )}
          {!openFileType && <div>No file selected.</div>}
        </DialogContent>
      </Dialog>
      {/* HighSchool Start */}
      {highSchoolData && highSchoolData.length > 0 ? (
        <div className=" space-y-5 mt-5">
          <div className="card">
            {data &&
              highSchoolData?.map((item, index) => (
                <>
                  <header className=" card-header noborder">
                    <div className="flex">
                      <h4 className="card-title" style={{ fontSize: "16px" }}>
                        {item?.courseLevel}
                        <div
                          className="text-slate-500 dark:text-slate-400 text-base"
                          style={{ fontSize: "14px" }}
                        >
                          ({getYearFromDate(item.endDate)})
                        </div>
                      </h4>
                      &nbsp;
                      <div
                        className="inline-block px-3 min-w-[30px] text-center  py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                        style={{ height: "27px" }}
                      >
                        85.68%
                      </div>
                    </div>
                    <div className="flex" style={{ marginRight: "22px" }}>
                      <img
                        src={edit}
                        alt="edit"
                        style={{ width: "17px", height: "17px" }}
                      />{" "}
                      &nbsp;
                      <div
                        className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white cursor-pointer"
                        onClick={() => setShowHighModal(true)}
                      >
                        Edit
                      </div>
                    </div>
                  </header>
                  {showHighModal && (
                    <>
                      <div className="alert-modal">
                        <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                          <div
                            className="bg-white rounded-md p-6 "
                            style={{ width: "auto", height: "auto" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <div
                                className="text-lg font-bold mb-3 text-center"
                                style={{ flex: 1 }}
                              >
                                Update Request For {item.courseLevel}
                              </div>
                              <img
                                src={close}
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  cursor: "pointer",
                                  marginBottom: "20px",
                                }}
                                alt="close"
                                onClick={() => setShowHighModal(false)}
                              />
                            </div>

                            <div className="input-area ">
                              <label htmlFor="verifyOtp" className="form-label">
                                Enter OTP
                              </label>
                              <div className="relative">
                                <input
                                  id="verifyOtp"
                                  type="number"
                                  name="verifyOtp"
                                  className="form-control"
                                  placeholder="Enter OTP"
                                  value={highOtp}
                                  onChange={(e) => setHighOtp(e.target.value)}
                                />
                              </div>
                              <div
                                className="text-slate-600 text-xs leading-4"
                                style={{ fontSize: "10px", margin: "8px" }}
                              >
                                {" "}
                                Don't have OTP.{" "}
                                <span
                                  onClick={handleRequest}
                                  style={{
                                    color: "blue",
                                    cursor: "pointer",
                                  }}
                                >
                                  Click here
                                </span>{" "}
                                to send a request to the admin to edit your
                                account details.
                              </div>

                              <button
                                className="btn btn-dark block w-full text-center mt-3"
                                onClick={handleEditVerifyOtp}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div className=" px-6 pb-6">
                    <div className="overflow-x-auto -mx-6 dashcode-data-table">
                      <span className=" col-span-8  "></span>
                      <span className="  col-span-4 "></span>
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                          <table
                            className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                            id="data-table"
                          >
                            <thead className=" border-t border-slate-100 dark:border-slate-800 ">
                              <tr>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Board Name
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  School / College Name
                                </th>

                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Course Duration
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Duration Type
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Course Type
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Certificate / Marksheet
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Add Document
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                              <tr key={item?.id}>
                                <td className="table-td ">
                                  {item?.boardOrUniversityName}
                                </td>

                                <td className="table-td ">
                                  {item?.schoolOrCollageName}
                                </td>

                                <td className="table-td ">
                                  {item?.courseDuration}
                                </td>
                                <td className="table-td ">
                                  {item?.durationType}
                                </td>
                                <td className="table-td ">
                                  {item?.courseType}
                                </td>
                                <td className="table-td cursor-pointer">
                                  {item?.document &&
                                    item?.document?.map((doc, docIndex) => (
                                      <div
                                        className="flex"
                                        key={docIndex}
                                        onClick={() =>
                                          handleHighImageClick(
                                            doc?.document_FileName
                                          )
                                        }
                                      >
                                        <Trash2
                                          size={18}
                                          color="red"
                                          onClick={() =>
                                            deleteHighDocument(doc.id)
                                          }
                                        />{" "}
                                        &nbsp; {doc.document_Name}
                                      </div>
                                    ))}
                                </td>
                                <td className="table-td cursor-pointer">
                              <label htmlFor={`fileInput_${item.id}`}>
                              <Plus
                                  size={18}
                                  style={{
                                    justifyContent: "center",
                                    margin:'auto'
                                  }}
                                />
                                  </label>
                              
                              
                              </td>
                              <input
                                  id={`fileInput_${item.id}`}
                                  type="file"
                                  accept="image/*,.pdf"
                                  style={{ display: "none" }}
                                  onChange={(event)=>handleHighImage(event,item.id)}
                                  multiple
                                />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      ) : null}
      <Dialog open={highPopup} onClose={() => setHighPopup(false)}>
        <DialogContent>
          {highFileType === "pdf" && highPdf && (
            <Document
              file={`${localHost}/studentFile/${highPdf}`}
              options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
            >
              <Page pageNumber={1} />
            </Document>
          )}
          {highFileType === "image" && highImage && (
            <img
              src={`${localHost}/studentFile/${highImage}`}
              alt="document"
              style={{ width: "100%", height: "auto" }}
            />
          )}
          {!highFileType && <div>No file selected.</div>}
        </DialogContent>
      </Dialog>

      {/* HighSchool End */}

      {/* Intermediate Start */}
      {interData && interData.length > 0 ? (
        <div className=" space-y-5 mt-5">
          <div className="card">
            {data &&
              interData?.map((item, index) => (
                <>
                  <header className=" card-header noborder">
                    <div className="flex">
                      <h4 className="card-title" style={{ fontSize: "16px" }}>
                        {item.courseLevel}
                        <div
                          className="text-slate-500 dark:text-slate-400 text-base"
                          style={{ fontSize: "14px" }}
                        >
                          ({getYearFromDate(item.endDate)})
                        </div>
                      </h4>{" "}
                      &nbsp;
                      <div
                        className="inline-block px-3 min-w-[30px] text-center  py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                        style={{ height: "27px" }}
                      >
                        85.68%
                      </div>
                    </div>
                    <div className="flex" style={{ marginRight: "22px" }}>
                      <img
                        src={edit}
                        alt="edit"
                        style={{ width: "17px", height: "17px" }}
                      />{" "}
                      &nbsp;
                      <div
                        className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white cursor-pointer"
                        onClick={() => setShowInterModal(true)}
                      >
                        Edit
                      </div>
                    </div>
                  </header>
                  {showInterModal && (
                    <>
                      <div className="alert-modal">
                        <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                          <div
                            className="bg-white rounded-md p-6 "
                            style={{ width: "auto", height: "auto" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <div
                                className="text-lg font-bold mb-3 text-center"
                                style={{ flex: 1 }}
                              >
                                Update Request For {item.courseLevel}
                              </div>
                              <img
                                src={close}
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  cursor: "pointer",
                                  marginBottom: "20px",
                                }}
                                alt="close"
                                onClick={() => setShowInterModal(false)}
                              />
                            </div>

                            <div className="input-area ">
                              <label htmlFor="verifyOtp" className="form-label">
                                Enter OTP
                              </label>
                              <div className="relative">
                                <input
                                  id="verifyOtp"
                                  type="number"
                                  name="verifyOtp"
                                  className="form-control"
                                  placeholder="Enter OTP"
                                  value={interOtp}
                                  onChange={(e) => setInterOtp(e.target.value)}
                                />
                              </div>
                              <div
                                className="text-slate-600 text-xs leading-4"
                                style={{ fontSize: "10px", margin: "8px" }}
                              >
                                {" "}
                                Don't have OTP.{" "}
                                <span
                                  onClick={handleInterRequest}
                                  style={{
                                    color: "blue",
                                    cursor: "pointer",
                                  }}
                                >
                                  Click here
                                </span>{" "}
                                to send a request to the admin to edit your
                                account details.
                              </div>

                              <button
                                className="btn btn-dark block w-full text-center mt-3"
                                onClick={handleInterVerifyOtp}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div className=" px-6 pb-6">
                    <div className="overflow-x-auto -mx-6 dashcode-data-table">
                      <span className=" col-span-8  "></span>
                      <span className="  col-span-4 "></span>
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                          <table
                            className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                            id="data-table"
                          >
                            <thead className=" border-t border-slate-100 dark:border-slate-800 ">
                              <tr>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Board Name
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  School / College Name
                                </th>

                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Course Duration
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Duration Type
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Course Type
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Certificate / Marksheet
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Add Document
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                              <tr key={item?.id}>
                                <td className="table-td ">
                                  {item?.boardOrUniversityName}
                                </td>

                                <td className="table-td ">
                                  {item?.schoolOrCollageName}
                                </td>

                                <td className="table-td ">
                                  {item?.courseDuration}
                                </td>
                                <td className="table-td ">
                                  {item?.durationType}
                                </td>
                                <td className="table-td ">
                                  {item?.courseType}
                                </td>
                                <td className="table-td cursor-pointer">
                                  {item?.document &&
                                    item?.document?.map((doc, docIndex) => (
                                      <div
                                        className="flex"
                                        key={docIndex}
                                        onClick={() =>
                                          handleInterImageClick(
                                            doc?.document_FileName
                                          )
                                        }
                                      >
                                        <Trash2
                                          size={18}
                                          color="red"
                                          onClick={() =>
                                            deleteInterDocument(doc.id)
                                          }
                                        />{" "}
                                        &nbsp;{doc.document_Name}
                                      </div>
                                    ))}
                                </td>
                                <td className="table-td cursor-pointer">
                              <label htmlFor={`fileInput_${item.id}`}>
                              <Plus
                                  size={18}
                                  style={{
                                    justifyContent: "center",
                                    margin:'auto'
                                  }}
                                />
                                  </label>
                              
                              
                              </td>
                              <input
                                 id={`fileInput_${item.id}`}
                                  type="file"
                                  accept="image/*,.pdf"
                                  style={{ display: "none" }}
                                  onChange={(event)=>handleInterImage(event,item.id)}
                                  multiple
                                />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      ) : null}
      <Dialog open={interPopup} onClose={() => setInterPopup(false)}>
        <DialogContent>
          {selectedFileType === "pdf" && selectedPdf && (
            <Document
              file={`${localHost}/studentFile/${selectedPdf}`}
              options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
            >
              <Page pageNumber={1} />
            </Document>
          )}
          {selectedFileType === "image" && interImage && (
            <img
              src={`${localHost}/studentFile/${interImage}`}
              alt="document"
              style={{ width: "100%", height: "auto" }}
            />
          )}
          {!selectedFileType && <div>No file selected.</div>}
        </DialogContent>
      </Dialog>
      {/* Intermediate End */}

      {/* Graduation Start */}
      {graduationData && graduationData.length > 0 ? (
        <div className=" space-y-5 mt-5">
          <div className="card">
            {data &&
              graduationData?.map((item, index) => (
                <>
                  <header className=" card-header noborder">
                    <div className="flex">
                      <h4 className="card-title" style={{ fontSize: "16px" }}>
                        {item.courseLevel}
                        <div
                          className="text-slate-500 dark:text-slate-400 text-base"
                          style={{ fontSize: "14px" }}
                        >
                          ({getYearFromDate(item.endDate)})
                        </div>
                      </h4>
                      &nbsp;
                      <div
                        className="inline-block px-3 min-w-[30px] text-center  py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                        style={{ height: "27px" }}
                      >
                        85.68%
                      </div>
                    </div>
                    <div className="flex" style={{ marginRight: "22px" }}>
                      <img
                        src={edit}
                        alt="edit"
                        style={{ width: "17px", height: "17px" }}
                      />{" "}
                      &nbsp;
                      <div
                        className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white cursor-pointer"
                        onClick={() => setShowGraduationModal(false)}
                      >
                        Edit
                      </div>
                    </div>
                  </header>
                  {showGraduationModal && (
                    <>
                      <div className="alert-modal">
                        <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                          <div
                            className="bg-white rounded-md p-6 "
                            style={{ width: "auto", height: "auto" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <div
                                className="text-lg font-bold mb-3 text-center"
                                style={{ flex: 1 }}
                              >
                                Update Request For {item.courseLevel}
                              </div>
                              <img
                                src={close}
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  cursor: "pointer",
                                  marginBottom: "20px",
                                }}
                                alt="close"
                                onClick={() => setShowGraduationModal(false)}
                              />
                            </div>

                            <div className="input-area ">
                              <label htmlFor="verifyOtp" className="form-label">
                                Enter OTP
                              </label>
                              <div className="relative">
                                <input
                                  id="verifyOtp"
                                  type="number"
                                  name="verifyOtp"
                                  className="form-control"
                                  placeholder="Enter OTP"
                                  value={graduationOtp}
                                  onChange={(e) =>
                                    setGraduationOtp(e.target.value)
                                  }
                                />
                              </div>
                              <div
                                className="text-slate-600 text-xs leading-4"
                                style={{ fontSize: "10px", margin: "8px" }}
                              >
                                {" "}
                                Don't have OTP.{" "}
                                <span
                                  onClick={handleGraduationRequest}
                                  style={{
                                    color: "blue",
                                    cursor: "pointer",
                                  }}
                                >
                                  Click here
                                </span>{" "}
                                to send a request to the admin to edit your
                                account details.
                              </div>

                              <button
                                className="btn btn-dark block w-full text-center mt-3"
                                onClick={handleGraduationVerifyOtp}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div className=" px-6 pb-6">
                    <div className="overflow-x-auto -mx-6 dashcode-data-table">
                      <span className=" col-span-8  "></span>
                      <span className="  col-span-4 "></span>
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                          <table
                            className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                            id="data-table"
                          >
                            <thead className=" border-t border-slate-100 dark:border-slate-800 ">
                              <tr>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Board Name
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  School / College Name
                                </th>

                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Course Duration
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Duration Type
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Course Type
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Certificate / Marksheet
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Add Document
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                              <tr key={item?.id}>
                                <td className="table-td ">
                                  {item?.boardOrUniversityName}
                                </td>

                                <td className="table-td ">
                                  {item?.schoolOrCollageName}
                                </td>

                                <td className="table-td ">
                                  {item?.courseDuration}
                                </td>
                                <td className="table-td ">
                                  {item?.durationType}
                                </td>
                                <td className="table-td ">
                                  {item?.courseType}
                                </td>
                                <td className="table-td cursor-pointer">
                                  {item?.document &&
                                    item?.document?.map((doc, docIndex) => (
                                      <div
                                        className="flex"
                                        key={docIndex}
                                        onClick={() =>
                                          handleGraduationImageClick(
                                            doc?.document_FileName
                                          )
                                        }
                                      >
                                        <Trash2
                                          size={18}
                                          color="red"
                                          onClick={() =>
                                            deleteGraduationDocument(doc.id)
                                          }
                                        />{" "}
                                        &nbsp; {doc.document_Name}
                                      </div>
                                    ))}
                                </td>
                                <td className="table-td cursor-pointer">
                              <label htmlFor={`fileInput_${item.id}`}>
                              <Plus
                                  size={18}
                                  style={{
                                    justifyContent: "center",
                                    margin:'auto'
                                  }}
                                />
                                  </label>
                              
                              
                              </td>
                              <input
                                  id={`fileInput_${item.id}`}
                                  type="file"
                                  accept="image/*,.pdf"
                                  style={{ display: "none" }}
                                  onChange={(event)=>handleGraduationImage(event,item.id)}
                                  multiple
                                />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      ) : null}
      <Dialog open={graduationPopup} onClose={() => setGraduationPopup(false)}>
        <DialogContent>
          {graduationFileType === "pdf" && graduationPdf && (
            <Document
              file={`${localHost}/studentFile/${graduationPdf}`}
              options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
            >
              <Page pageNumber={1} />
            </Document>
          )}
          {graduationFileType === "image" && graduationImage && (
            <img
              src={`${localHost}/studentFile/${graduationImage}`}
              alt="document"
              style={{ width: "100%", height: "auto" }}
            />
          )}
          {!graduationFileType && <div>No file selected.</div>}
        </DialogContent>
      </Dialog>
      {/* Graduation End */}

      {/* PostGraduation Start */}
      {postGraduationData && postGraduationData.length > 0 ? (
        <div className=" space-y-5 mt-5">
          <div className="card">
            {data &&
              postGraduationData?.map((item, index) => (
                <>
                  <header className=" card-header noborder">
                    <div className="flex">
                      <h4 className="card-title" style={{ fontSize: "16px" }}>
                        {item.courseLevel}
                        <div
                          className="text-slate-500 dark:text-slate-400 text-base"
                          style={{ fontSize: "14px" }}
                        >
                          ({getYearFromDate(item.endDate)})
                        </div>
                      </h4>
                      &nbsp;
                      <div
                        className="inline-block px-3 min-w-[30px] text-center  py-1 rounded-[999px] bg-opacity-25 text-warning-500
        bg-warning-500"
                        style={{ height: "27px" }}
                      >
                        85.68%
                      </div>
                    </div>
                    <div className="flex " style={{ marginRight: "22px" }}>
                      <img
                        src={edit}
                        alt="edit"
                        style={{ width: "17px", height: "17px" }}
                      />{" "}
                      &nbsp;
                      <div
                        className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white cursor-pointer"
                        onClick={() => setShowPostGraduationModal(true)}
                      >
                        Edit
                      </div>
                    </div>
                  </header>
                  {showPostGraduationModal && (
                    <>
                      <div className="alert-modal">
                        <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                          <div
                            className="bg-white rounded-md p-6 "
                            style={{ width: "auto", height: "auto" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <div
                                className="text-lg font-bold mb-3 text-center"
                                style={{ flex: 1 }}
                              >
                                Update Request For {item.courseLevel}
                              </div>
                              <img
                                src={close}
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  cursor: "pointer",
                                  marginBottom: "20px",
                                }}
                                alt="close"
                                onClick={() =>
                                  setShowPostGraduationModal(false)
                                }
                              />
                            </div>

                            <div className="input-area ">
                              <label htmlFor="verifyOtp" className="form-label">
                                Enter OTP
                              </label>
                              <div className="relative">
                                <input
                                  id="verifyOtp"
                                  type="number"
                                  name="verifyOtp"
                                  className="form-control"
                                  placeholder="Enter OTP"
                                  value={postGraduationOtp}
                                  onChange={(e) =>
                                    setPostGraduationOtp(e.target.value)
                                  }
                                />
                              </div>
                              <div
                                className="text-slate-600 text-xs leading-4"
                                style={{ fontSize: "10px", margin: "8px" }}
                              >
                                {" "}
                                Don't have OTP.{" "}
                                <span
                                  onClick={handlePostRequest}
                                  style={{
                                    color: "blue",
                                    cursor: "pointer",
                                  }}
                                >
                                  Click here
                                </span>{" "}
                                to send a request to the admin to edit your
                                account details.
                              </div>

                              <button
                                className="btn btn-dark block w-full text-center mt-3"
                                onClick={handlePostGraduationVerifyOtp}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div className=" px-6 pb-6">
                    <div className="overflow-x-auto -mx-6 dashcode-data-table">
                      <span className=" col-span-8  "></span>
                      <span className="  col-span-4 "></span>
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                          <table
                            className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
                            id="data-table"
                          >
                            <thead className=" border-t border-slate-100 dark:border-slate-800 ">
                              <tr>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Board Name
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  School / College Name
                                </th>

                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Course Duration
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Duration Type
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Course Type
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Certificate / Marksheet
                                </th>
                                <th
                                  scope="col"
                                  className=" table-th "
                                  style={{ color: "#000" }}
                                >
                                  Add Document
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                              <tr key={item?.id}>
                                <td className="table-td ">
                                  {item?.boardOrUniversityName}
                                </td>

                                <td className="table-td ">
                                  {item?.schoolOrCollageName}
                                </td>

                                <td className="table-td ">
                                  {item?.courseDuration}
                                </td>
                                <td className="table-td ">
                                  {item?.durationType}
                                </td>
                                <td className="table-td ">
                                  {item?.courseType}
                                </td>
                                <td className="table-td cursor-pointer">
                                  {item?.document &&
                                    item?.document?.map((doc, docIndex) => (
                                      <div
                                        className="flex"
                                        key={docIndex}
                                        onClick={() =>
                                          handlePostGraduationImageClick(
                                            doc?.document_FileName
                                          )
                                        }
                                      >
                                        <Trash2
                                          size={18}
                                          color="red"
                                          onClick={() =>
                                            deletePostGraduationDocument(doc.id)
                                          }
                                        />{" "}
                                        &nbsp; {doc.document_Name}
                                      </div>
                                    ))}
                                </td>
                                <td className="table-td cursor-pointer">
                              <label htmlFor={`fileInput_${item.id}`}>
                              <Plus
                                  size={18}
                                  style={{
                                    justifyContent: "center",
                                    margin:'auto'
                                  }}
                                />
                                  </label>
                              
                              
                              </td>
                              <input
                                  id="fileInput"
                                  type="file"
                                  accept="image/*,.pdf"
                                  style={{ display: "none" }}
                                  onChange={handlePostGraduationImage}
                                  multiple
                                />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      ) : null}

      <Dialog
        open={postGraduationPopup}
        onClose={() => setPostGraduationPopup(false)}
      >
        <DialogContent>
          {postGraduationFileType === "pdf" && postGraduationPdf && (
            <Document
              file={`${localHost}/studentFile/${postGraduationPdf}`}
              options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
            >
              <Page pageNumber={1} />
            </Document>
          )}
          {postGraduationFileType === "image" && postGraduationImage && (
            <img
              src={`${localHost}/studentFile/${postGraduationImage}`}
              alt="document"
              style={{ width: "100%", height: "auto" }}
            />
          )}
          {!postGraduationFileType && <div>No file selected.</div>}
        </DialogContent>
      </Dialog>
      {/* PostGraduation End */}
      <ToastContainer />
    </>
  );
};

export default YourQualification;
