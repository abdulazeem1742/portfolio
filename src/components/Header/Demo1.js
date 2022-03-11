import React from "react";
import { Link } from 'react-router-dom';

const Demo1 = () => {
    const [visible, setVisible] = React.useState(false);
    return (
      <div className="toggle-wrap">
        <button onClick={() => setVisible(!visible)}>{visible ? 'x' : '-'}</button>
        {visible && 
        <div className="mobile-nav">
            <ul>
                <li>
                    <Link to='/' className='active'>Home</Link>
                </li>
                <li>
                    <Link to='/aboutpage'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>}
      </div>
    );
  };
  export default Demo1;