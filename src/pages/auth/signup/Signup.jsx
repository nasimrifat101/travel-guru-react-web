import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Signup = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = (e) =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,email,password);


        createUser(email,password)
        .then(res=>console.log(res.user))
        .catch(error=>console.log(error))
    }

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-fit card rounded-box place-items-center">
              <div className="">
                <div className="hero-content flex-col">
                  <div className="card w-[500px] max-w-xl border border-black bg-base-100">
                    <h1 className="text-2xl px-8 pt-10 font-bold">Create An Account</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          name="password"
                          className="input input-bordered"
                          required
                        />
                        <div className="flex justify-between mt-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" name="checkbox" id="" />
                            <label htmlFor="">Remember me</label>
                          </div>
                          <div className="text-yellow-400 font-bold">
                            <Link> Forgot Password?</Link>
                          </div>
                        </div>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn bg-yellow-400">Login</button>
                      </div>
                      <p className="text-center text-sm">
                        Already Have An Account?
                        <span className="text-yellow-400 underline ml-2 font-medium">
                          <Link to="/login">Login</Link>
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider">OR</div>
            <div className="grid h-fit card rounded-box place-items-center">
              <div className="space-y-3 flex flex-col mb-10">
                <button className="btn btn-outline rounded-full w-96 ">
                  <BsFacebook className="text-xl"></BsFacebook>Continue With
                  Facebook
                </button>
                <button className="btn btn-outline rounded-full w-96">
                  <BsGoogle className="text-xl"></BsGoogle>Continue With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
