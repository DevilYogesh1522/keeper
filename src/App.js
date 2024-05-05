
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Note from './Component/Note';

function App() {
  return (
    <div>
   <Header title="Keeper"></Header>
   <div className='row'>
    <div className='col'>
   <Note title="Manish" number="9307828249"   src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"></Note>
      
   </div>
   <div className='col'>
   <Note title="Vivek" number="9307828249"  src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"></Note>
   </div>
   <div className='col'>
   <Note title="Vighnesh" number="9307828249"  src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"></Note>
   </div>
   <Footer></Footer>
   </div>
   </div>
  );
}

export default App;
