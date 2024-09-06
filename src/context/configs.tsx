"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";

interface ConfigContextType {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  toggleCollapse: () => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const useConfig = (): ConfigContextType => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("Erro ao usar useConfig");
  }
  return context;
};

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider: FC<ConfigProviderProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ConfigContext.Provider value={{ collapsed, setCollapsed, toggleCollapse }}>
      {children}
    </ConfigContext.Provider>
  );
};
