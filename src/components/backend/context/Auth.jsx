import { Children, createContext } from "react";
export const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{

    const userInfo = localStorage.getItem('UserInfo');
    const [user,setUser] = useState(userInfo)

    // 2methods
    // 1.login methods

    const Login= (user)=>{
        setUser(user)
    }

    const Logout= (user)=>{
        localStorage.removeItem('userInfo');
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{
            user,login,logout
        }}>


            {children}
        </AuthContext.Provider>
    )
}