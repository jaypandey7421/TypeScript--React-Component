import Navbar from './components/Navbar'
import Footer from './components/Footer';
import DeviderStrip from './components/DeviderStrip';
import Card from './components/Card';

export default function App() {

  return (
    <>
      <Navbar />
      <DeviderStrip 
        text='Ваш текст' 
        paragraph={<i className="fa-solid fa-paint-roller"></i>}/>
      <div>
        <Card
            cardImgSrc='https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/01/johnny-bravo.jpg' 
            date={new Date(2025, 11, 25)}
            time={new Date(2025, 11, 25, 15, 14)}
            header='Ево вашег заглавља'
            />
      </div>
      <Footer />
    </>
  );
}


