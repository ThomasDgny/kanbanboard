function LnadingPage() {
    return (
        <div>
            {/* Top Navbar */}
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-auto" src={''} alt="Logo" />
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="text-center sm:text-left lg:max-w-lg lg:mx-0 lg:text-left col-span-6">
                        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block">Title Here</span>
                            <span className="block text-indigo-600">Subtitle Here</span>
                        </h2>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Ghost Button 1</a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">Ghost Button
                                    2</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-0 lg:col-span-6">
                        <img className="mx-auto lg:mx-0" src="https://via.placeholder.com/600x400" alt="Hero Image" />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="text-center sm:text-left lg:max-w-lg lg:mx-0 lg:text-left col-span-6">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Call to Action Title Here
                        </h2>
                        <p className="mt-3 text-lg text-gray-500">
                            Call to Action Description Here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="mt-8">
                            <div className="flex items-center justify-center">
                                <div className="mr-8">
                                    <p className="text-3xl font-bold text-indigo-600">2.5m+</p>
                                    <p className="text-sm text-gray-500">Verified Users</p>
                                </div>
                                <div className="border-l border-gray-300 h-10 my-auto"></div>
                                <div className="mx-8">
                                    <p className="text-3xl font-bold text-indigo-600">4.7</p>
                                    <p className="text-sm text-gray-500">Average Rating</p>
                                </div>
                                <div className="border-l border-gray-300 h-10 my-auto"></div>
                                <div className="mx-8">
                                    <p className="text-3xl font-bold text-indigo-600">150+</p>
                                    <p className="text-sm text-gray-500">Countries</p>
                                </div>
                                <div className="border-l border-gray-300 h-10 my-auto"></div>
                                <div className="mx-8">
                                    <p className="text-3xl font-bold text-indigo-600">10+</p>
                                    <p className="text-sm text-gray-500">Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-0 lg:col-span-6">
                        <img className="mx-auto lg:mx-0" src="https://via.placeholder.com/600x400" alt="CTA Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LnadingPage;