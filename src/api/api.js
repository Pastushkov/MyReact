import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "a347d9d3-588f-4bab-86d9-b5ffdf4c078e",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((responce) => {
        return responce.data;
      });
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((responce) => {
      return responce.data;
    });
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((responce) => {
      return responce.data;
    });
  },
  getUserProfile(userId) {
    return profileAPI.getUserProfile(userId);
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then((responce) => {
      return responce.data;
    });
  },
  login(email, password, rememberMe = false, captchaUrl = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captchaUrl,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId).then((responce) => {
      return responce.data;
    });
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/` + userId).then((responce) => {
      return responce.data;
    });
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status }).then((responce) => {
      return responce.data;
    });
  },
  savePhoto(file) {
    let formData = new FormData();
    formData.append("image", file);
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((responce) => {
        return responce.data;
      });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile).then((responce) => {
      return responce.data;
    });
  },
};

export const securityAPI = {
  getCaptchUrl() {
    return instance.get(`security/get-captcha-url`).then((responce) => {
      return responce.data;
    });
  },
};
