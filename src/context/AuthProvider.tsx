import {
  createContext,
  ReactElement,
  useEffect,
  useState,
  useContext,
} from "react";
import { apiClient } from "../api/client";

export type AuthContextType = {
  authenticated: boolean;
  loading: boolean;
  login: (data: any) => Promise<Response>;
  register: (data: any) => Promise<Response>;
  logout: () => Promise<void>;
  deleteAccount: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await apiClient("/api/_allauth/browser/v1/auth/session");
      if (res.ok) {
        const data = await res.json();
        // If there's a user object, we are authenticated
        if (data.data?.user) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } else {
        setAuthenticated(false);
      }
    } catch {
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (data: any) => {
    const res = await apiClient("/api/_allauth/browser/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setAuthenticated(true);
    }
    return res;
  };

  const register = async (data: any) => {
    const res = await apiClient("/api/_allauth/browser/v1/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      // successful signup usually logs the user in
      checkAuth();
    }
    return res;
  };

  const logout = async () => {
    try {
      await apiClient("/api/_allauth/browser/v1/auth/session", {
        method: "DELETE",
      });
      setAuthenticated(false);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteAccount = async () => {
    try {
      const res = await apiClient("/api/users/delete/", {
        method: "DELETE",
      });
      if (res.ok) {
        setAuthenticated(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        loading,
        login,
        register,
        logout,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
