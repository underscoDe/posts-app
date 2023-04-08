import { InputProps } from "@/interfaces";
import * as React from "react";

function Input({ label, required=true, ...delegated }: InputProps) {
  return (
    <div>
      <label
        htmlFor={delegated.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required={required}
        {...delegated}
      />
    </div>
  );
}

export default Input;
