import './Style.css';
import './App.css';
import mysourceimage from "./ImageInSrc.jpg";
function App() {
  return (
    <div className="App">
       <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
          <h1 className='title red'>Chaima</h1>
          <img src={mysourceimage} alt ='Totilas' width='250' /> 
          <br/>
          <img src="/imageInPublic.jpg" width='250' />
          <br/>
          <video 
              width="320" 
              height="240" 
              controls 
              src="myVideo.mp4" 
              type="video/mp4">
          </video>
       </div>
    </div>   
  );
}

export default App;