const CoffeeCard = ({ coffee }) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={coffee.photo} alt="coffee" />
        </figure>
        <div className=" flex ">
        <div>
        <h2 className="card-title">{coffee.name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        </div>
          <div className="card-actions justify-end ">
            <button className="btn btn-primary">view</button>
            <button className="btn btn-primary">edit</button>
            <button className="btn btn-primary">delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
