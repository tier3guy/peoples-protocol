const Inputs = (props) => {
  const { value, onChange, style, ...restProps } = props;

  return (
    <input
      {...restProps}
      style={{
        width: "100%",
        padding: "15px",
        background: "var(--white)",
        color: "var(--primary)",
        borderBottom: "2px solid var(--secondary)",
        fontSize: "1em",
        margin: "15px 0px",
        ...style,
      }}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default Inputs;
