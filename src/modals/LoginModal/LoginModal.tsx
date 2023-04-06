import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import * as React from "react";

function LoginModal() {
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={handleModalClose}>
      <div className="relative rounded-lg shadow bg-gray-700">
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Sign in
          </h3>
          <form className="space-y-6" action="#">
            <Input
              label="Your email"
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
            />
            <Input
              label="Your password"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
            />
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
