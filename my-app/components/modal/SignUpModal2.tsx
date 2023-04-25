import React, { useState, useEffect, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, Transition } from "@headlessui/react";
import { BsArrowRight } from "react-icons/bs";

const SignUpModal2 = () => {
  const initialValues: {
    firstName: string;
    email: string;
    phoneNumber: string;
  } = {
    firstName: "",
    email: "",
    phoneNumber: "",
  };
  const [formValues, setFormValues] = useState<any>(initialValues);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleChange = (e: any) => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {}, [formErrors]);
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.firstName) {
      errors.firstName = "Full Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    }

    return errors;
  };

  const notify = () =>
    toast("A team member will contact you shortly", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  Object.keys(formErrors).length === 0 && isSubmit ? notify() : null;

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="px-8 py-4 bg-white text-primaryPurple font-bold text-xl rounded-lg flex items-center space-x-1 hover:text-white hover:bg-primaryOrange duration-300 cursor-pointer"
      >
        <p>Get Started Today</p>
        <BsArrowRight size={25} />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-none bg-black/70"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-primaryPurple shadow-xl border-2 border-white rounded-2xl">
                <div className="mt-2">
                  <p className="font-bold text-3xl text-center my-8 text-white">
                    Let us contact you :)
                  </p>
                  <form
                    action=""
                    className="grid gap-3"
                    onSubmit={handleSubmit}
                  >
                    <div className="space-y-1 col-span-2">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-md py-3 px-5 outline-none"
                        name="firstName"
                        onChange={handleChange}
                      />
                      <p className="grid col-span-2 text-sm text-primaryOrange">
                        {formErrors.firstName}
                      </p>
                    </div>
                    <div className="space-y-1 col-span-2">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full rounded-md py-3 px-5 outline-none"
                        name="phoneNumber"
                        value={formValues.phoneNumber}
                        onChange={handleChange}
                      />
                      <p className="grid col-span-2 text-sm text-primaryOrange">
                        {formErrors.phoneNumber}
                      </p>
                    </div>
                    <div className="space-y-1 col-span-2">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-md py-3 px-5 outline-none"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                      />
                      <p className="grid col-span-2 text-sm text-primaryOrange">
                        {formErrors.email}
                      </p>
                    </div>
                    <input
                      className="bg-primaryOrange hover:opacity-90 text-white col-span-2 py-5 rounded-xl text-lg font-medium hover:bg-primary transition duration-600 my-3 cursor-pointer"
                      value="Submit"
                      type="submit"
                      onClick={closeModal}
                    />
                    <ToastContainer
                      position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="dark"
                    />
                  </form>
                  <p className="text-sm text-center text-white">
                    By clicking submit, you agree to let our staff contact you.
                  </p>
                </div>

                <div className="mt-4"></div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignUpModal2;
