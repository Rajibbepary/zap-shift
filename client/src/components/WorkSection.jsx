
import assets from "../assets/assets";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon:assets.icon0
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon:assets.icon1
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon:assets.icon2
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon:assets.icon3
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon:assets.icon4
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon:assets.icon5
  }
];
const WorkSection = () => {
    return (
         <section className="py-16 px-6 md:px-20 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white ">
        How it Work
      </h2>
      <div className="grid gap-8 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white hover:scale-105 transition-all duration-500  dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg  p-6 flex flex-col items-start"
          >
            <div className="mt-4">
                <img src={service.icon} className="w-20 h-20 object-cover" alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-2">
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