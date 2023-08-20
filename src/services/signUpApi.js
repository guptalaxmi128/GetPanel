import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/", 
    baseUrl: "https://global-education-t.onrender.com/api/", 
    
    prepareHeaders: (headers) => {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
          headers.set('Authorization', `Bearer ${authToken}`);
          console.log("sign", authToken);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: "student/register",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    verifyRegisterOtp: builder.mutation({
      query: (user) => {
        return {
          url: "student/verifyRegisterOtp",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    resendRegisterOtp: builder.mutation({
      query: (user) => {
        return {
          url: "student/resendOTPForRegister",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    loginStudent: builder.mutation({
      query: (user) => {
        return {
          url: "student/login",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    verifyLoginOtp: builder.mutation({
      query: (user) => {
        return {
          url: "student/verifySignInOtp",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getProfile: builder.query({
      query: () => {
        return {
          url: "student/profile",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    updateProfile: builder.mutation({
      query: (user) => {
        return {
          url: `student/updateprofile`,
          method: "PUT",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    getQRCode: builder.query({
      query: () => {
        return {
          url: "student/qRCode",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    addAccount: builder.mutation({
      query: (user) => {
        return {
          url: "student/addAccount",
          method: "POST",
          body: user,
          // headers: {
          //   "Content-type": "application/json",
          // },
        };
      },
    }),
    getAccount: builder.query({
      query: () => {
        return {
          url: "student/account",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    updateAccount: builder.mutation({
      query: (formData) => {
        // console.log("UpdateData", user);
        const accountDetailId = formData.get("accountDetailId");
        // console.log("ActualUpdateData", id);
        return {
          url: `student/updateAccount/${accountDetailId}`,
          method: "PUT",
          body: formData,
          // headers: {
          //   "Content-Type": "application/json",
          // },
        };
      },
    }),
    addCourse: builder.mutation({
      query: (user) => {
        console.log(user)
        return {
          url: "student/addCourse",
          method: "POST",
          body: user,
          // headers: {
          //   "Content-type": "multipart/form-data",
          // },
        };
      },
    }),
    getCourse: builder.query({
      query: () => {
        return {
          url: "student/courses",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getGapYear: builder.query({
      query: () => {
        return {
          url: "student/authFillGapCourse",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    addRaiseFundCourse: builder.mutation({
      query: (user) => {
        console.log(user)
        return {
          url: "student/addRaiseFundCourse",
          method: "POST",
          body: user,
          // headers: {
          //   "Content-type": "multipart/form-data",
          // },
        };
      },
    }),
    addProfileImage: builder.mutation({
      query: (user) => {
        console.log(user)
        return {
          url: "student/addProfileImage",
          method: "POST",
          body: user,
          // headers: {
          //   "Content-type": "multipart/form-data",
          // },
        };
      },
    }),
    getProfileImage: builder.query({
      query: () => {
        return {
          url: "student/profileImage",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getNotification: builder.query({
      query: () => {
        return {
          url: "student/notifications",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getUpdationResponse: builder.query({
      query: () => {
        return {
          url: "student/updationResponse",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getOTPForUpdateAccount: builder.query({
      query: (accountDetailId) => {
        return {
          url: `student/getOTPForUpdateAccount/${accountDetailId}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    addverifyOTPForUpdateAccount: builder.mutation({
      query: (user) => {
        console.log(user)
        const {accountDetailId,...data}=user;
        return {
          url: `student/verifyOTPForUpdateAccount/${accountDetailId}`,
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    updateStudentImage: builder.mutation({
      query: (user) => {
        const id = user.get('id');
        return {
          url: `student/updateProfileImage/${id}`,
          method: "PUT",
          body: user,
          // headers: {
          //   "Content-type": "multipart/form-data",
          // },
        };
      },
    }),
    getWallet: builder.query({
      query: () => {
        return {
          url: "student/wallet",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getWalletHistory: builder.query({
      query: () => {
        return {
          url: "student/walletHistory",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    updateCourse: builder.mutation({
      query: (user) => {
        // console.log("UpdateData", user);
        const {courseId,...data}=user;
        console.log("ActualUpdateData", courseId);
        return {
          url: `student/updateCourse/${courseId}`,
          method: "PUT",
          body: data,
            headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    addverifyOTPForUpdateRaiseFund: builder.mutation({
      query: (user) => {
        console.log(user)
        const {raiseFundId,...data}=user;
        return {
          url: `student/verifyOTPForUpdateRaiseFund/${raiseFundId}`,
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getOTPForUpdateRaiseFund: builder.query({
      query: (raiseFundId) => {
        return {
          url: `student/getOTPForUpdateRaiseFund/${raiseFundId}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    addverifyOTPForUpdateCourse: builder.mutation({
      query: (user) => {
        console.log(user)
        const {courseId,...data}=user;
        return {
          url: `student/verifyOTPForUpdateCourse/${courseId}`,
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getOTPForUpdateCourse: builder.query({
      query: (courseId) => {
        return {
          url: `student/getOTPForUpdateCourse/${courseId}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

       updateRaiseFund: builder.mutation({
      query: (user) => {
        const {raiseFundId,...data}=user;
        console.log("ActualUpdateData", raiseFundId);
        return {
          url: `student/updateRaiseFund/${raiseFundId}`,
          method: "PUT",
          body: data,
        };
      },
    }),

    getFundRaised: builder.query({
      query: () => {
        return {
          url: "student/fundRaised",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getFundRequired: builder.query({
      query: () => {
        return {
          url: "student/fundRequired",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    deleteCourseDocument: builder.mutation({
      query: (documentId) => ({ 
        url: `student/deleteCourseDocument/${documentId}`, 
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),

    addverifyOTPForUpdateProfile: builder.mutation({
      query: (user) => {
        return {
          url: `student/verifyOTPForUpdateProfile`,
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getOTPForUpdateProfile: builder.query({
      query: () => {
        return {
          url: `student/getOTPForUpdateProfile`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    deleteRaiseFundDocument: builder.mutation({
      query: (documentId) => ({ 
        url: `student/deleteRaiseFundDocument/${documentId}`, 
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),

    addFeesReceipt: builder.mutation({
      query: (formData) => {
        const raiseFundId = formData.get("raiseFundId");
        return {
          url: `student/addMoreFeeReceipt/${raiseFundId}`,
          method: "POST",
          body: formData,
         
        };
      },
    }),

    addGapDocument: builder.mutation({
      query: (formData) => {
        const raiseFundId = formData.get("raiseFundId");
        return {
          url: `student/addMoreGapDocument/${raiseFundId}`,
          method: "POST",
          body: formData,
         
        };
      },
    }),

    addCourseDocument: builder.mutation({
      query: (formData) => {
        const courseId = formData.get("courseId");
        return {
          url: `student/addMoreCourseDocument/${courseId}`,
          method: "POST",
          body: formData,
         
        };
      },
    }),
    
    registerDonar: builder.mutation({
      query: (user) => {
        return {
          url: "donar/registerDonar",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    verifyDonarRegisterOtp: builder.mutation({
      query: (user) => {
        return {
          url: "donar/verifyRegisterOtp",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    loginDonar: builder.mutation({
      query: (user) => {
        return {
          url: "donar/loginDonar",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    verifyDonarLoginOtp: builder.mutation({
      query: (user) => {
        return {
          url: "donar/verifyLoginOtp",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    resendDonarRegisterOtp: builder.mutation({
      query: (user) => {
        return {
          url: "donar/resendOTPForRegister",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getDonar: builder.query({
      query: (user) => {
        return {
          url: "donar/donars",
          method: "GET",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getDonarNotification: builder.query({
      query: () => {
        return {
          url: "donar/notifications",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getAcceptRaiseFund: builder.query({
      query: () => {
        return {
          url: "donar/acceptedRaiseFund",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    updateDonarImage: builder.mutation({
      query: (user) => {
        const id = user.get('id');
        return {
          url: `donar/updateProfileImage/${id}`,
          method: "PUT",
          body: user,
          // headers: {
          //   "Content-type": "multipart/form-data",
          // },
        };
      },
    }),
    updateDonarProfile: builder.mutation({
      query: (user) => {
        return {
          url: `donar/updateDonar`,
          method: "PUT",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    addDonarProfileImage: builder.mutation({
      query: (user) => {
        console.log(user)
        return {
          url: "donar/addProfileImage",
          method: "POST",
          body: user,
          // headers: {
          //   "Content-type": "multipart/form-data",
          // },
        };
      },
    }),
    getDonarProfileImage: builder.query({
      query: () => {
        return {
          url: "donar/profileImage",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
 
    getDonarStudentProfile: builder.query({
      query: (id) => {
            // console.log("ActualUpdateData", id);
        return {
          url: `donar/studentProfile/${id}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

      getAcceptTodayRaiseFund: builder.query({
      query: () => {
        return {
          url: "donar/todayAcceptedRaiseFund",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    addDonationDetailsInDonar: builder.mutation({
      query: (user) => {
        return {
          url: "donar/addDonationDetails",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getDashboardTotalStudents: builder.query({
      query: () => {
        return {
          url: "donar/totalStudents",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getDashboardTotalDonation: builder.query({
      query: () => {
        return {
          url: "donar/sumAllDonation",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getDashboardPending: builder.query({
      query: () => {
        return {
          url: "donar/panding",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getDonationDonatedAll: builder.query({
      query: () => {
        return {
          url: "donar/donationHistory",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getDonationDonatedToday: builder.query({
      query: () => {
        return {
          url: "donar/todayDonationHistory",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),


    getQRCodeForDonationRequest: builder.query({
      query: (studentUID) => {
        return {
          url: `donar/qRCode/${studentUID}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getCoursesForDonar: builder.query({
      query: (studentUID) => {
        return {
          url: `donar/studentCourse/${studentUID}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getDownloadReceipt: builder.query({
      query: (id) => {
        return {
          url: `donar/downloadReceipt/${id}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getRaiseFundForDonar: builder.query({
      query: (studentUID) => {
        return {
          url: `donar/raiseFund/${studentUID}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    getRejectedRaiseFund: builder.query({
      query: () => {
        return {
          url: `donar/rejectedRaiseFund`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    deleteRejectedRaiseFund: builder.mutation({
      query: (raiseFundId) => ({ 
        url: `donar/rejectRaiseFund/${raiseFundId}`, 
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),

    publicUserReceipt: builder.mutation({
      query: (user) => {
        return {
          url: "public/getReceipt",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    publicUserReceiptOtp: builder.mutation({
      query: (user) => {
        return {
          url: "public/OTPForReceipt",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    publicDonationDetails: builder.mutation({
      query: (user) => {
        return {
          url: "public/addDonationDetails",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

  }),
});

export const {
  useRegisterUserMutation,
  useVerifyRegisterOtpMutation,
  useResendRegisterOtpMutation,
  useLoginStudentMutation,
  useVerifyLoginOtpMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetQRCodeQuery,
  useAddAccountMutation,
  useGetAccountQuery,
  useUpdateAccountMutation,
  useAddCourseMutation,
  useGetCourseQuery,
  useUpdateCourseMutation,
  useGetGapYearQuery,
  useAddRaiseFundCourseMutation,
  useAddProfileImageMutation,
  useGetProfileImageQuery,
  useUpdateStudentImageMutation,
  useGetWalletQuery,
  useGetWalletHistoryQuery,
  useGetNotificationQuery,
  useGetUpdationResponseQuery,
  useGetOTPForUpdateAccountQuery,
  useAddverifyOTPForUpdateAccountMutation,
  useAddverifyOTPForUpdateRaiseFundMutation,
  useGetOTPForUpdateRaiseFundQuery,
  useUpdateRaiseFundMutation,
  useGetFundRaisedQuery,
  useGetFundRequiredQuery,
  useAddverifyOTPForUpdateCourseMutation,
  useGetOTPForUpdateCourseQuery,
  useDeleteCourseDocumentMutation,
  useAddverifyOTPForUpdateProfileMutation,
  useGetOTPForUpdateProfileQuery,
  useDeleteRaiseFundDocumentMutation,
  useRegisterDonarMutation,
  useVerifyDonarRegisterOtpMutation,
  useAddFeesReceiptMutation,
  useAddGapDocumentMutation,
  useAddCourseDocumentMutation,
  useLoginDonarMutation,
  useVerifyDonarLoginOtpMutation,
  useResendDonarRegisterOtpMutation,
  useGetDonarQuery,
  useGetDonarNotificationQuery,
  useGetAcceptRaiseFundQuery,
  useGetAcceptTodayRaiseFundQuery,
  useUpdateDonarProfileMutation,
  useAddDonarProfileImageMutation,
  useGetDonarProfileImageQuery,
  useUpdateDonarImageMutation,
  useGetDonarStudentProfileQuery,
  useAddDonationDetailsInDonarMutation,
  useGetDashboardTotalStudentsQuery,
  useGetDashboardTotalDonationQuery,
  useGetDonationDonatedAllQuery,
  useGetDonationDonatedTodayQuery,
  useGetQRCodeForDonationRequestQuery,
  useGetCoursesForDonarQuery,
  useGetDownloadReceiptQuery,
  useGetRaiseFundForDonarQuery,
  useGetRejectedRaiseFundQuery,
 useDeleteRejectedRaiseFundMutation, // checking remaining
 useGetDashboardPendingQuery,
  usePublicUserReceiptMutation,
  usePublicUserReceiptOtpMutation,
  usePublicDonationDetailsMutation

} = signUpApi;
