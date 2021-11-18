const SelectedDino = (props) => {
  const { image, name, weight, carnivore } = props.dino;
  const foodCost = Math.floor(weight / 5) + 1;

  // console.log({ dino: props.dino });
  // console.log({ foodCost: foodCost });

  // if (foodCost > 1 && carnivore) {
  //   ("goats");
  // } else if (foodCost < 1 && carnivore) {
  //   ("goat");
  // } else if (foodCost > 1 && !carnivore) {
  //   ("tree");
  // } else {
  //   ("tree");
  // }

  return (
    <div className="selected-dino">
      <h3>Currently Selected Dinosaur</h3>
      <img className="dino-image" src={image} alt="Selected dinosaur image" />
      <p>{name || "No Dinosaur Selected"}</p>

      {name ? (
        <p>
          Eats:{" "}
          {carnivore
            ? foodCost + (foodCost > 1 && carnivore ? " goats" : " goat")
            : foodCost + (foodCost > 1 && !carnivore ? " trees" : " tree")}
        </p>
      ) : null}
    </div>
  );
};

export default SelectedDino;
