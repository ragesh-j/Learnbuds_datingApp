import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfileView from './Components/ProfileView/ProfileView'
import ViewStory from './Components/viewStory/viewStory'
import Settings from './Components/Settings/Settings'
import PrivacySettings from './Components/PrivacySettings/PrivacySettings'
import UpgradeView from './Components/UpgradeView/UpgradeView'
import OwnProfileView from './Components/OwnProfileView/OwnProfileView'
import Subscription from './Components/Subscription/Subscription'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/profileview' element={<ProfileView />} />
        <Route path='/viewstory' element={<ViewStory />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/privacysettings' element={<PrivacySettings />} />
        <Route path='/upgradeview' element={<UpgradeView />} />
        <Route path='/ownProfileview' element={<OwnProfileView />} />
        <Route path='/subscription' element={<Subscription />} />






      </Routes>
    </div>
  )
}

export default App
