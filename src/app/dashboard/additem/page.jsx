"use client";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    console.log(title);
  };
  return (
    <div className="max-w-[500px] mx-auto p-2 ">
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="form-control"></label>
          <input
            type="text"
            name="title"
            required
            className="border border-main focus:outline-none p-2 w-full"
            id=""
          />
        </div>
        <div>
          <input
            type="submit"
            value="add product"
            className="w-full border border-main focus:outline-none p-2 bg-main text-white cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
