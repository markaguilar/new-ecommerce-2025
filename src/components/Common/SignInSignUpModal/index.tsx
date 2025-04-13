import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useAppSelector } from "@/redux/store";
import {
  selectSignInFormVisible,
  selectSignInSignUpModal,
  setSignInformVisible,
  signInSignUpModalVisible,
} from "@/redux/features/global/global-slice";
import { useDispatch } from "react-redux";

import SignInForm from "@/components/Common/SignInSignUpModal/signInForm";
import SignUpForm from "@/components/Common/SignInSignUpModal/signUpForm";

const SignInSignUpModal = () => {
  const dispatch = useDispatch();
  const isModalVisible = useAppSelector(selectSignInSignUpModal);
  const isSignInFormVisible = useAppSelector(selectSignInFormVisible);

  const handleSignInModal = () => dispatch(signInSignUpModalVisible());

  return (
    <Dialog
      open={isModalVisible}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={handleSignInModal}
    >
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-dark/50 " />
      {/* Modal Panel Container */}
      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-xl rounded-xl bg-white p-6 text-dark duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-center font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-4"
            >
              {isSignInFormVisible
                ? `Sign In to Your Account`
                : `Create an Account`}
            </DialogTitle>
            {/* Sign-in Form */}
            {isSignInFormVisible ? <SignInForm /> : <SignUpForm />}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default SignInSignUpModal;
