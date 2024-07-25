import React from 'react'; 
import NavBar from './NavBar'; 
import Nations from './Nations';
import japanImage from './gomo guru.png';  
import usaImage from './bridge.png';
import canadaImage from './way.png';
// import MyComponent from './MyComponent';  
// import MyComponentOne from './MyComponentOne';

// function App() {  
//   return (  
//     <div className="flex items-center justify-end h-1/4">
//       <div style={{ backgroundColor: '#1A1B21' }} className="p-6 text-center text-white rounded-lg shadow-lg"> {/* Container for styling */}  
//         <MyComponent /> 
//         <MyComponentOne />
//       </div>  
//     </div>  
//   );  
// }  
 

// App.jsx
function App() {
  return (
    <div>
      <NavBar />
      <div className="space-y-8">
        <Nations
          countryName="Japan"
          place="Mount Fuji"
          dates="12 Jan, 2021 - 24 Jan, 2021"
          content="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
          image={japanImage}
        />
        <hr className="border-t border-gray-300 mx-auto m-11" />
        <Nations
          countryName="Australia"
          place="Sydney Opera House"
          dates="27 May, 2021 - 8 Jun, 2021"
          content="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
          image={usaImage}
        />
        <hr className="border-t border-gray-300 mx-auto" />
        <Nations
          countryName="Norway"
          place="Geirangerfjord"
          dates="01 Oct, 2021 - 18 Nov, 2021"
          content="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
          image={canadaImage}
        />
      </div>
    </div>
  );
}

export default App;