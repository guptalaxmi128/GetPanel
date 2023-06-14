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
    // updateAccount: builder.mutation({
    //   query: (user) => {
    //     // console.log("UpdateData", user);
    //     const { id, ...data } = user;
    //     // console.log("ActualUpdateData", id);
    //     return {
    //       url: `updateAccount/${id}`,
    //       method: "PUT",
    //       body: data,
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     };
    //   },
    // }),
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
    // updateCourse: builder.mutation({
    //   query: (user) => {
    //     // console.log("UpdateData", user);
    //     const { id, ...data } = user;
    //     console.log("ActualUpdateData", id);
    //     return {
    //       url: `updateCourse/${id}`,
    //       method: "PUT",
    //       body: data,
    //     };
    //   },
    // }),
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
  // useUpdateAccountMutation,
  useAddCourseMutation,
  useGetCourseQuery,
  // useUpdateCourseMutation,
  useGetGapYearQuery,
  useAddRaiseFundCourseMutation,
  useAddProfileImageMutation,
  useGetProfileImageQuery,
  useGetNotificationQuery,
  useRegisterDonarMutation,
  useVerifyDonarRegisterOtpMutation,
  useLoginDonarMutation,
  useVerifyDonarLoginOtpMutation,
  useResendDonarRegisterOtpMutation,
  useGetDonarQuery,
  useGetDonarNotificationQuery,
  useGetAcceptRaiseFundQuery,
  useUpdateDonarProfileMutation,
  useAddDonarProfileImageMutation,
  useGetDonarProfileImageQuery

} = signUpApi;
