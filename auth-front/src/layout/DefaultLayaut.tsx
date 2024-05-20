import {Link} from "react-router-dom";
import { Children } from "react";

interface DefaultLayoutProps{
    children: React.ReactNode
}

export default function DefaultLayaut({children}:DefaultLayoutProps){
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/singup" >SingUp</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </>
    )
}