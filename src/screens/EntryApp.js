import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/ui/navbar/Navbar';
import Button from '../components/ui/button/Button';

import "../styles/entryApp/entryApp.css"


function EntryApp() {

  const navigate = useNavigate()
  function returnLogin() {
    // navigate("/login?name=roberto&cc=5463773873873478378347&surname=Brogi")
    navigate("/login/10")
  }

  const renderLink = () => {
    <Link to={ "/contact" }
      state={
        {
          name: 'Roberto',
          surname: 'Brogi',
          logged: true
        }
      }
    >
      <h2>Login Link</h2>
    </Link>
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar /> */ }

        <div className='container'>

          <div>{ renderLink() }</div>

          <h2>Home page</h2>

        </div>
      </header>

    </div>
  );
}

export default EntryApp;
