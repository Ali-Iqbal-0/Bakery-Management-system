
import './App.css';

import AuthUser from './components/AuthUser';
import Guest from './components/navbar/Guest';
import Auth from './components/navbar/auth';  
function App() {
  const {getToken}=AuthUser();
  
  if(!getToken()){
return <Guest/>



  }
  else{
    return <Auth/>
  }

}

export default App;