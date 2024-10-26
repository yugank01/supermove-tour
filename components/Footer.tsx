// components/Footer.tsx
import Car from "@/components/Car";

const Footer = () => {
  return (
    <div className="relative min-h-[60vh] bg-gray-800 text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl mb-4">Thank you for visiting!</h2>
        {/* <p className="text-lg">Scroll down to see the car move!</p> */}
      </div>

      {/* The car is positioned at the bottom of the footer */}
      <Car />
    </div>
  );
};

export default Footer;
