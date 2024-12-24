import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee ,Coffees,setCoffees}) => {
  const handleDelete = (_id) => {
    console.log(_id);
    if (_id == coffee._id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Coffee has been deleted.",
                  icon: "success",
                });
                const remaining =  Coffees.filter(cof => cof._id !== _id)
                setCoffees(remaining)
              }
            });
        }
      });
    }
  };
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

            <NavLink to={`updateCoffee/${coffee._id}`}>
              <button className="btn btn-primary">edit</button>{" "}
            </NavLink>

            <button
              className="btn btn-primary"
              onClick={() => {
                handleDelete(coffee._id);
              }}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
CoffeeCard.propTypes = {
  coffee : PropTypes.object,
  Coffees : PropTypes.array,
  setCoffees: PropTypes.func,
};
