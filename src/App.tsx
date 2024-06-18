import {
    Admin,
    Resource,
    ShowGuesser,
    defaultLightTheme,
    defaultDarkTheme,
    CustomRoutes,
} from 'react-admin';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BookIcon from '@mui/icons-material/Book';
import dataProvider from './dataProvider';
import PostListPublic from './posts/PostListPublic';
import CustomLayout from './posts/CustomLayout';

function App() {
    return (
        <BrowserRouter>
            <Admin
                dataProvider={dataProvider}
                lightTheme={defaultLightTheme}
                darkTheme={defaultDarkTheme}
                layout={CustomLayout}
            >
                <CustomRoutes noLayout>
                    <Route path='blog' element={<PostListPublic />} />
                </CustomRoutes>
                
                {/* <Resource
                    name="posts"
                    list={PostListPublic}
                    show={ShowGuesser}
                    recordRepresentation="title"
                    icon={BookIcon}
                />

                <Resource
                    name="posts"
                    list={PostList}
                    edit={PostEdit}
                    create={PostCreate}
                    show={ShowGuesser}
                    recordRepresentation="title"
                    icon={BookIcon}
                /> */}

            </Admin>
        </BrowserRouter>
    );
}

export default App;
