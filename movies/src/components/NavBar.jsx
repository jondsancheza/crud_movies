
import {AppBar, Toolbar, styled} from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 40px;
    color: inherit;
    text-decoration: none;
`
const NavBar = () => {
    return(
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>Ver Peliculas</Tabs>
                <Tabs to='/add'>Agregar Pelicula</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;