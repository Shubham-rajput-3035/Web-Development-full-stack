import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning =winningCondition(ticket);
  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />

      {/* <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div> */}
      <br />
      <button onClick={buyTicket}> Buy New Ticket</button>
      <h3>{isWinning && "Congratulation, you won!"}</h3>
    </div>
  );
}
