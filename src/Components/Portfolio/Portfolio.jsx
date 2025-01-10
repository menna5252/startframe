
import React, { useState } from 'react';

// Importing images 
import image1 from '../../images/imges1.png';
import image2 from '../../images/imges2.png';
import image3 from '../../images/imges3.png';
import image4 from '../../images/imges1.png';
import image5 from '../../images/imges2.png';
import image6 from '../../images/imges3.png';

// Array of items with imported images
const portfolioItems = [
  { id: 1, src: image1, alt: 'Portfolio Item 1' },
  { id: 2, src: image2, alt: 'Portfolio Item 2' },
  { id: 3, src: image3, alt: 'Portfolio Item 3' },
  { id: 4, src: image4, alt: 'Portfolio Item 4' },
  { id: 5, src: image5, alt: 'Portfolio Item 5' },
  { id: 6, src: image6, alt: 'Portfolio Item 6' },
];

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Function to open the modal with an image
  const openModal = (imageSrc) => {
    // console.log("Opening modal with image:", imageSrc); 
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    // console.log("Closing modal"); 
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="portfolio my-10">
      {/* Title Section */}
      <div className="pt-4 text-center">
        <h2 className="text-4xl font-extrabold mb-3 text-[#2c3e50] text-uppercase">Portfolio Component</h2>
        <div className="flex items-center justify-center mb-3">
          <div className="line bg-[#2c3e50] w-16 h-1 mx-3"></div>
          <i className="fa-solid fa-star text-2xl text-[#2c3e50]"></i>
          <div className="line bg-[#2c3e50] w-16 h-1 mx-3"></div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="relative rounded-3xl overflow-hidden group">
              {/* Image Display */}
              <img
                src={item.src} 
                alt={item.alt}
                className="w-full rounded-3xl"
              />
              {/* Hover layer */}
              <div className="absolute inset-0 flex justify-center items-center bg-teal-500 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 ease-in-out">
                <i
                  className="text-white fa-solid fa-plus fa-6x opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer"
                  onClick={() => openModal(item.src)} 
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-teal-300 bg-opacity-50 flex justify-center items-center z-10">
          <div className="relative">
            <img src={modalImage} alt="Modal Content" className="modl max-w-full max-h-full" />
            <button onClick={closeModal} className="absolute top-0 right-0 text-white text-3xl p-4 bg-transparent hover:bg-gray-700 rounded-full">
               &times;                {/* multiplication symbol (×) used as a close icon */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}












// import React, { useState } from 'react';
// export default function Portfolio() {
//   // State to manage the modal visibility and the selected image
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState("");

//   // Function to open the modal with the selected image
//   const openModal = (imageSrc) => {
//     setModalImage(imageSrc);
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalImage("");
//   };

//   return (
//     <div className="portfolio mb-4">
//       {/* Title Section */}
//       <div className="pt-4 text-center">
//         <h2 className="text-4xl font-extrabold mb-3 text-[#2c3e50] text-uppercase">Portfolio Component</h2>
//         <div className="flex items-center justify-center mb-3">
//           <div className="line bg-[#2c3e50] w-16 h-1 mx-3"></div>
//           <i className="fa-solid fa-star text-2xl text-[#2c3e50]"></i>
//           <div className="line bg-[#2c3e50] w-16 h-1 mx-3"></div>
//         </div>
//       </div>

//       {/* Portfolio Grid */}
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Portfolio Item 1 */}
//           <div className="relative rounded-3xl overflow-hidden">
//             <img
//               src="" // Fixed path (remove double slashes)
//               alt="Portfolio Item 1"
//               className="w-full rounded-3xl cursor-pointer"
//               onClick={() => openModal("")} // Use correct path
//             />
//             <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
//               <i className="text-white fa-solid fa-plus fa-6x cursor-pointer"></i>
//             </div>
//           </div>

//           {/* Portfolio Item 2 */}
//           <div className="relative rounded-3xl overflow-hidden">
//             <img
//               src="" // Fixed path
//               alt="Portfolio Item 2"
//               className="w-full rounded-3xl cursor-pointer"
//               onClick={() => openModal("")} // Use correct path
//             />
//             <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
//               <i className="text-white fa-solid fa-plus fa-6x cursor-pointer"></i>
//             </div>
//           </div>

//           {/* Portfolio Item 3 */}
//           <div className="relative rounded-3xl overflow-hidden">
//             <img
//               src="" // Fixed path
//               alt="Portfolio Item 3"
//               className="w-full rounded-3xl cursor-pointer"
//               onClick={() => openModal("")} // Use correct path
//             />
//             <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
//               <i className="text-white fa-solid fa-plus fa-6x cursor-pointer"></i>
//             </div>
//           </div>

//           {/* Portfolio Item 4 */}
//           <div className="relative rounded-3xl overflow-hidden">
//             <img
//               src="" // Fixed path
//               alt="Portfolio Item 4"
//               className="w-full rounded-3xl cursor-pointer"
//               onClick={() => openModal("")} // Use correct path
//             />
//             <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
//               <i className="text-white fa-solid fa-plus fa-6x cursor-pointer"></i>
//             </div>
//           </div>

//           {/* Portfolio Item 5 */}
//           <div className="relative rounded-3xl overflow-hidden">
//             <img
//               src="" // Fixed path
//               alt="Portfolio Item 5"
//               className="w-full rounded-3xl cursor-pointer"
//               onClick={() => openModal("")} // Use correct path
//             />
//             <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
//               <i className="text-white fa-solid fa-plus fa-6x cursor-pointer"></i>
//             </div>
//           </div>

//           {/* Portfolio Item 6 */}
//           <div className="relative rounded-3xl overflow-hidden">
//             <img
//               src="" // Fixed path
//               alt="Portfolio Item 6"
//               className="w-full rounded-3xl cursor-pointer"
//               onClick={() => openModal("")} // Use correct path
//             />
//             <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
//               <i className="text-white fa-solid fa-plus fa-6x cursor-pointer"></i>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
//           <div className="relative">
//             <img src={modalImage} alt="Modal Content" className="max-w-full max-h-full" />
//             <button
//               onClick={closeModal}
//               className="absolute top-0 right-0 text-white text-3xl p-4 bg-transparent hover:bg-gray-700 rounded-full"
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
