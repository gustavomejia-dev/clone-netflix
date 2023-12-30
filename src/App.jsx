import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Row from './components/Row/Row'
import categories from './api'
import './App.css'
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
       
    <div className='App'>
      <Nav/>
      <Banner/>
      {categories.map((category, index) => {
          // console.log(category.path)
              return <Row 
                        isLarge={category.isLarge}
                        key={index} 
                        title={category.title} 
                        path={category.path}/>;
        })}
    </div>
          
    
  )
}

export default App
