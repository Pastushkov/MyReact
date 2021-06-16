import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "4dd74f87-088f-4c35-a580-7d08a9218a55",
  },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5){
        return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((responce) => {
      return responce.data;
    });
    },
    followUser(id){
        return instance.post(`follow/${id}`).then((responce) => {
            return responce.data;
          });
    },
    unFollowUser(id){
        return instance.delete(`follow/${id}`).then((responce) => {
            return responce.data;
          });
    }
}
