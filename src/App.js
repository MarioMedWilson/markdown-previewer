import './App.css';
import React, {useState} from 'react';
import {marked} from 'marked'
import useLocalStorage from './useLocalStorage';
import Doc from './Doc'

const App = () => {
  const [value, setValue] = useLocalStorage("content", "## Hello")
  const [compiled, setCompiled] = useState(() => {
    const saved = window.localStorage.getItem("content")
    if (saved == null) {
      return "<h2 id='hello'>Hello</h2>"
    }
    if (saved !== null) {
      return marked.parse(saved)
    }
  })
  const [hide, hidePreview] = useState(true)
  const [show, showDoc] = useState(false)

  const openMD = () => {
    console.log(0)
    hidePreview(true)
  }

  const openPreview = () => {
    console.log(0)
    hidePreview(false)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    setCompiled(marked.parse(e.target.value))
  }



  const showDocument = () => {
    showDoc(true)
  }

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">MarkDown</button>
          <button onClick={openPreview}>Preview</button>
          <button onClick={showDocument}>Docs</button>
        </div>
        <div>
          {
            show ?
                <Doc />
                :
                <div>
                  {
                    hide ?
                        <div>
                          <textarea onChange={handleChange} value={value} />
                        </div> :
                        <div>
                          <textarea value={compiled} />
                        </div>
                  }
                </div>
          }
        </div>
      </div>
    </>
  )
}


export default App;
