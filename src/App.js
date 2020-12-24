import './App.css';
// import SidePanelHeader from "./components/SidePanelHeader/SidePanelHeader";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Content/Profile/Profile";
import Compose from "./components/Content/Compose/Compose";
import SidePanel from "./components/SidePanel/SidePanel";

function App() {
  return (
    <div className="App">
        <div className="side-navigation">
          {/* <SidePanelHeader /> */}
          <SidePanel />
      {/* <SidePanel>
            <SidePanelHeader>
              section1
                Profile
                Compersion
                Compose
            </SidePanelHeader>
            <SearchBar />
            <SidePanelContent>
              <IdeaPrompt>
                <Image />
                <Content />
              </IdeaPrompt>
              <IdeaPrompt>
              <IdeaPrompt>
            </SidePanelContent>
          </SidePanel> */}
        </div>
        <div className="content">
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/compose" component={Compose} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
