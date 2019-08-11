import {Link} from 'office-ui-fabric-react/lib/Link'
import * as React from 'react'
import './index.css'

const Footer = () => (
    <div className="footer-container">
        {'© Office Fabric UI App 2019. '}
        <Link href="https://ochomoswill.github.io">Get in touch!</Link>
        {' -- Made with '}
        <span className="text-red">♥</span>
        {' by '}
        <Link href="https://github.com/ochomoswill">Ochomo William {'<@ochomoswill>'}</Link>
    </div>
);

export default Footer