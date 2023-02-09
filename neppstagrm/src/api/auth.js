import axios from "axios";

const authAxios = axios.create({
  baseURL: "http://101.101.218.43",
});

const token = localStorage.getItem("access-token");

if (token) {
  authAxios.defaults.headers.Authorization = `Bearer ${token}`;
}

export const signUpUser = async (from) => {
  try {
    const { data } = await authAxios.post("/users", from);
    return data;
  } catch (e) {
    alert("회원가입에 실패했습니다.");
  }
};

export const signIn = async (form) => {
  try {
    const { data } = await authAxios.post("/users/signin", form);
    const { token } = data;

    localStorage.setItem("access-token", token);

    authAxios.defaults.headers.Authorization = `Bearer ${token}`;

    return { success: true };
  } catch (e) {
    alert("로그인에 실패했습니다.");
  }
};
export const getCurrentUser = async () => {
  let { data } = await authAxios.get("/users/curremt");

  console.log(data);
};
