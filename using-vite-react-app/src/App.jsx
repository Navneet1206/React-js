import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
function App() {
  return (
    <>
      <Navbar />
      <div className="cards" >
   
      <Card title = "Card 1"  Desc = "Card 1 description"/>
      <Card title = "Card 2"  Desc = "Card 2 description"/>
      <Card title = "Card 3"  Desc = "Card 3 description"/>
      <Card title = "Card 4"  Desc = "Card 4 description"/>
      </div>

      
      <Footer />
    </>
  )
}

export default App
