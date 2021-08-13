import create from "zustand";

const useUserDataStore = create((set) => ({
  user_name: "",
  setUserName: (payload) => set({ user_name: payload }),
  user_email: "",
  setUserEmail: (payload) => set({ user_email: payload }),
}));

export default useUserDataStore;
