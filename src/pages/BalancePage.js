const BalancePage = () => {
  return (
    <div>
      <h1>Balance</h1>
      <p>Balance: 0</p>
      <button
        onClick={() => {
          console.log("Increment my balance");
        }}
      >
        Deposit 10$
      </button>
    </div>
  );
};

export default BalancePage;
