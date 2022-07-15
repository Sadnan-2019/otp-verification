import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import auth from "../../firebase.int";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useForm } from "react-hook-form";
import { async } from "@firebase/util";

const Contact = () => {
  const [number, setNumber] = useState ("")
  // const [signInWithEmailAndPassword, user, loading, error] =
  //   useSignInWithEmailAndPassword(auth);

    function setUprecaptcha(number){
      const recaptchVerifier = new RecaptchaVerifier( 'recaptcha-container', {}, auth);
      recaptchVerifier.render();
      return signInWithPhoneNumber(auth,number,recaptchVerifier);
    }

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const onSubmit =   (data,e) => {
      e.target.reset();
    // console.log(e.target);
    const response =  setUprecaptcha(number)
    console.log(response)
      // console.log(data);
  
 
      // navigate("/appoinment")
      
    };

  return (
    <div>
      <div
        class="hero mt-10 mb-10   "
        style={{
          backgroundImage: `url("https://media.istockphoto.com/photos/-picture-id1311934969?b=1&k=20&m=1311934969&s=170667a&w=0&h=UQ3F8CE5zam5mT5swIliZ9nO7dhX4ZzsALMufFdv6Ys=")`,
        }}
      >
        <div class="hero-content flex-col  ">
          <h1 class="text-center font-bold text-3xl text-white	 ">Contact Us</h1>
          <h1 class="text-center text-white"> Stay Connected With us </h1>
          {/* <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div> */}
          <div className="">
            <div class="card flex-shrink-0 grid-cols-12    shadow-2xl bg-base-100">
              <div class="card-body ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                  {...register("name")}
                    type="text"
                    placeholder="name"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                  {...register("email")}
                    type="email"
                    placeholder="email"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control ">
                  <label class="label">
                    <span class="label-text">Email verification code</span>
                  </label>
                  <div className="flex justify-center items-center">
                    <div>
                      <input
                      {...register("ecode")}
                        type="text"
                        placeholder="email verification code"
                        class="input input-bordered"
                      />
                    </div>
                    <div class="form-control  px-2">
                      <button class="btn btn-primary">Send Otp</button>
                    </div>
                  </div>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Phone</span>
                  </label>
                  <PhoneInput
                  {...register("phone")}
                    placeholder="Enter phone number"
                    value={number}
                    onChange={setNumber}
                    defaultCountry="BD"
                    class="input input-bordered"
                    type="text"
                  />
                  <div id="recaptcha-container"></div>
                </div>
                <div class="form-control ">
                  <label class="label">
                    <span class="label-text">Mobile verification code</span>
                  </label>
                  <div className="flex justify-center items-center">
                    <div>
                      <input
                      {...register("pcode")}
                        type="text"
                        placeholder="mobile verification code"
                        class="input input-bordered"
                      />
                    </div>
                    <div class="form-control  px-2">
                      <button class="btn btn-primary" type="submit">Send Otp</button>
                    </div>
                  </div>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Subject</span>
                  </label>
                  <input
                  {...register("subject")}
                    type="text"
                    placeholder="Subject"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Your Meassage</span>
                  </label>
                  <textarea
                  {...register("message")}
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered input-lg w-full max-w-xs"
                  ></textarea>
                </div>
                <div class="form-control mt-6">
                  <input class="btn btn-primary" type="submit" value="Submit"/> 
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
