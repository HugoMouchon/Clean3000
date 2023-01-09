import '../../sass/App.scss';
import '../Home/home.scss';
import logo from '../../img/logo-clean3000.png';
// import logoSVG from '../../img/picture-clean.png';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <html>
            <header className='header'>
                <Link to="/">
                    <img className='logo' src={logo} alt="loggo de l'entreprise Clean 3000" />
                </Link>
            </header>
            <body className='container'>
                <section className='accueil'>
                    <Link to="/avisdepassage">
                        <Button className='btn'>Commencer</Button>
                    </Link>
                </section>

                <div className='logoSVG'>
                    {/* <img src={logoSVG} alt="" /> */}
                </div>
            </body>
        </html>
    );
}

export default Home;
