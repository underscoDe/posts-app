import Input from "@/components/Input";
import Modal from "@/components/Modal";
import useLoginModalState from "@/hooks/useLoginModalState";
import useRegisterModalState from "@/hooks/useRegisterModalState";
import axios from "axios";
import { signIn } from "next-auth/react";
import * as React from "react";
import { toast } from "react-hot-toast";

function RegisterModal() {
  const registerModalState = useRegisterModalState();
  const loginModalState = useLoginModalState();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordsMatch, setPasswordsMatch] = React.useState(true);
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onLogin = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        setPasswordsMatch(false);
        return;
      }

      try {
        setIsLoading(true);
        // login stuff here
        await axios.post("/api/register", {
          email,
          password,
          username,
          name,
        });

        toast.success("Account successfully created.");
        signIn("credentials", {
          email,
          password,
        });

        registerModalState.close();
      } catch (err) {
        console.log("REGISTER:", err);
        toast.error("Something went wrong");
      }
    },
    [registerModalState, email, password, confirmPassword, username, name]
  );

  const switchToLogin = React.useCallback(() => {
    if (isLoading) return;

    registerModalState.close();
    loginModalState.open();
  }, [isLoading, registerModalState, loginModalState]);

  return (
    <Modal
      isOpen={registerModalState.isOpen}
      onClose={registerModalState.close}
    >
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
            {passwordsMatch ? null : (
              <div className="text-yellow-300 inline-block -my-2">
                Passwords do not match
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Registered yet?{" "}
              <span
                onClick={switchToLogin}
                className="text-blue-700 cursor-pointer hover:underline dark:text-blue-500"
              >
                Login
              </span>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default RegisterModal;
