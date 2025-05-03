import "./main.css";
import {section} from "../footer/mcomps/section/section";
import {section} from "../footer/mcomps/article/article";
import {section} from "../footer/mcomps/aside/aside";

export default function Main() { 
    return (
        <div className="main">
            <Section/>
            <Article/>
            <Aside/>        
        </div>
    )
}