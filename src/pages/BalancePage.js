import { getBalance } from "../store/balance/selectors";
import { useSelector, useDispatch } from "react-redux";

const BalancePage = () => {
  const balanceAmount = useSelector(getBalance);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Balance</h1>
      <p>Balance: {balanceAmount}</p>
      <button
        onClick={() => {
          const action = { type: "increaseBalance", payload: 10 };
          dispatch(action);
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          const action = { type: "resetBalance" };
          dispatch(action);
        }}
      >
        Reset Balance
      </button>
    </div>
  );
};

export default BalancePage;
