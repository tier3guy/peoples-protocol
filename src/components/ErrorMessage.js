const ErrorMessage = ({ message, style }) => {
  return (
    <p
      style={{
        color: "var(--danger)",
        fontStyle: "italic",
        ...style,
      }}
    >
      {message}
    </p>
  );
};

export default ErrorMessage;
