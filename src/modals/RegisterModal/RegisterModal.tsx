import Input from "@/components/Input";
import Modal from "@/components/Modal";
import useRegisterModalState from "@/hooks/useRegisterModalState";
import * as React from "react";

function RegisterModal() {
  const registerModalState = useRegisterModalState();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onLogin = React.useCallback(async () => {
    try {
      setIsLoading(true);
      // login stuff here

      registerModalState.close();
    } catch (err) {
      console.log("REGISTER:", err);
    }
  }, [registerModalState]);

  return (
    <Modal isOpen={registerModalState.isOpen} onClose={registerModalState.close}>
      <div className="relative rounded-lg shadow bg-gray-700">
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Register
          </h3>
          <form onSubmit={onLogin} className="space-y-6" action="#">
            <Input
              label="Your email"
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Your name"
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Your username"
              type="text"
              name="username"
              id="username"
              placeholder="jdoe23"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="Your password"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Confirm your password"
              type="password"
              name="password_confirm"
              id="password_confirm"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Registered yet?{" "}
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default RegisterModal;
