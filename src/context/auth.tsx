"use client";
import { createContext, useContext, ReactNode, FC } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  login: (
    email: string,
    senha: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextType;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProviders: FC<AuthProviderProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const login = async (email: string, senha: string) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        senha,
      });

      if (result?.error) {
        throw new Error(result.error);
      } else {
        return { success: true };
      }
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  };

  const logout = async () => {
    try {
      await signOut({ redirect: false });

      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  };

  const value = {
    user: session?.user,
    isAuthenticated: status === "authenticated",
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
