function ProfilePicture() {
    const imageUrl = "./src/assets/react.svg";
  
    const handleClick = (e) => {
      e.target.style.display = "none";
      document.getElementById('hiddenButton').hidden = false;
    };
  
    const handleClick2 = (e) => {
      e.target.style.display = "none";
      document.getElementById('logo').style.display = "block";
    };
  
    return (
      <>
        <button id="hiddenButton" onClick={(e) => handleClick2(e)} hidden>Click to Get the logo Back</button>    
        <img
          id="logo"
          className="logo"
          onClick={(e) => handleClick(e)}
          src={imageUrl}
          alt=""
        />
      </>
    );
  }
  
  export default ProfilePicture;
  