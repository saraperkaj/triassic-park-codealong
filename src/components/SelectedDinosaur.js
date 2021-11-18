const SelectedDino = (props) => {
  const { image, name, weight, carnivore } = props.dino;

  return (
    <div className="selected-dino">
      <h3>Currently Selected Dinosaur</h3>
      <img className="dino-image" src={image} alt="Selected dinosaur image" />
      <p>{name || "No Dinosaur Selected"}</p>
    </div>
  );
};

export default SelectedDino;
