import React from 'react';
 


const Contact = () => {
     return (
          <div>
               <div
        class="hero mt-10 mb-10   "
        style={{ 
          backgroundImage: `url("https://media.istockphoto.com/photos/-picture-id1311934969?b=1&k=20&m=1311934969&s=170667a&w=0&h=UQ3F8CE5zam5mT5swIliZ9nO7dhX4ZzsALMufFdv6Ys=")` 
        }}
      >
        <div class="hero-content flex-col  ">
          <h1 class="text-center font-bold text-3xl text-primary">
            Contact Us
          </h1>
          <h1 class="text-center text-primary"> Stay Connected With us </h1>
          {/* <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div> */}
          <div class="card flex-shrink-0     shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Meassage</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered input-lg w-full max-w-xs"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
     );
};

export default Contact;