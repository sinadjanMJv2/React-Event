function Button() {
  const handleclick = () => console.log("Ouch");
  const handleclick2 = (name) => console.log(`${name} stop clicking me`);
  const handleClick4 = (e) => (e.target.textContent = "OUCH! 😢");

  let count = 0;
  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };

  return (
    <>
      <button onClick={() => handleClick3("Michael 😂")}>Click me</button>
      <br />
      <hr />
      <button onClick={(e) => handleClick4(e)}>Click Me Bitch</button>
      <br />
      <hr />
    </>
  );
}

export default Button;
