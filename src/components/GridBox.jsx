function GridBox(props) {
  return (
    <div className="boxes-row">
      <img className="boxes-image" src={props.src} alt="menu logo" />
      <h5>{props.textTitle}</h5>
      <p>{props.textDescription}</p>
    </div>
  );
}
export default GridBox;