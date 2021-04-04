import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  let headingMessage = 'Hello React World';
  return (
    <div>
      <Header />
       <main>
          <p>This is my first React test app page</p>
          <p>This is my first React test app page</p>
          <p>This is my first React test app page</p>
       </main>
      <Footer />
    </div>
    
  );
}

export default App;
