/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import NavBarWhite from "../navbar/NavBarWhite";
import "slick-carousel/slick/slick.css";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()


  const handleBooking = () => {
    if (user) {
      navigate('/booking');
    } else {
      navigate('/login');
    }
  };
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
                    district headquarters in southeastern Bangladesh. It is
                    famous mostly for its long natural sandy beach, and it ...
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
                                <select
                                  name="City"
                                  id=""
                                  className="bg-gray-200 font-semibold p-3 rounded-lg"
                                >
                                  <option value="Dhaka">Dhaka</option>
                                  <option value="Chattogram">Chattogram</option>
                                  <option value="Rajshahi">Rajshahi</option>
                                  <option value="Khulna">Khulna</option>
                                  <option value="Barishal">Barishal</option>
                                  <option value="Sylhet">Sylhet</option>
                                  <option value="Rangpur">Rangpur</option>
                                  <option value="Mymensingh">Mymensingh</option>
                                  <option value="Cox's Bazar">
                                    Cox's Bazar
                                  </option>
                                  <option value="Jessore">Jessore</option>
                                  <option value="Comilla">Comilla</option>
                                  <option value="Bagerhat">Bagerhat</option>
                                  <option value="Bandarban">Bandarban</option>
                                  <option value="Barguna">Barguna</option>
                                  <option value="Bhola">Bhola</option>
                                  <option value="Bogra">Bogra</option>
                                  <option value="Brahmanbaria">
                                    Brahmanbaria
                                  </option>
                                  <option value="Chandpur">Chandpur</option>
                                  <option value="Chapainawabganj">
                                    Chapainawabganj
                                  </option>
                                  <option value="Chuadanga">Chuadanga</option>
                                  <option value="Cox's Bazar">
                                    Cox's Bazar
                                  </option>
                                  <option value="Dinajpur">Dinajpur</option>
                                  <option value="Faridpur">Faridpur</option>
                                  <option value="Feni">Feni</option>
                                  <option value="Gaibandha">Gaibandha</option>
                                  <option value="Gazipur">Gazipur</option>
                                  <option value="Gopalganj">Gopalganj</option>
                                  <option value="Habiganj">Habiganj</option>
                                  <option value="Jamalpur">Jamalpur</option>
                                  <option value="Jashore">Jashore</option>
                                  <option value="Jhalokati">Jhalokati</option>
                                  <option value="Jhenaidah">Jhenaidah</option>
                                  <option value="Joypurhat">Joypurhat</option>
                                  <option value="Khagrachari">
                                    Khagrachari
                                  </option>
                                  <option value="Kishoreganj">
                                    Kishoreganj
                                  </option>
                                  <option value="Kurigram">Kurigram</option>
                                  <option value="Kushtia">Kushtia</option>
                                  <option value="Lakshmipur">Lakshmipur</option>
                                  <option value="Lalmonirhat">
                                    Lalmonirhat
                                  </option>
                                  <option value="Madaripur">Madaripur</option>
                                  <option value="Magura">Magura</option>
                                  <option value="Manikganj">Manikganj</option>
                                  <option value="Meherpur">Meherpur</option>
                                  <option value="Moulvibazar">
                                    Moulvibazar
                                  </option>
                                  <option value="Munshiganj">Munshiganj</option>
                                  <option value="Mymensingh">Mymensingh</option>
                                  <option value="Naogaon">Naogaon</option>
                                  <option value="Narail">Narail</option>
                                  <option value="Narayanganj">
                                    Narayanganj
                                  </option>
                                  <option value="Narsingdi">Narsingdi</option>
                                  <option value="Natore">Natore</option>
                                  <option value="Nawabganj">Nawabganj</option>
                                  <option value="Netrakona">Netrakona</option>
                                  <option value="Nilphamari">Nilphamari</option>
                                  <option value="Noakhali">Noakhali</option>
                                  <option value="Pabna">Pabna</option>
                                  <option value="Panchagarh">Panchagarh</option>
                                  <option value="Patuakhali">Patuakhali</option>
                                  <option value="Pirojpur">Pirojpur</option>
                                  <option value="Rajbari">Rajbari</option>
                                  <option value="Rajshahi">Rajshahi</option>
                                  <option value="Rangamati">Rangamati</option>
                                  <option value="Satkhira">Satkhira</option>
                                  <option value="Shariatpur">Shariatpur</option>
                                  <option value="Sherpur">Sherpur</option>
                                  <option value="Sirajganj">Sirajganj</option>
                                  <option value="Sunamganj">Sunamganj</option>
                                  <option value="Sylhet">Sylhet</option>
                                  <option value="Tangail">Tangail</option>
                                  <option value="Thakurgaon">Thakurgaon</option>
                                </select>
                              </div>
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">
                                    Destination
                                  </span>
                                </label>
                                <select
                                  name="City"
                                  id=""
                                  className="bg-gray-200 font-semibold p-3 rounded-lg"
                                >
                                  <option value="Cox's Bazar">
                                    Cox's Bazar
                                  </option>
                                  <option value="Dhaka">Dhaka</option>
                                  <option value="Chattogram">Chattogram</option>
                                  <option value="Rajshahi">Rajshahi</option>
                                  <option value="Khulna">Khulna</option>
                                  <option value="Barishal">Barishal</option>
                                  <option value="Sylhet">Sylhet</option>
                                  <option value="Rangpur">Rangpur</option>
                                  <option value="Mymensingh">Mymensingh</option>
                                  <option value="Jessore">Jessore</option>
                                  <option value="Comilla">Comilla</option>
                                  <option value="Bagerhat">Bagerhat</option>
                                  <option value="Bandarban">Bandarban</option>
                                  <option value="Barguna">Barguna</option>
                                  <option value="Bhola">Bhola</option>
                                  <option value="Bogra">Bogra</option>
                                  <option value="Brahmanbaria">
                                    Brahmanbaria
                                  </option>
                                  <option value="Chandpur">Chandpur</option>
                                  <option value="Chapainawabganj">
                                    Chapainawabganj
                                  </option>
                                  <option value="Chuadanga">Chuadanga</option>
                                  <option value="Cox's Bazar">
                                    Cox's Bazar
                                  </option>
                                  <option value="Dinajpur">Dinajpur</option>
                                  <option value="Faridpur">Faridpur</option>
                                  <option value="Feni">Feni</option>
                                  <option value="Gaibandha">Gaibandha</option>
                                  <option value="Gazipur">Gazipur</option>
                                  <option value="Gopalganj">Gopalganj</option>
                                  <option value="Habiganj">Habiganj</option>
                                  <option value="Jamalpur">Jamalpur</option>
                                  <option value="Jashore">Jashore</option>
                                  <option value="Jhalokati">Jhalokati</option>
                                  <option value="Jhenaidah">Jhenaidah</option>
                                  <option value="Joypurhat">Joypurhat</option>
                                  <option value="Khagrachari">
                                    Khagrachari
                                  </option>
                                  <option value="Kishoreganj">
                                    Kishoreganj
                                  </option>
                                  <option value="Kurigram">Kurigram</option>
                                  <option value="Kushtia">Kushtia</option>
                                  <option value="Lakshmipur">Lakshmipur</option>
                                  <option value="Lalmonirhat">
                                    Lalmonirhat
                                  </option>
                                  <option value="Madaripur">Madaripur</option>
                                  <option value="Magura">Magura</option>
                                  <option value="Manikganj">Manikganj</option>
                                  <option value="Meherpur">Meherpur</option>
                                  <option value="Moulvibazar">
                                    Moulvibazar
                                  </option>
                                  <option value="Munshiganj">Munshiganj</option>
                                  <option value="Mymensingh">Mymensingh</option>
                                  <option value="Naogaon">Naogaon</option>
                                  <option value="Narail">Narail</option>
                                  <option value="Narayanganj">
                                    Narayanganj
                                  </option>
                                  <option value="Narsingdi">Narsingdi</option>
                                  <option value="Natore">Natore</option>
                                  <option value="Nawabganj">Nawabganj</option>
                                  <option value="Netrakona">Netrakona</option>
                                  <option value="Nilphamari">Nilphamari</option>
                                  <option value="Noakhali">Noakhali</option>
                                  <option value="Pabna">Pabna</option>
                                  <option value="Panchagarh">Panchagarh</option>
                                  <option value="Patuakhali">Patuakhali</option>
                                  <option value="Pirojpur">Pirojpur</option>
                                  <option value="Rajbari">Rajbari</option>
                                  <option value="Rajshahi">Rajshahi</option>
                                  <option value="Rangamati">Rangamati</option>
                                  <option value="Satkhira">Satkhira</option>
                                  <option value="Shariatpur">Shariatpur</option>
                                  <option value="Sherpur">Sherpur</option>
                                  <option value="Sirajganj">Sirajganj</option>
                                  <option value="Sunamganj">Sunamganj</option>
                                  <option value="Sylhet">Sylhet</option>
                                  <option value="Tangail">Tangail</option>
                                  <option value="Thakurgaon">Thakurgaon</option>
                                </select>

                                <div className="flex justify-between mt-5 text-sm">
                                  <div className="flex flex-col space-x-2">
                                    <label htmlFor="" className="ml-2">
                                      from
                                    </label>
                                    <input
                                      type="date"
                                      name=""
                                      id=""
                                      className="bg-gray-200 p-2 font-semibold"
                                    />
                                  </div>
                                  <div className="flex flex-col">
                                    <label htmlFor="">To</label>
                                    <input
                                      type="date"
                                      name=""
                                      id=""
                                      className="bg-gray-200 font-semibold p-2"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-control mt-6">
                                <button
                                  onClick={handleBooking}
                                  className="btn bg-yellow-400"
                                >
                                  Start Booking
                                </button>
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
