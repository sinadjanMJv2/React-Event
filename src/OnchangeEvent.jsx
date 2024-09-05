import React, { useState } from "react";

function OnchangeEvent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function hadleShippingChange(event) {
    setShipping(event.target.value);
  }


  return (
    <div>

      <h3>This area is for input type:</h3>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>



      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>



      <h3>This area is for textarea type:</h3>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Please Comment if any concern"
      />
      <p>Comment: {comment}</p>




      <h3>This area is for select box type:</h3>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>


      <h3>This area is for radio button type:</h3>
  <label >
    <input type="radio" value={"Pick Up"} checked={shipping === "Pick Up"} onChange={hadleShippingChange}/>
    Pick Up
  </label>
  <label >
    <input type="radio" value={"Delivery"} checked={shipping === "Delivery"} onChange={hadleShippingChange}/>
    Delivery
  </label>

  <p>Shipping Status: {shipping}</p>

    </div>
  );
}

export default OnchangeEvent;
