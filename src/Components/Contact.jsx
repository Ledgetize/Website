import React from "react";

const Contact = () => {
  return (
    <div id="contact" class="w-full flex items-center justify-center my-10">
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
      <div class="bg-transparent border-gradient shadow rounded py-16 lg:px-28 px-8">
        <p class="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700 dark:text-white">
          Contacta con nosotros!
        </p>
        <div class="md:flex items-center mt-12">
          <div class="md:w-full flex flex-col">
            <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
              Nombre
            </label>
            <input
              tabindex="0"
              arial-label="Please input name"
              type="name"
              class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Please input  name"
            />
          </div>
        </div>
        <div class="md:flex items-center mt-8">
          <div class="md:w-full flex flex-col">
            <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
              Correo electrónico
            </label>
            <input
              tabindex="0"
              role="input"
              arial-label="Please input company name"
              type="name"
              class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div>
          <div class="w-full flex flex-col mt-8">
            <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
              Mensaje
            </label>
            <textarea
              tabindex="0"
              aria-label="leave a message"
              role="textbox"
              type="name"
              class="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
            ></textarea>
          </div>
        </div>
        <p class="text-xs leading-3 text-gray-600 dark:text-gray-200 mt-4">
          Al hacer clic en enviar, acepta nuestros términos de servicio,
          política de privacidad y el uso de datos personales.
        </p>
        <div class="flex items-center justify-center w-full">
          <button class="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
