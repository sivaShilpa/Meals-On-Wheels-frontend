
import "../App.css"

function Header(props) {  
  return (
    <header>      
      <nav className="navbar">
        <ul>
          <li className="navRight">
            <div>
              <a href="/HowItWorks">
                How It Works
              </a>
            </div>
            <div>
              <a href="/Menu">
                Menu
              </a>
            </div>
            <div>
              <button><a className="signup" href="/signup">Sign in / Sign up</a></button>  
            </div>            
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