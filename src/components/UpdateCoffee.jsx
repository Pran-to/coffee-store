import { toast, ToastContainer } from "react-toastify";
import Header from "./Header";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const  {_id, name,category, quantity, supplier, taste, details, photo } = coffee
     const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = { name,category, quantity, supplier, taste, details, photo };
        console.log(updateCoffee);
    
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              toast.success("Update Successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
              });
            }
          });
          form.reset()
      };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <div className=" w-3/4 mx-auto p-10 space-y-7  bg-[#F4F3F0]">
        <div className="text-center space-y-2 ">
          <h1 className="text-2xl font-bold font-title ">Update Coffee</h1>
          <p className="font-title text-xl">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-2 gap-5 font-semibold">
            <label className="input input-bordered flex items-center gap-2">
              Name:
              <input
                type="text"
                name="name"
                className="grow"
                defaultValue={name}
                placeholder="Enter coffee name"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Quantity:
              <input
                type="number"
                name="quantity"
                className="grow"
                defaultValue={quantity}
                placeholder="Enter coffee quantity"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Supplier:
              <input
                type="text"
                name="supplier"
                className="grow"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Taste:
              <input
                type="text"
                name="taste"
                className="grow"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Category:
              <input
                type="text"
                name="category"
                className="grow"
                defaultValue={category}
                placeholder="Enter coffee category"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Details:
              <input
                type="text"
                name="details"
                className="grow"
                defaultValue={details}
                placeholder="Enter coffee details"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 col-span-2">
              Photo:
              <input
                type="text"
                name="photo"
                className="grow"
                defaultValue={photo}
                placeholder="Enter Photo URL"
                required
              />
            </label>
            <button
              type="submit"
              className="btn col-span-2 font-title bg-[#D2B48C] border-black "
            >
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
