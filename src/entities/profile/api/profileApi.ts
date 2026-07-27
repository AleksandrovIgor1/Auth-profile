import baseApi from "@/shared/api/baseApi";

import type { UpdateProfileDto, UpdateUserDto } from "../model/types";
import {
  ProfileSchema,
  SkillsResponseSchema,
  SpecializationSchema,
  SpecializationsResponseSchema,
  UserSchema,
  type Profile,
  type SkillsResponse,
  type Specialization,
  type SpecializationsResponse,
  type User,
} from "../model/schemas";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<User, void>({
      query: () => "auth/profile",

      transformResponse: (response) => UserSchema.parse(response),

      providesTags: ["Profile"],
    }),
    getSkills: build.query<SkillsResponse, void>({
      query: () => "skills",

      transformResponse: (response) => SkillsResponseSchema.parse(response),

      providesTags: ["Profile"],
    }),
    getSpecializations: build.query<SpecializationsResponse, void>({
      query: () => "specializations",

      transformResponse: (response) =>
        SpecializationsResponseSchema.parse(response),

      providesTags: ["Profile"],
    }),
    getSpecializationById: build.query<Specialization, number>({
      query: (id) => `specializations/${id}`,

      transformResponse: (response) => SpecializationSchema.parse(response),

      providesTags: ["Profile"],
    }),
    updateProfile: build.mutation<
      Profile,
      { id: string; data: UpdateProfileDto }
    >({
      query: ({ id, data }) => ({
        url: `profiles/${id}`,
        method: "PUT",
        body: data,
      }),

      transformResponse: (response) => ProfileSchema.parse(response),

      invalidatesTags: ["Profile"],
    }),
    updateUser: build.mutation<User, { id: string; data: UpdateUserDto }>({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: data,
      }),

      transformResponse: (response) => UserSchema.parse(response),

      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateUserMutation,
  useGetSkillsQuery,
  useGetSpecializationByIdQuery,
  useGetSpecializationsQuery,
} = profileApi;
