import { useLoaderData } from 'react-router-dom';
import VolentaryCart from '../../comoponents/VolentaryCart/VolentaryCart';
import { useEffect, useState } from 'react';

const Home = () => {
  const { total } = useLoaderData();
  const [volentaries, setVolentaries] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const perpageData = 9;
  const totalPage = Math.ceil(total / perpageData);
  const pageNumber = [...Array(totalPage).keys()];

  const handlerInputChange = page => {
    setCurrentPage(page);
  };
  useEffect(() => {
    setLoader(true);
    fetch(
      `http://localhost:5000/volentars?page=${currentPage}&&limit=${perpageData}`
    )
      .then(res => res.json())
      .then(data => {
        setVolentaries(data);
        setLoader(false);
      });
  }, [currentPage]);

  return (
    <>
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
        {loader && (
          <div className="text-center mt-12">
            <progress className="progress w-56"></progress>
          </div>
        )}
        {loader || (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {volentaries &&
              volentaries.map(volentary => (
                <VolentaryCart
                  key={volentary._id}
                  volentary={volentary}
                ></VolentaryCart>
              ))}
          </div>
        )}
      </div>
      <div className="py-5 flex justify-center ">
        <div className="join">
          {pageNumber.map(page => (
            <input
              key={page}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              onChange={() => handlerInputChange(page)}
              aria-label={page + 1}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
