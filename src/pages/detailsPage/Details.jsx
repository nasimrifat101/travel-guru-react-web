/* eslint-disable react/no-unescaped-entities */

import NavBarWhite from "../navbar/NavBarWhite";
import "slick-carousel/slick/slick.css";




const Details = () => {
    return (
        <div>
               <div>
      <div className="bg-image">
        <div className="overlay">
          <NavBarWhite></NavBarWhite>
          <div className="pl-32">
            <div className="grid grid-cols-3">
              <div className="col-span-1 space-y-3">
                <h1 className="text-8xl font-semibold font-display text-white mt-20">
                  Cox's bazar
                </h1>
                <h4 className="text-white text-sm">
                  Cox's Bazar is a city, fishing port, tourism centre and
                  district headquarters in southeastern Bangladesh. It is famous
                  mostly for its long natural sandy beach, and it ...
                </h4>
              </div>
              {/* carosel */}
              <div className="col-span-2">
              <div className="flex flex-col w-full border-opacity-50">
          <div className="grid h-fit card rounded-box place-items-center">
          <div className="">
          <div className="hero-content flex-col">
            <div className="card w-[500px] max-w-xl border border-black bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Origin</span>
                  </label>
                 <select name="City" id="" className="bg-gray-200 font-semibold p-3 rounded-lg">
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Syhlet</option>
                    <option value="Borishal">Borishal</option>
                    <option value="Manikgonj">Manikgonj</option>
                 </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Destination</span>
                  </label>
                  <select name="City" id="" className="bg-gray-200 font-semibold p-3 rounded-lg">
                    <option value="Cox's Bazar">Cox's Bazar</option>
                    <option value="Sylhet">Syhlet</option>
                    <option value="Borishal">Borishal</option>
                    <option value="Manikgonj">Manikgonj</option>
                    <option value="dhaka">Dhaka</option>
                 </select>
                  <div className="flex justify-between mt-5 text-sm">
                    <div className="flex flex-col space-x-2">
                      <label htmlFor="" className="ml-2">from</label>
                      <input type="date" name="" id="" className="bg-gray-200 p-2 font-semibold" />

                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="">To</label>
                      <input type="date" name="" id="" className="bg-gray-200 font-semibold p-2" />

                    </div>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-yellow-400">Start Booking</button>
                </div>
              </form>
            </div>
          </div>
        </div>
          </div>
         
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Details;