import React from "react";
import { useForm } from "react-hook-form";
import defaultImg from "../img/default.png";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  const inputStyle =
    "border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700";

  return (
    <div className="my-20 mx-4 flex items-center justify-center">
      <div className="flex justify-center items-center flex-col bg-white rounded-xl py-10 my-10 mx-5 gap-10 md:flex-row px-10">
        <div id="contactForm">
          <p className="flex justify-center text-3xl mb-6 text-center gap-3 text font-bold">
            <span className="text-amber-500">Your business.</span> Our passion.
          </p>
          <form
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <input
                className={inputStyle}
                type="text"
                placeholder="First name"
                {...register("FirstName", { required: true })}
              />
              <input
                className={inputStyle}
                type="text"
                placeholder="Your business"
                {...register("YourBusiness", {
                  required: true,
                  maxLength: 100,
                })}
              />
            </div>
            <div className="flex flex-col gap-4">
              <input
                className={inputStyle}
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: {
                    value: true,
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Please provide a valid email",
                  },
                })}
              />
              {errors.Email?.type === "pattern" && (
                <span className="text-red-600 -mt-3">
                  {errors.Email.message}
                </span>
              )}
              <input
                className={inputStyle}
                type="tel"
                placeholder="Phone"
                {...register("Phone", { required: true })}
              />
            </div>
            <select
              className={inputStyle}
              {...register("Service", { required: true })}
            >
              <option value="Nothing Fancy Websites">
                Nothing Fancy Websites
              </option>
              <option value="Social Media Coaching">
                Social Media Coaching
              </option>
              <option value="Pretty Cool Ads">Pretty Cool Ads</option>
              <option value="Conversational Content">
                Conversational Content
              </option>
            </select>
            <textarea
              rows="5"
              className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
              placeholder="Message"
              {...register("Message", { required: true })}
            />
            {console.log(Object.keys(errors).length)}
            {console.log(errors)}
            <input
              className="cursor-pointer mt-4 w-full bg-amber-400 hover:bg-amber-300 text-green-900 border shadow py-3 px-6 font-semibold text-md rounded"
              type="submit"
            />
            {Object.keys(errors).length > 0 && (
              <span className="text-red-600 text-center border-2 border-red-300 -mt-2">
                Please fill all the fields correctly
              </span>
            )}
          </form>
        </div>
        <div>
          <img
            src={defaultImg}
            alt=""
            className="max-w-md w-60 md:w-auto"
          ></img>
        </div>
      </div>
    </div>
  );
};
