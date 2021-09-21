import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../store/players/selectors";

const PlayerPage = () => {
  const dispatch = useDispatch();
  const players = useSelector(getPlayers);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/players");
        console.log(response.data);
        dispatch({ type: "playersFetched", payload: response.data });
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>Player page</h1>
      {players.map(p => (
        <h3>{p.name}</h3>
      ))}
    </div>
  );
};

export default PlayerPage;
