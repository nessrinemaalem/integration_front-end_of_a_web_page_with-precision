import './index.scss'
import { Header } from "./components/Header";
import { Event } from "./components/Event";
import { AttendeeTable } from "./components/AttendeeTable";
import { PlayerProfile } from "./components/PlayerProfile";
import { NextEventCard } from "./components/NextEventCard/NextEventCard";
import { LastEventCard } from "./components/LastEventCard";

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Feuille de Match</h1>
        <div className="match-card-board">
          <div className='main'>
            <Event />
            <AttendeeTable />
          </div>
          <div className='secondary'>
            <PlayerProfile />
            <NextEventCard />
            <LastEventCard />
          </div>
        </div>
      </main>
    </div>
  );
};
