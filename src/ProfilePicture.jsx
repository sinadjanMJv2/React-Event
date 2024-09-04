import $ from 'jquery';

function ProfilePicture() {
    const imageUrl = "./src/assets/react.svg";
  
    const handleClick = (e) => {
      $(e.target).hide();
      $('#hiddenButton').show();
    };
  
    const handleClick2 = (e) => {
      $(e.target).hide();
      $('#logo').show();
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
  