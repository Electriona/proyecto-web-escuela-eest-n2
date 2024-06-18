import { Layout } from 'react-admin';
import CustomAppBar from './CustomAppBar';
import CustomMenu from './CustomMenu';
import CustomSidebar from './CustomSidebar';

export default function CustomLayout(props: any) {
    return(
        <Layout {...props} appBar={CustomAppBar} menu={CustomMenu} sidebar={CustomSidebar}/>
    );
}