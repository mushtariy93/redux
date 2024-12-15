import React from "react";
// import Header from "../../components/header/Header";

const LandingPage = () => {
  return (
    <div className="">
      <div className="bg-yellow-50 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Smart Digital Agency <br /> For Your Business To Succeed
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Explore our services and get the best digital solutions for your
                business.
              </p>
              <div className="mt-6 flex flex-col md:flex-row gap-4">
                <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800">
                  Get early access
                </button>
                <button className="border border-black py-3 px-6 rounded-lg hover:bg-gray-100">
                  Explore our Services
                </button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Client"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Client"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div className="w-12 h-12 bg-gray-300 text-gray-800 rounded-full flex items-center justify-center text-sm border-2 border-white">
                    +2
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold">Total Clients</p>
                  <p className="text-2xl font-bold">5000+</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
              <div className="relative">
                <img
                  src="https://media.istockphoto.com/id/1398610798/photo/young-woman-in-linen-shirt-shorts-and-high-heels-pointing-to-the-side-and-talking.jpg?s=2048x2048&w=is&k=20&c=AzklDwWJdrPRVfqtk6U2znRX3-QP2XoZY1vXhWX_OuI="
                  alt="Excited Woman"
                  className="rounded-lg"
                />
                <div className="absolute bottom-4 right-4">
                  <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-800">
                    <span>Explore Services</span>
                    <span className="text-xl"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
