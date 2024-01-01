import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Register = () => {
  const volenteers = useLoaderData();

  const handlerformSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const description = form.description.value;
    const selectVolenter = form.volunteer.value;
    const volenteerInfo = {
      name,
      email,
      date,
      description,
      volenteer: selectVolenter,
    };

    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(volenteerInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Registation success');
          form.reset();
        }
      });
  };
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Register as a Volunteer{' '}
      </h1>

      <form
        onSubmit={handlerformSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="volunteer"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Select Volunteer:
          </label>
          <select
            id="volunteer"
            name="volunteer"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            {volenteers.map(volenter => (
              <option defaultValue={volenter.title} key={volenter._id}>
                {volenter.title}
              </option>
            ))}
            {/* Add more volunteer options as needed */}
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-500 w-full text-white px-4 py-2 rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
