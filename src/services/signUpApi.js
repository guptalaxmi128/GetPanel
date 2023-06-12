import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/student/", 
    // baseUrl: "https://global-education-t.onrender.com/api/student/", 
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
          url: "register",
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
          url: "verifyRegisterOtp",
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
          url: "resendOTPForRegister",
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
          url: "login",
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
          url: "verifySignInOtp",
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
          url: "profile",
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
          url: `updateprofile`,
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
          url: "qRCode",
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
          url: "addAccount",
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
          url: "account",
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
          url: "addCourse",
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
          url: "courses",
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
          url: "authFillGapCourse",
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
          url: "addRaiseFundCourse",
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
          url: "addProfileImage",
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
          url: "profileImage",
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
          url: "notifications",
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
  useGetNotificationQuery

} = signUpApi;
