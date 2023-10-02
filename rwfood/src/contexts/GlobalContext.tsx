import { ReactNode, createContext, useState } from "react";
import { clearStorage, saveToken } from '../facades/localStorage';
import { ICategory } from '../interfaces/category'
import { IUser } from '../interfaces/user'

const initialValues: IUser = {
  id: 0,
  idCompany: 0,
  status: 1,
  createdAt: '',
  updated: '',
  name: '',
  surname: '',
  document: '',
  image1: '',
  cell: '',
  mail: '',
  pass: '',
  level: 0,
}

type ContextType = {
  category: ICategory[];
  setCategory: (cat: ICategory[]) => void;
  user: IUser | null,
  //tokenAuth: string | null,
  setUser: (u: IUser) => void,
  login: (user: IUser, token: string) => void;
  logout: () => void;
}

export const GlobalContext = createContext<ContextType | null>(null);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<ICategory[]>([]);
  const [user, setUser] = useState<IUser>(initialValues);

  return (
    <GlobalContext.Provider
      value={{
        category,
        setCategory,
        user,
        setUser,
        login: (user: IUser, token: string) => {
          setUser(user);
          saveToken(token);
        },
        logout: () => {
          setUser(initialValues);
          clearStorage();
        }
      }}>{children}
    </GlobalContext.Provider>
  );

}