import { useLoaderData } from 'react-router-dom';
import VolentaryCart from '../../comoponents/VolentaryCart/VolentaryCart';

const Home = () => {
  const volentaries = useLoaderData();

  return (
    <div className="my-12">
      <div className="text-center ">
        <h2 className="text-2xl lg:text-4xl font-bold">
          I grow by helping people in need.{' '}
        </h2>
        <div className="join my-5">
          <input
            className="input input-bordered join-item"
            placeholder="Search volentary"
          />
          <button className="btn btn-primary  join-item rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {volentaries &&
          volentaries.map(volentary => (
            <VolentaryCart
              key={volentary._id}
              volentary={volentary}
            ></VolentaryCart>
          ))}
      </div>
    </div>
  );
};

export default Home;
