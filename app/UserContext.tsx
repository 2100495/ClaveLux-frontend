import { createContext, useContext, useState, ReactNode } from "react";

// Define types for the context value
interface UserContextType {
  userId: string | null; // userId can be string or null
  updateUserId: (id: string | null) => void; // Function to update userId
}

// Create context with a default value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null); // State to store the user ID

  // Function to update the userId (can be called from other components)
  const updateUserId = (id: string | null) => {
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userId, updateUserId }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
