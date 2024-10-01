import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/LoginSlice";
import './Footer.css'

function Footer() {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      dispatch(logout()); 
      navigate('/login'); 
    };
  
  
  return (
    <footer className="footer sticky-bottom " >
      <a  href="https://www.amazon.in/l/29657746031/?_encoding=UTF8&ref_=ineJup24_p1_nta_dsk&pd_rd_w=FPcBf&content-id=amzn1.sym.9f85da07-7ec6-4ee8-a51e-2d6f6e836608&pf_rd_p=9f85da07-7ec6-4ee8-a51e-2d6f6e836608&pf_rd_r=FQ0S4J65H2EWVBKBZ3H3&pd_rd_wg=Ze55j&pd_rd_r=3f29ae3d-4941-4295-962d-b40ca8a6464a">Get more products</a>
      <div className="button-container">
      <button className='cta-button right-button' onClick={handleLogout}>
      Log Out
    </button>

      </div>
    </footer>
  );

}

export default Footer;
