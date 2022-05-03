import { ReactNode } from "react";
import './styles.css';

type Props = {
    children: ReactNode
}

export const LayoutComponents = ({children}:Props) =>{
    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">{children}</div>
            </div>
        </div>
    );
}
