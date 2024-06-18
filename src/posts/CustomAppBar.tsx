import { AppBar } from 'react-admin';
import CSS from 'csstype';

export default function CustomAppBar() {
    const CustomAppBarStyles: CSS.Properties = {
        //'display':'none',
    }
    return(
        <AppBar style={CustomAppBarStyles}/>
    );
}