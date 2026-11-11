import { useState } from 'react'

function App() {
  const [name, setName] = useState('')

  return (
    <>
      <section id="center">
        <div>
          <h1>Enter Your Name</h1>
          <div>
            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
    
            />
          </div>
          
          {name && (
            <div>
              <p>Hello, <span>{name}</span></p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default App;
