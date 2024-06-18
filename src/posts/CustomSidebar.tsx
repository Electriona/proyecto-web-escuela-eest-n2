import { Sidebar } from 'react-admin';
import CSS from 'csstype';

export default function CustomSidebar(props: any) {
    const CustomSidebarStyles: CSS.Properties = {
        //'display':'none',
    }
    return(
        <Sidebar {...props} style={CustomSidebarStyles}/>
    );
}