import React, { useState } from 'react';

const Services = () => {
  const accordionItems = [
    {
      title: 'EDUCATIONAL INSTITUTIONS',
      content: 'state.institutions',
    },
    {
      title: 'PUBLIC OFFICES',
      content: 'state.offices',
    },
    {
      title: 'HEALTHCARE FACILITIES',
      content: 'state.facilities',
    },
    {
      title: 'PLACES OF WORSHIP',
      content: 'state.worship',
    },
    {
      title: 'TRANSPORTATION',
      content: 'state.transportation',
    },
    {
      title: 'SHOPPING & ENTERTAINMENT',
      content: 'state.shopping',
    },
    {
      title: 'OTHER LANDMARKS',
      content: 'state.landmarks',
    },
    // Add more items as needed
  ];

  const [readmore, setReadMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = index => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active index
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[80%] h-[50%]">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  items-center justify-center select-none cursor-pointer"
          >
            <div
              className="font-bold my-2"
              onClick={() => handleAccordionClick(index)}
            >
              {item.title}
            </div>
            <div
              className={`overflow-hidden  ease-in-out duration-700 ${
                activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
              }`}
            >
              <p className="p-4">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* show contents when onClick */}
      <div className="w-[80%] flex flex-col gap-3">
        <p className="cursor-pointer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          quidem unde provident qui nobis fugiat voluptatem distinctio sit ea et
          blanditiis ipsum nam dolor, voluptatum dignissimos ducimus? Corrupti,
          esse natus.
        </p>

        <p
          className={`overflow-hidden ease-in-out duration-700  ${
            readmore == false ? 'max-h-0' : 'max-h-[500px]'
          }`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quia
          expedita odio, placeat reprehenderit adipisci doloribus est officiis
          beatae dolorem ab sunt deleniti sit ad nisi tempora, repellat saepe.
          Enim.
        </p>

        <p
          onClick={() => setReadMore(prev => !prev)}
          className="cursor-pointer font-bold underline"
        >
          Read More
        </p>
      </div>
    </div>
  );
};

export default Services;
