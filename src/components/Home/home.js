import '../../sass/App.scss';
import '../Home/home.scss';
import logo from '../../img/logo-clean3000.png';

function Home() {
    return (
        <html>
            <header className='header'>
                <img className='logo' src={logo} alt="" srcset="" />
                <h1>Clean 3000</h1>
            </header>
            <body className='container'>

            </body>
        </html>
    );
}

export default Home;
