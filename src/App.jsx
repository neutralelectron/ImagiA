import React from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './app.css'
import mod from './mod.jpg'
function App() {

  const [pro, setPro]= React.useState('');
  const [result, setResult]= React.useState('');
  
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage= async ()=>{
    const res=await openai.createImage({
      prompt: pro,
      n: 1,
      size: "1024x1024",
    });
    setResult(res.data.data[0].url)
  }


  return (
    <div className="App">
      <div className='hea'>
        <h1>Generate Image Using Open AI</h1>
        <img className='modi' src={mod}/>
      </div>
      <input onChange={(e)=>setPro(e.target.value)} placeholder="Type Something to Generate an image"/>
      <button onClick={generateImage}>Generate an Image</button>
      {result.length>0? <img src={result} alt='Img'/>: ''}
    </div>
  )
}

export default App
