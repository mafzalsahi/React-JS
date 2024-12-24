import React from "react";

function About(){
    return(
        <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12">
                    <img
                        src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="image"
                    />
                </div>
                <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                    React development is driven by dedicated and enthusiastic developers.
                    </h2>
                    <p className="mt-6 text-gray-600">
                    React development is a dynamic process fueled by the creativity and expertise of passionate developers.
                    These professionals leverage their deep understanding of React's component-based architecture to create responsive, scalable, and efficient web applications.
                    Their enthusiasm for cutting-edge technology enables them to build solutions that cater to diverse user needs and deliver seamless user experiences.
                    </p>
                    <p className="mt-4 text-gray-600">
                    The dedication of React developers extends beyond writing code; 
                    they continuously explore innovations, contribute to the open-source community, 
                    and stay updated with the latest advancements in the JavaScript ecosystem. 
                    Their passion not only drives the growth of React as a technology 
                    but also ensures the development of high-quality applications that meet industry standards.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About