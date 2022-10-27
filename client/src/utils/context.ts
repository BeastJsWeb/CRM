import { createContext } from "react";

interface IContextProps {
  isNav: boolean;
  hanlde: () => void
}

export const sidebarContext = createContext({} as IContextProps)