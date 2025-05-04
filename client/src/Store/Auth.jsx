import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //Accesssing the token from the local storage
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(""); //for storing user data
  const [isLoading, setIsLoading] = useState(true); //for loading state. If data is being fetched from the backend, then show loading spinner(admin panel display)
  const [services, setServices] = useState([]); //for storing services data
  const AuthorizationToken = `Bearer ${token}`;

  const API = import.meta.env.VITE_APP_URI_API;

  const storeTokeninLocalStorage = (token) => {
    setToken(token); // Update the token in state
    localStorage.setItem("token", token); // Store the token in local storage
  };

  let isloggedIn = !!token;

  const LogoutUser = () => {
    ///remove tokens from the localstorage
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT AUTHENTICATION - Get Currently loggedin User Data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log("userAuthentication", res_data);
        setUser(res_data.userData); // Update the token in state
        setIsLoading(false); // Set loading to false after fetching user data
      } else {
        console.log("userAuthentication", response.statusText);
        setIsLoading(false); // Set loading to false if there's an error
      }
    } catch (error) {
      console.log("userAuthentication", error);
    }
  };
  //get services data from the backend
  const getServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/services`, {
        method: "GET",
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data.msg);
        setServices(res_data.msg); // Update the token in state
      } else {
        console.log("getServices data", response.statusText);
      }
    } catch (error) {
      console.log("getServices data error", error);
    }
  };
  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokeninLocalStorage,
        LogoutUser,
        isloggedIn,
        user,
        services,
        AuthorizationToken,
        isLoading,
        API,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//custom hook for representing the consumer of the context
export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
