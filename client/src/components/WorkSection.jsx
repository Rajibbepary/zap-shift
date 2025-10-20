

import { BsCashCoin, } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import { BiSolidFactory } from "react-icons/bi";
import { BsBuildingsFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon:<TbTruckDelivery/>
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon:<GiWorld/>
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon:<BiSolidFactory/>
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon:<BsCashCoin/>
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon:<BsBuildingsFill/>
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon:<GiReturnArrow/>
  }
];
const WorkSection = () => {
    return (
         <section className="py-16 px-6 md:px-20 ">
      <h2 className="text-3xl font-bold text-center text-gray-600 dark:text-white/75 ">
        How it Work
      </h2>
      <div className="grid gap-8 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/75 hover:scale-105 transition-all duration-500  dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg  p-6 flex flex-col items-start"
          >
            <div className="mt-4">
                <div className="text-[#0dbed1] dark:text-white/75 text-4xl">{service.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white/75 mt-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default WorkSection;