import { useState } from 'react';
import toast from 'react-hot-toast';

const AddEvent = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handlerformSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const date = form.date.value;
    const description = form.description.value;

    const eventInfo = {
      title,
      date,
      description,
      image: imagePreview,
    };
    fetch('http://localhost:5000/volentars', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(eventInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Event Added Success');
        }
      });
  };

  // image uploaded section
  const handleImageChange = e => {
    const file = e.target.files[0];
    // Read the image data and set the preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Event Form</h1>

      <form
        onSubmit={handlerformSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
      >
        <div className="mb-4 flex flex-col md:flex-row md:space-x-4">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="eventTitle"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Event Title:
            </label>
            <input
              type="text"
              id="eventTitle"
              name="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <label
              htmlFor="eventDate"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Event Date:
            </label>
            <input
              type="date"
              id="eventDate"
              name="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="bannerImage"
            className="block text-gray-600 text-sm font-semibold mb-2"
          >
            Upload Banner:
          </label>
          <input
            type="file"
            id="bannerImage"
            name="bannerImage"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 w-full text-white px-4 py-2 rounded-md"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
