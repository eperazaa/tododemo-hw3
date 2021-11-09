import React, {useContext} from 'react'

import { Navbar } from 'react-bootstrap'

import { Link } from 'react-navi'

const Header = ({text}) => {     
    return <Link href="/"><Navbar.Brand >{text}</Navbar.Brand></Link>
}

export default Header 
