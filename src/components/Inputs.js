const Inputs = (props) => {
  return (
    <input
      {...props}
      style={{
        width: "100%",
        padding: "15px",
        background: "var(--white)",
        color: "var(--primary)",
        borderBottom: "2px solid var(--secondary)",
        fontSize: "1em",
      }}
    />
  );
};

export default Inputs;
