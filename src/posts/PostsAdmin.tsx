import {
    Admin,
    Resource,
    ShowGuesser,
    defaultLightTheme,
    defaultDarkTheme,
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import dataProvider from '../dataProvider';
import PostList from './PostList';
import PostEdit from './PostEdit';
import PostCreate from './PostCreate';

export default function PostsAdmin() {
    return (
        <Admin
            dataProvider={dataProvider}
            lightTheme={defaultLightTheme}
            darkTheme={defaultDarkTheme}
            defaultTheme="dark"
            basename='/admin'
        >

            <Resource
                name="posts"
                list={PostList}
                edit={PostEdit}
                create={PostCreate}
                show={ShowGuesser}
                recordRepresentation="title"
                icon={BookIcon}
            />

            <Resource name="tags" recordRepresentation={tag => tag.name.en} />
        </Admin>
    );
}