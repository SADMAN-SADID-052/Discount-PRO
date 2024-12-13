import React from 'react';

const Success_story = () => {

    const testimonials = [
        {
          name: "John Doe",
          avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.94081497.1723952170&semt=ais_hybrid",
          feedback:
            "I saved over $300 on holiday shopping! This app is a must-have for anyone looking to save money.",
        },
        {
          name: "Jane Smith",
          avatar: "https://img.freepik.com/free-vector/smiling-young-man-glasses_1308-174373.jpg?ga=GA1.1.94081497.1723952170&semt=ais_hybrid",
          feedback:
            "Finding the best deals has never been easier. I use it daily for groceries and fashion!",
        },
        {
          name: "Emily Johnson",
          avatar: "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?ga=GA1.1.94081497.1723952170&semt=ais_hybrid",
          feedback:
            "This app is a lifesaver! I love how easy it is to find and redeem coupons.",
        },
      ];
    return (
        <div>

<section id="success-stories" className="bg-gradient-to-r from-blue-200 via-gray-50 to-pink-200 py-9 p-6 rounded-2xl mb-2">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Success Stories
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          See what our happy users have to say!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                 <div className='flex items-center gap-2'>
                 <p className="text-sm text-gray-500">Verified User</p>
                 <img className='w-5' src="https://cdn-icons-png.freepik.com/256/4336/4336711.png?ga=GA1.1.94081497.1723952170&semt=ais_hybrid" alt="" />
                 </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                <span><img className='w-16 mx-auto'
                src="https://cdn-icons-png.freepik.com/256/5494/5494245.png?ga=GA1.1.94081497.1723952170&semt=ais_hybrid" alt="" />
                </span>
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default Success_story;