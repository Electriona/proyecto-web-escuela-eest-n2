import {
    Admin,
    defaultLightTheme,
    defaultDarkTheme,
    CustomRoutes,
} from 'react-admin';
import { Route } from "react-router-dom";
import dataProvider from '../dataProvider';
import PostListPublic from './PostListPublic';

export default function PostsPublic() {
    return (
            <Admin
                dataProvider={dataProvider}
                lightTheme={defaultLightTheme}
                darkTheme={defaultDarkTheme}
                defaultTheme="dark"
            >
                <CustomRoutes noLayout>
                    <Route path='' element={<PostListPublic />} />
                </CustomRoutes>
            </Admin>
    );
}