import api from "../../../api";

const API_URL = "/api/v1/users/";

interface IUserData {
  email: string;
}

const login = async (userData: IUserData) => {
  const res = await api.post(API_URL + "login", userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;
