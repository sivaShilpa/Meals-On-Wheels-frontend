
import "../App.css"


function Header(props) {  
  
  return (
    <header>      
      <nav className="navbar">
        <ul>
          <li className="navRight">
            <ul>
              <li className="howItWorks">              
                <a href="/HowItWorks" >
                  How It Works
                </a>            
              </li>
              <li className="menu">
                <a href="/Menu">
                  Menu
                </a>
              </li>
              <li className="signup">
                <button><a className="signupLink" href="/signup">Sign in / Sign up</a></button>
              </li>
            </ul>               
          </li>
          <li className="logo">            
            <a href="/">
              <img src="https://i.imgur.com/CQgzHdV.jpg" alt="logo"></img>
            </a>            
          </li>
          <li className="business">            
            <h1>Meals On Wheels</h1>            
          </li>
        </ul>            
      </nav>
    </header> 
  );
}
  
export default Header;