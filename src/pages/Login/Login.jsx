import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AtuhContext } from '../../Authprovaider/Authprovaider';
const Login = () => {
  const { signInWithGoogle } = useContext(AtuhContext);

  const handlerGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
      })
      .catch(er => console.log(er.message));
  };

  return (
    <div className="mt-12">
      <div className="lg:w-1/2 flex items-center justify-center mx-auto h-96 bg-slate-100 ">
        <button
          onClick={handlerGoogleLogin}
          className="btn btn-outline btn-primary"
        >
          <FaGoogle></FaGoogle> Login in With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
