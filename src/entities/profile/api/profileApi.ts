import baseApi from "@/shared/api/baseApi";
import type {
  Profile,
  ProfileResponse,
  SkillsResponse,
  Specialization,
  SpecializationsResponse,
  UpdateProfileDto,
  UpdateUserDto,
  User,
} from "../model/types";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<ProfileResponse, void>({
      query: () => "auth/profile",
      providesTags: ["Profile"],
    }),
    getSkills: build.query<SkillsResponse, void>({
      query: () => "skills",
      providesTags: ["Profile"],
    }),
    getSpecializations: build.query<SpecializationsResponse, void>({
      query: () => "specializations",
      providesTags: ["Profile"],
    }),
    getSpecializationById: build.query<Specialization, number>({
      query: (id) => `specializations/${id}`,
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
      invalidatesTags: ["Profile"],
    }),
    updateUser: build.mutation<User, { id: string; data: UpdateUserDto }>({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: data,
      }),
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
