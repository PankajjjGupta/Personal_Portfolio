import { createContext } from "react";

// Define the shape of your theme context
interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  }
  

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
