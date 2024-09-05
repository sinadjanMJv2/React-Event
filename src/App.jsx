import Button from './Button.jsx';
import Profile from './ProfilePicture.jsx';
import Onchange from './OnchangeEvent.jsx';

import './App.css'

function App() {
  return ( <>
  <h1>This Method here used a OnClick Event</h1>
  <Button/>
  <Profile/>

  <h1>This Method here used a Onchange Event</h1>
 <Onchange/>
  </> );
}

export default App;