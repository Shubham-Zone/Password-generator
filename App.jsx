import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowd, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [btn, setbtn] = useState("copy")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowd) str += "!@#$%^&*()-_=+[{]}\|;:',<.>/?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },
    [length, numAllowed, charAllowd, setPassword])

    useEffect(()=>{

       passwordGenerator()

    },[length, charAllowd, numAllowed, passwordGenerator])

    const copyPasswordToClipboard = useCallback(()=>{

      passwordRef.current?.select()
      
      // To select text in a range
      // passwordRef.current?.setSelectionRange(0, 3)
      setbtn('Copied')

      setTimeout(()=>{
        setbtn('Copy')
      }, 4500)

      window.navigator.clipboard.writeText(password) 

    },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500
      bg-gray-800">
        <h1 className='text-4xl text-center text-white mb-5 my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 '
            placeholder='password'
            readOnly
            ref = {passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 
          shrink-0'
          >{btn}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>

      </div>


    </>
  
  )

}

export default App
