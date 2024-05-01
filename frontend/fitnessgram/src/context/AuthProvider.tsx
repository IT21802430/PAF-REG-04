import { ReactNode, createContext, useContext, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [currentUser, setCurrentUser] = useState<any>(null); 
    const [token, setToken] = useState<string>(""); 

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);
    const user = (data: any) => setCurrentUser(data);
    const tokenize = (data: string) => setToken(data); 

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, currentUser, login, logout, user, token, tokenize }}
        >
            {children}
        </AuthContext.Provider>
    );
}; 

export const useAuth = () => useContext(AuthContext);