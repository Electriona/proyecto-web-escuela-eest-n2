import { Menu } from 'react-admin';
import CSS from 'csstype';

export default function CustomMenu() {
    const CustomMenuStyles: CSS.Properties = {
        //'display':'none',
    }
    return(
        <Menu style={CustomMenuStyles}/>
    );
}