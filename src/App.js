import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import {useState} from 'react'
import Login from './components/Login'
// import Widget from './Widget'

function App() {
  const [user, setUser] = useState(null)
  return (
    <AppWrapper>
      {user ? (
        
          <div className="app__body">
            <Header />
            <Sidebar />
            <Feed />
            {/* <Widget /> */}
          </div>
        ) : (
          <Login />
      )}
    </AppWrapper>
  );
}
const AppWrapper = styled.div `
 background-color: #f1f2f5;
 .app__body {
  display: flex;
 }
`
export default App;
