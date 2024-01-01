import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AtuhContext } from '../../Authprovaider/Authprovaider';
import toast from 'react-hot-toast';

const JoinApplay = () => {
  const { user } = useContext(AtuhContext);
  const volentar = useLoaderData();
  const { image } = volentar;
  const handlerFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const volentaryInfo = {
      name,
      date,
      email: user?.email,
      image,
      status: false,
    };

    fetch('http://localhost:5000/apply-events', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(volentaryInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Event join success');
        }
      });
  };

  return (
    <div className="my-12">
      <div className="hero mx-auto lg:w-1/2 ">
        <div className="hero-content w-full flex-col ">
          <div className="card w-full  shadow-2xl bg-base-100">
            <form onSubmit={handlerFormSubmit} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Volantary Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={volentar.title}
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Join Events</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinApplay;
