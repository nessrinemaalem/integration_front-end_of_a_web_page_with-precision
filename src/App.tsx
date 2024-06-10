import './index.scss'
import { Header } from "./components/Header";
import { Event } from "./components/Event";
import { Test } from "./components/Test";
import { PlayerProfile } from "./components/PlayerProfile";
import { NextEventCard } from "./components/NextEventCard/NextEventCard";
import { LastEventCard } from "./components/LastEventCard";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="match-card-board">
        <div className='main'>
          <Event />
          <Test />
        </div>
        <div className='secondary'>
          <PlayerProfile />
          <NextEventCard />
          <LastEventCard />
        </div>
      </div>
    </div>
  );
};
