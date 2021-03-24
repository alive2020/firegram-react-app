import React, {useState} from 'react'
import ImageGrid from './comps/ImageGrid.js'
import Modal from './comps/Modal.js';
import Title from './comps/Title.js'
import UploadForm from './comps/UploadForm.js'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
    <Title/>
    <UploadForm/>
    <ImageGrid setSelectedImg={setSelectedImg}/>
    {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
