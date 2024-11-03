"use client";

// import necessary modules
import { useSelectedLayoutSegments } from "next/navigation";
import { createContext, useContext } from "react";

// type definition
type Client = {
  client: null;
  setClient: (client: any) => void;
};

// create context
const ClientContext = createContext({});

// create provider
export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const segments = useSelectedLayoutSegments();

  if (segments.includes("(admin)")) {
    return null;
  }

  return <ClientContext.Provider value={{}}>{children}</ClientContext.Provider>;
};

// export context and provider
export const useClient = () => useContext(ClientContext);
