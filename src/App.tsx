import { Route, Routes, BrowserRouter } from "react-router-dom";
import PostsPublic from './posts/PostsPublic';
import PostsAdmin from './posts/PostsAdmin';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<PostsPublic />} />
                <Route path='/admin/*' element={<PostsAdmin />} />
            </Routes>
        </BrowserRouter>
    );
}