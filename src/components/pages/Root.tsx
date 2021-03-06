import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../organisms/Header/Header";
import MenuModal from "../organisms/MenuModal/MenuModal";
import TalkMap from "../organisms/TalkMap/TalkMap";
import About from "./About/About";
import Post from "./Post/Post";
import Talk from "./Talk/Talk";
import TalkCity from "./TalkCity/TalkCity";
import TalkDetail from "./TalkDetail/TalkDetail";
import Top from "./Top/Top";
import Video from "./Video/Video";

const Root: React.FC = () => {
  const [isMenuModal, setMenuModal] = useState(false);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header setMenuModal={setMenuModal} />
      <MenuModal isMenuModal={isMenuModal} setMenuModal={setMenuModal} />
      <Switch>
        <Route exact={true} path="/" component={Top} />
        <Route exact={true} path="/talks/:page" component={Talk} />
        <Route
          exact={true}
          path="/talks/country/:country"
          component={TalkCity}
        />
        <Route exact={true} path="/talk/detail/:date" component={TalkDetail} />
        <Route exact={true} path="/posts/:page" component={Post} />
        <Route exact={true} path="/videos/:page" component={Video} />
        <Route exact={true} path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default Root;
