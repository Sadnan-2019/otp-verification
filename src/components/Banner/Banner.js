import React from 'react';

const Banner = () => {
     return (
          <div className="hero min-h-screen bg-slate-300  ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img alt=""
              src="https://img.freepik.com/free-vector/enter-otp-concept-illustration_114360-7867.jpg?w=2000"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="p-5">
              <h1 className="text-5xl font-bold">We Provide Best Manufecture for Clint Satisfection  </h1>
              <p className="py-6 font-bold">
                Milking Machine, Cream Separator, Chaff Cutter, Automated Cow Brush,
                Rubber Mat, Feeder Bottle, Veterinary Items and All kinds of
                Accessories.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
     );
};

export default Banner;