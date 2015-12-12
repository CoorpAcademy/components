export default (React) => ({ poll }) => {
  const { title, options } = poll;

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {poll.options.map(({ title }) => (
          <li>{title}</li>
        ))}
      </ul>
    </div>
  );
};
