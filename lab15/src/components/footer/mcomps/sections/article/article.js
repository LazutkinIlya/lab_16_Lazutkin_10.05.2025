import "./article.css";
import News from"../../../artcomps/news/news";
import About from"../../../artcomps/about/about";
import Contacts from"../../../artcomps/contacts/contacts";
import {Routes, Route} from "react-routing-dom";

export function Article(
    return(
        <div className="article">
            <Routes>
                <Route path="/news" element={<News/>} />
            </Routes>
        </div>
    );
)