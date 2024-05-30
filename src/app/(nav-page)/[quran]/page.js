// // // "use client";
// // // import React, { useEffect, useState } from 'react';
// // // import { fetchEditions } from "@/app/pages/api/editions";
// // // import { fetchLanguages } from "@/app/pages/api/languages";
// // // import { fetchFormats } from "@/app/pages/api/formats";
// // // import { fetchEditionsByType } from "@/app/pages/api/editionsByType"; // Import fetchEditionsByType
// // // import Link from 'next/link';

// // // const Quran = () => {
// // //   // State variables
// // //   const [editions, setEditions] = useState([]);
// // //   const [languages, setLanguages] = useState([]);
// // //   const [selectedLanguage, setSelectedLanguage] = useState('');
// // //   const [selectedFormat, setSelectedFormat] = useState('');
// // //   const [selectedType, setSelectedType] = useState('');
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [formats, setFormats] = useState([]);
// // //   const [types, setTypes] = useState([]);

// // //   // Fetch data when the component mounts
// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const editionsData = await fetchEditions();
// // //         const languagesData = await fetchLanguages();
// // //         const formatsData = await fetchFormats();
// // //         const typesData = ["tafsir", "translation", "quran", "transliteration", "versebyverse"]; // Hardcoded types

// // //         setEditions(editionsData.data);
// // //         setLanguages(languagesData.data);
// // //         setFormats(formatsData.data);
// // //         setTypes(typesData);
// // //         setIsLoading(false);
// // //       } catch (error) {
// // //         console.error('Failed to fetch data:', error);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);
// // //   console.log(fetchEditionsByType)
// // //   // Filter editions based on selected language, format, and type
// // //   const filteredEditions = editions.filter(edition => {
// // //     if (selectedLanguage !== '' && selectedFormat !== '' && selectedType !== '') {
// // //       return edition.language === selectedLanguage && edition.format === selectedFormat && edition.type === selectedType;
// // //     } else if (selectedLanguage !== '' && selectedFormat !== '') {
// // //       return edition.language === selectedLanguage && edition.format === selectedFormat;
// // //     } else if (selectedLanguage !== '' && selectedType !== '') {
// // //       return edition.language === selectedLanguage && edition.type === selectedType;
// // //     } else if (selectedFormat !== '' && selectedType !== '') {
// // //       return edition.format === selectedFormat && edition.type === selectedType;
// // //     } else if (selectedLanguage !== '') {
// // //       return edition.language === selectedLanguage;
// // //     } else if (selectedFormat !== '') {
// // //       return edition.format === selectedFormat;
// // //     } else if (selectedType !== '') {
// // //       return edition.type === selectedType;
// // //     } else {
// // //       return true;
// // //     }
// // //   });

// // //   return (
// // //     <div className="container mx-auto px-4 py-8 flex">
// // //       {/* Menu */}
// // //       <div className="w-1/4 mr-4 custom-scroll max-h-screen overflow-auto"> {/* Add custom-scroll class */}
// // //         <div className="mb-4">
// // //           <label htmlFor="language" className="block text-sm font-medium text-gray-700">Sort By Language</label>
// // //           <select
// // //             id="language"
// // //             name="language"
// // //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
// // //             onChange={(e) => setSelectedLanguage(e.target.value)}
// // //           >
// // //             <option value="">All Languages</option>
// // //             {languages.map(language => (
// // //               <option key={language} value={language}>
// // //                 {language}
// // //               </option>
// // //             ))}
// // //           </select>
// // //         </div>

// // //         <div className="mb-4">
// // //           <label htmlFor="format" className="block text-sm font-medium text-gray-700">Sort By Format</label>
// // //           <select
// // //             id="format"
// // //             name="format"
// // //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
// // //             onChange={(e) => setSelectedFormat(e.target.value)}
// // //           >
// // //             <option value="">All Formats</option>
// // //             {formats.map(format => (
// // //               <option key={format} value={format}>
// // //                 {format}
// // //               </option>
// // //             ))}
// // //           </select>
// // //         </div>

// // //         <div className="mb-4">
// // //           <label htmlFor="type" className="block text-sm font-medium text-gray-700">Sort By Type</label>
// // //           <select
// // //             id="type"
// // //             name="type"
// // //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
// // //             onChange={(e) => setSelectedType(e.target.value)}
// // //           >
// // //             <option value="">All Types</option>
// // //             {types.map(type => (
// // //               <option key={type} value={type}>
// // //                 {type}
// // //               </option>
// // //             ))}
// // //           </select>
// // //         </div>

// // //         {/* Quran Editions */}
// // //         <div className="grid grid-cols-1 gap-4">
// // //           {/* Map over filtered editions */}
// // //           {filteredEditions.map(edition => (
// // //             <div key={edition.identifier} className="bg-white rounded-lg shadow-md p-2 text-xs mb-1">
// // //               <Link href={`/quran/${edition.identifier}`}>
// // //                 <div className="text-left text-[10px]">
// // //                   <div className="flex justify-between mb-1">
// // //                     <p className="font-bold">{edition.englishName}</p>
// // //                     <h2 className="font-semibold">{edition.name}</h2>
// // //                   </div>
// // //                   <div className="flex justify-between text-[10px]">
// // //                     <p>Language: <span>{edition.language}</span></p>
// // //                     <p>Format: <span>{edition.format}</span></p>
// // //                     <p>Type: <span>{edition.type}</span></p>
// // //                     <p>Direction: <span>{edition.direction}</span></p>
// // //                   </div>
// // //                 </div>
// // //               </Link>
// // //             </div>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Quran;
// // "use client";
// // import React, { useEffect, useState } from 'react';
// // import { fetchEditions } from "@/app/pages/api/editions";
// // import { fetchLanguages } from "@/app/pages/api/languages";
// // import { fetchFormats } from "@/app/pages/api/formats";
// // import { fetchQuranByEditionIdentifier } from "@/app/pages/api/fetchEdtionWithIdentifier"; // Ensure this import is correct

// // const Quran = () => {
// //   // State variables
// //   const [editions, setEditions] = useState([]);
// //   const [languages, setLanguages] = useState([]);
// //   const [selectedLanguage, setSelectedLanguage] = useState('');
// //   const [selectedFormat, setSelectedFormat] = useState('');
// //   const [selectedType, setSelectedType] = useState('');
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [formats, setFormats] = useState([]);
// //   const [types, setTypes] = useState([]);
// //   const [selectedEditionData, setSelectedEditionData] = useState(null);

// //   // Fetch data when the component mounts
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const editionsData = await fetchEditions();
// //         const languagesData = await fetchLanguages();
// //         const formatsData = await fetchFormats();
// //         const typesData = ["tafsir", "translation", "quran", "transliteration", "versebyverse"]; // Hardcoded types

// //         setEditions(editionsData.data);
// //         setLanguages(languagesData.data);
// //         setFormats(formatsData.data);
// //         setTypes(typesData);
// //         setIsLoading(false);
// //       } catch (error) {
// //         console.error('Failed to fetch data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   // Function to fetch Quran by edition identifier
// //   const handleEditionClick = async (identifier) => {
// //     try {
// //       const data = await fetchQuranByEditionIdentifier(identifier);
// //       setSelectedEditionData(data);
// //     } catch (error) {
// //       console.error('Failed to fetch Quran by identifier:', error);
// //     }
// //   };

// //   // Filter editions based on selected language, format, and type
// //   const filteredEditions = editions.filter(edition => {
// //     if (selectedLanguage !== '' && selectedFormat !== '' && selectedType !== '') {
// //       return edition.language === selectedLanguage && edition.format === selectedFormat && edition.type === selectedType;
// //     } else if (selectedLanguage !== '' && selectedFormat !== '') {
// //       return edition.language === selectedLanguage && edition.format === selectedFormat;
// //     } else if (selectedLanguage !== '' && selectedType !== '') {
// //       return edition.language === selectedLanguage && edition.type === selectedType;
// //     } else if (selectedFormat !== '' && selectedType !== '') {
// //       return edition.format === selectedFormat && edition.type === selectedType;
// //     } else if (selectedLanguage !== '') {
// //       return edition.language === selectedLanguage;
// //     } else if (selectedFormat !== '') {
// //       return edition.format === selectedFormat;
// //     } else if (selectedType !== '') {
// //       return edition.type === selectedType;
// //     } else {
// //       return true;
// //     }
// //   });

// //   return (
// //     <div className="container mx-auto px-4 py-8 flex">
// //       {/* Menu */}
// //       <div className="w-1/4 mr-4 custom-scroll max-h-screen overflow-auto"> {/* Add custom-scroll class */}
// //         <div className="mb-4">
// //           <label htmlFor="language" className="block text-sm font-medium text-gray-700">Sort By Language</label>
// //           <select
// //             id="language"
// //             name="language"
// //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
// //             onChange={(e) => setSelectedLanguage(e.target.value)}
// //           >
// //             <option value="">All Languages</option>
// //             {languages.map(language => (
// //               <option key={language} value={language}>
// //                 {language}
// //               </option>
// //             ))}
// //           </select>
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="format" className="block text-sm font-medium text-gray-700">Sort By Format</label>
// //           <select
// //             id="format"
// //             name="format"
// //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
// //             onChange={(e) => setSelectedFormat(e.target.value)}
// //           >
// //             <option value="">All Formats</option>
// //             {formats.map(format => (
// //               <option key={format} value={format}>
// //                 {format}
// //               </option>
// //             ))}
// //           </select>
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="type" className="block text-sm font-medium text-gray-700">Sort By Type</label>
// //           <select
// //             id="type"
// //             name="type"
// //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
// //             onChange={(e) => setSelectedType(e.target.value)}
// //           >
// //             <option value="">All Types</option>
// //             {types.map(type => (
// //               <option key={type} value={type}>
// //                 {type}
// //               </option>
// //             ))}
// //           </select>
// //         </div>

// //         {/* Quran Editions */}
// //         <div className="grid grid-cols-1 gap-4">
// //           {/* Map over filtered editions */}
// //           {filteredEditions.map(edition => (
// //             <div
// //               key={edition.identifier}
// //               className="bg-white rounded-lg shadow-md p-2 text-xs mb-1 cursor-pointer"
// //               onClick={() => handleEditionClick(edition.identifier)}
// //             >
// //               <div className="text-left text-[10px]">
// //                 <div className="flex justify-between mb-1">
// //                   <p className="font-bold">{edition.englishName}</p>
// //                   <h2 className="font-semibold">{edition.name}</h2>
// //                 </div>
// //                 <div className="flex justify-between text-[10px]">
// //                   <p>Language: <span>{edition.language}</span></p>
// //                   <p>Format: <span>{edition.format}</span></p>
// //                   <p>Type: <span>{edition.type}</span></p>
// //                   <p>Direction: <span>{edition.direction}</span></p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Selected Edition Data */}
// //       <div className="w-3/4 ml-4">
// //         {selectedEditionData ? (
// //           <div className="bg-white rounded-lg shadow-md p-4">
// //             <h2 className="text-xl font-bold mb-4">Selected Edition Data</h2>
// //             <pre className="text-xs">{JSON.stringify(selectedEditionData, null, 2)}</pre>
// //           </div>
// //         ) : (
// //           <div className="text-gray-500">Select an edition to see its details.</div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Quran;
// "use client";
// import React, { useEffect, useState } from 'react';
// import { fetchEditions } from "@/app/pages/api/editions";
// import { fetchLanguages } from "@/app/pages/api/languages";
// import { fetchFormats } from "@/app/pages/api/formats";
// import { fetchQuranByEditionIdentifier } from "@/app/pages/api/fetchEdtionWithIdentifier"; // Ensure this import is correct

// const Quran = () => {
//   // State variables
//   const [editions, setEditions] = useState([]);
//   const [languages, setLanguages] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [selectedFormat, setSelectedFormat] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [formats, setFormats] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedEditionData, setSelectedEditionData] = useState(null);

//   // Fetch data when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const editionsData = await fetchEditions();
//         const languagesData = await fetchLanguages();
//         const formatsData = await fetchFormats();
//         const typesData = ["tafsir", "translation", "quran", "transliteration", "versebyverse"]; // Hardcoded types

//         setEditions(editionsData.data);
//         setLanguages(languagesData.data);
//         setFormats(formatsData.data);
//         setTypes(typesData);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Failed to fetch data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to fetch Quran by edition identifier
//   const handleEditionClick = async (identifier) => {
//     try {
//       const data = await fetchQuranByEditionIdentifier(identifier);
//       setSelectedEditionData(data.data); // Updated to access the correct property
//     } catch (error) {
//       console.error('Failed to fetch Quran by identifier:', error);
//     }
//   };

//   // Filter editions based on selected language, format, and type
//   const filteredEditions = editions.filter(edition => {
//     if (selectedLanguage !== '' && selectedFormat !== '' && selectedType !== '') {
//       return edition.language === selectedLanguage && edition.format === selectedFormat && edition.type === selectedType;
//     } else if (selectedLanguage !== '' && selectedFormat !== '') {
//       return edition.language === selectedLanguage && edition.format === selectedFormat;
//     } else if (selectedLanguage !== '' && selectedType !== '') {
//       return edition.language === selectedLanguage && edition.type === selectedType;
//     } else if (selectedFormat !== '' && selectedType !== '') {
//       return edition.format === selectedFormat && edition.type === selectedType;
//     } else if (selectedLanguage !== '') {
//       return edition.language === selectedLanguage;
//     } else if (selectedFormat !== '') {
//       return edition.format === selectedFormat;
//     } else if (selectedType !== '') {
//       return edition.type === selectedType;
//     } else {
//       return true;
//     }
//   });

//   return (
//     <div className="container mx-auto px-4 py-8 flex">
//       {/* Menu */}
//       <div className="w-1/4 mr-4 custom-scroll max-h-screen overflow-auto"> {/* Add custom-scroll class */}
//         <div className="mb-4">
//           <label htmlFor="language" className="block text-sm font-medium text-gray-700">Sort By Language</label>
//           <select
//             id="language"
//             name="language"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedLanguage(e.target.value)}
//           >
//             <option value="">All Languages</option>
//             {languages.map(language => (
//               <option key={language} value={language}>
//                 {language}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="format" className="block text-sm font-medium text-gray-700">Sort By Format</label>
//           <select
//             id="format"
//             name="format"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedFormat(e.target.value)}
//           >
//             <option value="">All Formats</option>
//             {formats.map(format => (
//               <option key={format} value={format}>
//                 {format}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="type" className="block text-sm font-medium text-gray-700">Sort By Type</label>
//           <select
//             id="type"
//             name="type"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedType(e.target.value)}
//           >
//             <option value="">All Types</option>
//             {types.map(type => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Quran Editions */}
//         <div className="grid grid-cols-1 gap-4">
//           {/* Map over filtered editions */}
//           {filteredEditions.map(edition => (
//             <div
//               key={edition.identifier}
//               className="bg-white rounded-lg shadow-md p-2 text-xs mb-1 cursor-pointer"
//               onClick={() => handleEditionClick(edition.identifier)}
//             >
//               <div className="text-left text-[10px]">
//                 <div className="flex justify-between mb-1">
//                   <p className="font-bold">{edition.englishName}</p>
//                   <h2 className="font-semibold">{edition.name}</h2>
//                 </div>
//                 <div className="flex justify-between text-[10px]">
//                   <p>Language: <span>{edition.language}</span></p>
//                   <p>Format: <span>{edition.format}</span></p>
//                   <p>Type: <span>{edition.type}</span></p>
//                   <p>Direction: <span>{edition.direction}</span></p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Selected Edition Data */}
//       <div className="w-3/4 ml-4">
//         {selectedEditionData ? (
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-bold mb-4">Selected Edition Data</h2>
//             {selectedEditionData.surahs.map((surah) => (
//               <div key={surah.number} className="mb-4">
//                 <h3 className="text-lg font-semibold">
//                   {surah.number}. {surah.englishName} ({surah.name}) - {surah.englishNameTranslation} [{surah.revelationType}]
//                 </h3>
//                 <div className="ml-4">
//                   {surah.ayahs.map((ayah) => (
//                     <div key={ayah.number} className="mb-2">
//                       <p>
//                         <span className="font-semibold">Ayah {ayah.numberInSurah}:</span> {ayah.text}
//                       </p>
//                       <p>Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}, Ruku: {ayah.ruku}, Hizb Quarter: {ayah.hizbQuarter}, Sajda: {ayah.sajda ? "Yes" : "No"}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-gray-500">Select an edition to see its details.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default Quran;
// "use client";
// import React, { useEffect, useState } from 'react';
// import { fetchEditions } from "@/app/pages/api/editions";
// import { fetchLanguages } from "@/app/pages/api/languages";
// import { fetchFormats } from "@/app/pages/api/formats";
// import { fetchQuranByEditionIdentifier } from "@/app/pages/api/fetchEdtionWithIdentifier"; // Ensure this import is correct

// const Quran = () => {
//   // State variables
//   const [editions, setEditions] = useState([]);
//   const [languages, setLanguages] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [selectedFormat, setSelectedFormat] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [formats, setFormats] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedEditionData, setSelectedEditionData] = useState(null);

//   // Fetch data when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const editionsData = await fetchEditions();
//         const languagesData = await fetchLanguages();
//         const formatsData = await fetchFormats();
//         const typesData = ["tafsir", "translation", "quran", "transliteration", "versebyverse"]; // Hardcoded types

//         setEditions(editionsData.data);
//         setLanguages(languagesData.data);
//         setFormats(formatsData.data);
//         setTypes(typesData);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Failed to fetch data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to fetch Quran by edition identifier
//   const handleEditionClick = async (identifier) => {
//     try {
//       const data = await fetchQuranByEditionIdentifier(identifier);
//       console.log(data.data)
//       setSelectedEditionData(data.data); // Updated to access the correct property
//     } catch (error) {
//       console.error('Failed to fetch Quran by identifier:', error);
//     }
//   };

//   // Filter editions based on selected language, format, and type
//   const filteredEditions = editions.filter(edition => {
//     if (selectedLanguage !== '' && selectedFormat !== '' && selectedType !== '') {
//       return edition.language === selectedLanguage && edition.format === selectedFormat && edition.type === selectedType;
//     } else if (selectedLanguage !== '' && selectedFormat !== '') {
//       return edition.language === selectedLanguage && edition.format === selectedFormat;
//     } else if (selectedLanguage !== '' && selectedType !== '') {
//       return edition.language === selectedLanguage && edition.type === selectedType;
//     } else if (selectedFormat !== '' && selectedType !== '') {
//       return edition.format === selectedFormat && edition.type === selectedType;
//     } else if (selectedLanguage !== '') {
//       return edition.language === selectedLanguage;
//     } else if (selectedFormat !== '') {
//       return edition.format === selectedFormat;
//     } else if (selectedType !== '') {
//       return edition.type === selectedType;
//     } else {
//       return true;
//     }
//   });

//   return (
//     <div className="container mx-auto px-4 py-8 flex space-x-8">
//       {/* Menu */}
//       <div className="w-1/4 custom-scroll max-h-screen overflow-auto border rounded-lg p-4 bg-white shadow-lg">
//         <div className="mb-6">
//           <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Sort By Language</label>
//           <select
//             id="language"
//             name="language"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedLanguage(e.target.value)}
//           >
//             <option value="">All Languages</option>
//             {languages.map(language => (
//               <option key={language} value={language}>
//                 {language}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-2">Sort By Format</label>
//           <select
//             id="format"
//             name="format"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedFormat(e.target.value)}
//           >
//             <option value="">All Formats</option>
//             {formats.map(format => (
//               <option key={format} value={format}>
//                 {format}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Sort By Type</label>
//           <select
//             id="type"
//             name="type"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedType(e.target.value)}
//           >
//             <option value="">All Types</option>
//             {types.map(type => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Quran Editions */}
//         <div className="grid grid-cols-1 gap-4">
//           {/* Map over filtered editions */}
//           {filteredEditions.map(edition => (
//             <div
//               key={edition.identifier}
//               className="bg-gray-100 rounded-lg shadow-md p-4 text-xs cursor-pointer transition-transform transform hover:scale-105"
//               onClick={() => handleEditionClick(edition.identifier)}
//             >
//               <div className="text-left text-[10px]">
//                 <div className="flex justify-between mb-2">
//                   <p className="font-bold text-sm">{edition.englishName}</p>
//                   <h2 className="font-semibold text-sm">{edition.name}</h2>
//                 </div>
//                 <div className="text-gray-600">
//                   <p>Language: <span>{edition.language}</span></p>
//                   <p>Format: <span>{edition.format}</span></p>
//                   <p>Type: <span>{edition.type}</span></p>
//                   <p>Direction: <span>{edition.direction}</span></p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Selected Edition Data */}
//       <div className="w-3/4 border rounded-lg p-4 bg-white shadow-lg">
//         {selectedEditionData ? (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Selected Edition Data</h2>
//             {selectedEditionData.surahs.map((surah) => (
//               <div key={surah.number} className="mb-8">
//                 <h3 className="text-xl font-semibold mb-4">
//                   {surah.number}. {surah.englishName} ({surah.name}) - {surah.englishNameTranslation} <span className="text-gray-500">[{surah.revelationType}]</span>
//                 </h3>
//                 <div className="space-y-4">
//                   {surah.ayahs.map((ayah) => (
//                     <div key={ayah.number} className="p-4 bg-gray-100 rounded-lg shadow-inner">
//                       <p className="font-semibold text-sm mb-2">Ayah {ayah.numberInSurah}:</p>
//                       <p className="text-sm mb-2">{ayah.text}</p>
//                       <p className="text-xs text-gray-500">Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}, Ruku: {ayah.ruku}, Hizb Quarter: {ayah.hizbQuarter}, Sajda: {ayah.sajda ? "Yes" : "No"}</p>
//                       {/* Display audio if available */}
//                       {ayah.audio && (
//                         <div className="mt-2">
//                           <audio controls>
//                             <source src={ayah.audio} type="audio/mpeg" />
//                             Your browser does not support the audio element.
//                           </audio>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-gray-500 text-center">Select an edition to see its details.</div>
//         )}
//       </div>

//     </div>
//   );
// };

// // // export default Quran;
// "use client";
// import React, { useEffect, useState, useMemo } from 'react';
// import { fetchEditions } from "@/app/pages/api/editions";
// import { fetchLanguages } from "@/app/pages/api/languages";
// import { fetchFormats } from "@/app/pages/api/formats";
// import { fetchQuranByEditionIdentifier } from "@/app/pages/api/fetchEdtionWithIdentifier"; // Ensure this import is correct

// const Quran = () => {
//   // State variables
//   const [editions, setEditions] = useState([]);
//   const [languages, setLanguages] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [selectedFormat, setSelectedFormat] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [formats, setFormats] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedEditionData, setSelectedEditionData] = useState(null);

//   // Fetch data when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const editionsData = await fetchEditions();
//         const languagesData = await fetchLanguages();
//         const formatsData = await fetchFormats();
//         const typesData = ["tafsir", "translation", "quran", "transliteration", "versebyverse"]; // Hardcoded types

//         setEditions(editionsData.data);
//         setLanguages(languagesData.data);
//         setFormats(formatsData.data);
//         setTypes(typesData);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Failed to fetch data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Memoized filtered editions
//   const filteredEditions = useMemo(() => {
//     return editions.filter(edition => {
//       if (selectedLanguage !== '' && selectedFormat !== '' && selectedType !== '') {
//         return edition.language === selectedLanguage && edition.format === selectedFormat && edition.type === selectedType;
//       } else if (selectedLanguage !== '' && selectedFormat !== '') {
//         return edition.language === selectedLanguage && edition.format === selectedFormat;
//       } else if (selectedLanguage !== '' && selectedType !== '') {
//         return edition.language === selectedLanguage && edition.type === selectedType;
//       } else if (selectedFormat !== '' && selectedType !== '') {
//         return edition.format === selectedFormat && edition.type === selectedType;
//       } else if (selectedLanguage !== '') {
//         return edition.language === selectedLanguage;
//       } else if (selectedFormat !== '') {
//         return edition.format === selectedFormat;
//       } else if (selectedType !== '') {
//         return edition.type === selectedType;
//       } else {
//         return true;
//       }
//     });
//   }, [editions, selectedLanguage, selectedFormat, selectedType]);

//   // Memoized selected edition data
//   const memoizedSelectedEditionData = useMemo(() => selectedEditionData, [selectedEditionData]);

//   // Function to fetch Quran by edition identifier
//   const handleEditionClick = async (identifier) => {
//     try {
//       // Reset selected edition data to null
//       setSelectedEditionData(null);
//       const data = await fetchQuranByEditionIdentifier(identifier);
//       setSelectedEditionData(data.data); // Updated to access the correct property
//     } catch (error) {
//       console.error('Failed to fetch Quran by identifier:', error);
//     }
//   };


//   return (
//     <div className="container mx-auto px-4 py-8 flex space-x-8">
//       {/* Menu */}
//       <div className="w-1/4 border rounded-lg p-4 bg-white shadow-lg"  >
//         <div className="mb-6">
//           <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Sort By Language</label>
//           <select
//             id="language"
//             name="language"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedLanguage(e.target.value)}
//           >
//             <option value="">All Languages</option>
//             {languages.map(language => (
//               <option key={language} value={language}>
//                 {language}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-2">Sort By Format</label>
//           <select
//             id="format"
//             name="format"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedFormat(e.target.value)}
//           >
//             <option value="">All Formats</option>
//             {formats.map(format => (
//               <option key={format} value={format}>
//                 {format}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Sort By Type</label>
//           <select
//             id="type"
//             name="type"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedType(e.target.value)}
//           >
//             <option value="">All Types</option>
//             {types.map(type => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Quran Editions */}
//         <div className="grid w-4/4 border grid-cols-1 gap-4 custom-scroll" style={{ maxHeight: '45vh', overflowY: 'auto', padding: '1rem 1rem 1rem 0' }}>
//           {/* Map over filtered editions */}
//           {filteredEditions.map(edition => (
//             <div
//               key={edition.identifier}
//               className="bg-gray-100 rounded-lg shadow-md p-4 text-xs cursor-pointer transition-transform transform hover:scale-105"
//               onClick={() => handleEditionClick(edition.identifier)}
//             >
//               <div className="text-left text-[10px]">
//                 <div className="flex justify-between mb-2">
//                   <p className="font-bold text-sm">{edition.englishName}</p>
//                   <h2 className="font-semibold text-sm">{edition.name}</h2>
//                 </div>
//                 <div className="text-gray-600">
//                   <p>Language: <span>{edition.language}</span></p>
//                   <p>Format: <span>{edition.format}</span></p>
//                   <p>Type: <span>{edition.type}</span></p>
//                   <p>Direction: <span>{edition.direction}</span></p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Selected Edition Data */}
//       <div className="w-3/4 border rounded-lg p-4 bg-white shadow-lg" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
//         {memoizedSelectedEditionData ? (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Selected Edition Data</h2>
//             {memoizedSelectedEditionData.surahs.map((surah) => (
//               <div key={surah.number} className="mb-8">
//                 <h3 className="text-xl font-semibold mb-4">
//                   {surah.number}. {surah.englishName} ({surah.name}) - {surah.englishNameTranslation} <span className="text-gray-500">[{surah.revelationType}]</span>
//                 </h3>
//                 <div className="space-y-4">
//                   {surah.ayahs.map((ayah) => (
//                     <div key={ayah.number} className="p-4 bg-gray-100 rounded-lg shadow-inner">
//                       <p className="font-semibold text-sm mb-2">Ayah {ayah.numberInSurah}:</p>
//                       <p className="text-sm mb-2">{ayah.text}</p>
//                       <p className="text-xs text-gray-500">Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}, Ruku: {ayah.ruku}, Hizb Quarter: {ayah.hizbQuarter}, Sajda: {ayah.sajda ? "Yes" : "No"}</p>
//                       {/* Display audio if available */}
//                       {ayah.audio && (
//                         <div className="mt-2">
//                           <audio controls>
//                             <source src={ayah.audio} type="audio/mpeg" />
//                             Your browser does not support the audio element.
//                           </audio>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-gray-500 text-center">Select an edition to see its details.</div>
//         )}
//       </div>

//     </div>
//   );
// };

// export default Quran;
// "use client";
// import React, { useEffect, useState, useMemo, useRef } from 'react';
// import { fetchEditions } from "@/app/pages/api/editions";
// import { fetchLanguages } from "@/app/pages/api/languages";
// import { fetchFormats } from "@/app/pages/api/formats";
// import { fetchQuranByEditionIdentifier } from "@/app/pages/api/fetchEdtionWithIdentifier";

// const Quran = () => {
//   const [editions, setEditions] = useState([]);
//   const [languages, setLanguages] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [selectedFormat, setSelectedFormat] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [formats, setFormats] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedEditionData, setSelectedEditionData] = useState(null);
//   const [isEditionsLoading, setIsEditionsLoading] = useState(true);
//   const [isLanguagesLoading, setIsLanguagesLoading] = useState(true);
//   const [isFormatsLoading, setIsFormatsLoading] = useState(true);

//   const editionsRef = useRef();
//   const languagesRef = useRef();
//   const formatsRef = useRef();

//   const fetchData = async (type) => {
//     try {
//       if (type === 'editions') {
//         const editionsData = await fetchEditions();
//         setEditions(editionsData.data);
//         setIsEditionsLoading(false);
//       } else if (type === 'languages') {
//         const languagesData = await fetchLanguages();
//         setLanguages(languagesData.data);
//         setIsLanguagesLoading(false);
//       } else if (type === 'formats') {
//         const formatsData = await fetchFormats();
//         setFormats(formatsData.data);
//         setIsFormatsLoading(false);
//       }
//       const typesData = ["tafsir", "translation", "quran", "transliteration", "versebyverse"];
//       setTypes(typesData);
//     } catch (error) {
//       console.error('Failed to fetch data:', error);
//     }
//   };

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1
//     };

//     const editionsObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('editions');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const languagesObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('languages');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const formatsObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('formats');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     if (editionsRef.current) editionsObserver.observe(editionsRef.current);
//     if (languagesRef.current) languagesObserver.observe(languagesRef.current);
//     if (formatsRef.current) formatsObserver.observe(formatsRef.current);

//     return () => {
//       if (editionsRef.current) editionsObserver.unobserve(editionsRef.current);
//       if (languagesRef.current) languagesObserver.unobserve(languagesRef.current);
//       if (formatsRef.current) formatsObserver.unobserve(formatsRef.current);
//     };
//   }, []);

//   const filteredEditions = useMemo(() => {
//     return editions.filter(edition => {
//       if (selectedLanguage !== '' && selectedFormat !== '' && selectedType !== '') {
//         return edition.language === selectedLanguage && edition.format === selectedFormat && edition.type === selectedType;
//       } else if (selectedLanguage !== '' && selectedFormat !== '') {
//         return edition.language === selectedLanguage && edition.format === selectedFormat;
//       } else if (selectedLanguage !== '' && selectedType !== '') {
//         return edition.language === selectedLanguage && edition.type === selectedType;
//       } else if (selectedFormat !== '' && selectedType !== '') {
//         return edition.format === selectedFormat && edition.type === selectedType;
//       } else if (selectedLanguage !== '') {
//         return edition.language === selectedLanguage;
//       } else if (selectedFormat !== '') {
//         return edition.format === selectedFormat;
//       } else if (selectedType !== '') {
//         return edition.type === selectedType;
//       } else {
//         return true;
//       }
//     });
//   }, [editions, selectedLanguage, selectedFormat, selectedType]);

//   const memoizedSelectedEditionData = useMemo(() => selectedEditionData, [selectedEditionData]);

//   const handleEditionClick = async (identifier) => {
//     try {
//       setSelectedEditionData(null);
//       const data = await fetchQuranByEditionIdentifier(identifier);
//       setSelectedEditionData(data.data);
//     } catch (error) {
//       console.error('Failed to fetch Quran by identifier:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 flex space-x-8">
//       <div className="w-1/4 border rounded-lg p-4 bg-white shadow-lg">
//         <div ref={languagesRef}>
//           {isLanguagesLoading ? <div>Loading languages...</div> :
//             <div className="mb-6">
//               <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Sort By Language</label>
//               <select
//                 id="language"
//                 name="language"
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//                 onChange={(e) => setSelectedLanguage(e.target.value)}
//               >
//                 <option value="">All Languages</option>
//                 {languages.map(language => (
//                   <option key={language} value={language}>
//                     {language}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           }
//         </div>

//         <div ref={formatsRef}>
//           {isFormatsLoading ? <div>Loading formats...</div> :
//             <div className="mb-6">
//               <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-2">Sort By Format</label>
//               <select
//                 id="format"
//                 name="format"
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//                 onChange={(e) => setSelectedFormat(e.target.value)}
//               >
//                 <option value="">All Formats</option>
//                 {formats.map(format => (
//                   <option key={format} value={format}>
//                     {format}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           }
//         </div>

//         <div className="mb-6">
//           <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Sort By Type</label>
//           <select
//             id="type"
//             name="type"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedType(e.target.value)}
//           >
//             <option value="">All Types</option>
//             {types.map(type => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div ref={editionsRef} className="grid w-4/4 border grid-cols-1 gap-4 custom-scroll" style={{ maxHeight: '45vh', overflowY: 'auto', padding: '1rem 1rem 1rem 0' }}>
//           {isEditionsLoading ? <div>Loading editions...</div> :
//             filteredEditions.map(edition => (
//               <div
//                 key={edition.identifier}
//                 className="bg-gray-100 rounded-lg shadow-md p-4 text-xs cursor-pointer transition-transform transform hover:scale-105"
//                 onClick={() => handleEditionClick(edition.identifier)}
//               >
//                 <div className="text-left text-[10px]">
//                   <div className="flex justify-between mb-2">
//                     <p className="font-bold text-sm">{edition.englishName}</p>
//                     <h2 className="font-semibold text-sm">{edition.name}</h2>
//                   </div>
//                   <div className="text-gray-600">
//                     <p>Language: <span>{edition.language}</span></p>
//                     <p>Format: <span>{edition.format}</span></p>
//                     <p>Type: <span>{edition.type}</span></p>
//                     <p>Direction: <span>{edition.direction}</span></p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>

//       <div className="w-3/4 border rounded-lg p-4 bg-white shadow-lg" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
//         {memoizedSelectedEditionData ? (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Selected Edition Data</h2>
//             {memoizedSelectedEditionData.surahs.map((surah) => (
//               <div key={surah.number} className="mb-8">
//                 <h3 className="text-xl font-semibold mb-4">
//                   {surah.number}. {surah.englishName} ({surah.name}) - {surah.englishNameTranslation} <span className="text-gray-500">[{surah.revelationType}]</span>
//                 </h3>
//                 <div className="space-y-4">
//                   {surah.ayahs.map((ayah) => (
//                     <div key={ayah.number} className="p-4 bg-gray-100 rounded-lg shadow-inner">
//                       <p className="font-semibold text-sm mb-2">Ayah {ayah.numberInSurah}:</p>
//                       <p className="text-sm mb-2">{ayah.text}</p>
//                       <p className="text-xs text-gray-500">Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}, Ruku: {ayah.ruku}, Hizb Quarter: {ayah.hizbQuarter}, Sajda: {ayah.sajda ? "Yes" : "No"}</p>
//                       {ayah.audio && (
//                         <div className="mt-2">
//                           <audio controls>
//                             <source src={ayah.audio} type="audio/mpeg" />
//                             Your browser does not support the audio element.
//                           </audio>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-gray-500 text-center">Select an edition to see its details.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default Quran;
// "use client";
// import React, { useEffect, useState, useMemo, useRef } from 'react';
// import { fetchEditions } from "@/app/pages/api/editions";
// import { fetchLanguages } from "@/app/pages/api/languages";
// import { fetchFormats } from "@/app/pages/api/formats";
// import { fetchQuranByEditionIdentifier } from "@/app/pages/api/fetchEdtionWithIdentifier";

// const Quran = () => {
//   const [editions, setEditions] = useState([]);
//   const [languages, setLanguages] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [selectedFormat, setSelectedFormat] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [formats, setFormats] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedEditionData, setSelectedEditionData] = useState(null);
//   const [isEditionsLoading, setIsEditionsLoading] = useState(true);
//   const [isLanguagesLoading, setIsLanguagesLoading] = useState(true);
//   const [isFormatsLoading, setIsFormatsLoading] = useState(true);

//   const [currentPage, setCurrentPage] = useState(1);
//   const ayahsPerPage = 10;

//   const editionsRef = useRef();
//   const languagesRef = useRef();
//   const formatsRef = useRef();

//   const fetchData = async (type) => {
//     try {
//       if (type === 'editions') {
//         const editionsData = await fetchEditions();
//         setEditions(editionsData.data);
//         setIsEditionsLoading(false);
//       } else if (type === 'languages') {
//         const languagesData = await fetchLanguages();
//         setLanguages(languagesData.data);
//         setIsLanguagesLoading(false);
//       } else if (type === 'formats') {
//         const formatsData = await fetchFormats();
//         setFormats(formatsData.data);
//         setIsFormatsLoading(false);
//       }
//       const typesData = ["tafsir", "translation", "quran", "transliteration", "versebyverse"];
//       setTypes(typesData);
//     } catch (error) {
//       console.error('Failed to fetch data:', error);
//     }
//   };

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1
//     };

//     const editionsObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('editions');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const languagesObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('languages');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const formatsObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('formats');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     if (editionsRef.current) editionsObserver.observe(editionsRef.current);
//     if (languagesRef.current) languagesObserver.observe(languagesRef.current);
//     if (formatsRef.current) formatsObserver.observe(formatsRef.current);

//     return () => {
//       if (editionsRef.current) editionsObserver.unobserve(editionsRef.current);
//       if (languagesRef.current) languagesObserver.unobserve(languagesRef.current);
//       if (formatsRef.current) formatsObserver.unobserve(formatsRef.current);
//     };
//   }, []);

//   const filteredEditions = useMemo(() => {
//     return editions.filter(edition => {
//       if (selectedLanguage !== '' && selectedFormat !== '' && selectedType !== '') {
//         return edition.language === selectedLanguage && edition.format === selectedFormat && edition.type === selectedType;
//       } else if (selectedLanguage !== '' && selectedFormat !== '') {
//         return edition.language === selectedLanguage && edition.format === selectedFormat;
//       } else if (selectedLanguage !== '' && selectedType !== '') {
//         return edition.language === selectedLanguage && edition.type === selectedType;
//       } else if (selectedFormat !== '' && selectedType !== '') {
//         return edition.format === selectedFormat && edition.type === selectedType;
//       } else if (selectedLanguage !== '') {
//         return edition.language === selectedLanguage;
//       } else if (selectedFormat !== '') {
//         return edition.format === selectedFormat;
//       } else if (selectedType !== '') {
//         return edition.type === selectedType;
//       } else {
//         return true;
//       }
//     });
//   }, [editions, selectedLanguage, selectedFormat, selectedType]);

//   const memoizedSelectedEditionData = useMemo(() => selectedEditionData, [selectedEditionData]);

//   const handleEditionClick = async (identifier) => {
//     try {
//       setSelectedEditionData(null);
//       const data = await fetchQuranByEditionIdentifier(identifier);
//       setSelectedEditionData(data.data);
//       setCurrentPage(1); // Reset to the first page
//     } catch (error) {
//       console.error('Failed to fetch Quran by identifier:', error);
//     }
//   };

//   const indexOfLastAyah = currentPage * ayahsPerPage;
//   const indexOfFirstAyah = indexOfLastAyah - ayahsPerPage;
//   const currentAyahs = memoizedSelectedEditionData
//     ? memoizedSelectedEditionData.surahs.flatMap(surah => surah.ayahs).slice(indexOfFirstAyah, indexOfLastAyah)
//     : [];

//   const totalAyahs = memoizedSelectedEditionData
//     ? memoizedSelectedEditionData.surahs.flatMap(surah => surah.ayahs).length
//     : 0;

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalAyahs / ayahsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 flex space-x-8">
//       <div className="w-1/4 border rounded-lg p-4 bg-white shadow-lg">
//         <div ref={languagesRef}>
//           {isLanguagesLoading ? <div>Loading languages...</div> :
//             <div className="mb-6">
//               <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Sort By Language</label>
//               <select
//                 id="language"
//                 name="language"
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//                 onChange={(e) => setSelectedLanguage(e.target.value)}
//               >
//                 <option value="">All Languages</option>
//                 {languages.map(language => (
//                   <option key={language} value={language}>
//                     {language}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           }
//         </div>

//         <div ref={formatsRef}>
//           {isFormatsLoading ? <div>Loading formats...</div> :
//             <div className="mb-6">
//               <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-2">Sort By Format</label>
//               <select
//                 id="format"
//                 name="format"
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//                 onChange={(e) => setSelectedFormat(e.target.value)}
//               >
//                 <option value="">All Formats</option>
//                 {formats.map(format => (
//                   <option key={format} value={format}>
//                     {format}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           }
//         </div>

//         <div className="mb-6">
//           <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Sort By Type</label>
//           <select
//             id="type"
//             name="type"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedType(e.target.value)}
//           >
//             <option value="">All Types</option>
//             {types.map(type => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div ref={editionsRef} className="grid w-4/4 border grid-cols-1 gap-4 custom-scroll" style={{ maxHeight: '45vh', overflowY: 'auto', padding: '1rem 1rem 1rem 0' }}>
//           {isEditionsLoading ? <div>Loading editions...</div> :
//             filteredEditions.map(edition => (
//               <div
//                 key={edition.identifier}
//                 className="bg-gray-100 rounded-lg shadow-md p-4 text-xs cursor-pointer transition-transform transform hover:scale-105"
//                 onClick={() => handleEditionClick(edition.identifier)}
//               >
//                 <div className="text-left text-[10px]">
//                   <div className="flex justify-between mb-2">
//                     <p className="font-bold text-sm">{edition.englishName}</p>
//                     <h2 className="font-semibold text-sm">{edition.name}</h2>
//                   </div>
//                   <div className="text-gray-600">
//                     <p>Language: <span>{edition.language}</span></p>
//                     <p>Format: <span>{edition.format}</span></p>
//                     <p>Type: <span>{edition.type}</span></p>
//                     <p>Direction: <span>{edition.direction}</span></p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>

//       <div className="w-3/4 border rounded-lg p-4 bg-white shadow-lg" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
//         {memoizedSelectedEditionData ? (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Selected Edition Data</h2>
//             <div className="space-y-4">
//               {currentAyahs.map((ayah) => (
//                 <div key={ayah.number} className="p-4 bg-gray-100 rounded-lg shadow-inner">
//                   <p className="font-semibold text-sm mb-2">Ayah {ayah.numberInSurah}:</p>
//                   <p className="text-sm mb-2">{ayah.text}</p>
//                   <p className="text-xs text-gray-500">Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}, Ruku: {ayah.ruku}, Hizb Quarter: {ayah.hizbQuarter}, Sajda: {ayah.sajda ? "Yes" : "No"}</p>
//                   {ayah.audio && (
//                     <div className="mt-2">
//                       <audio controls>
//                         <source src={ayah.audio} type="audio/mpeg" />
//                         Your browser does not support the audio element.
//                       </audio>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center mt-4">
//               {pageNumbers.map(number => (
//                 <button
//                   key={number}
//                   onClick={() => handlePageChange(number)}
//                   className={`mx-1 px-3 py-1 border rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//                 >
//                   {number}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="text-gray-500 text-center">Select an edition to see its details.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Quran;
// Quran.js
// "use client"
// import React, { useEffect, useState, useMemo, useRef } from 'react';
// import CustomAudioPlayer from '@/app/reusableComponents/CustomAudioPlayer';  // Import the custom audio player
// import { fetchEditions } from "@/app/pages/api/editions";
// import { fetchLanguages } from "@/app/pages/api/languages";
// import { fetchFormats } from "@/app/pages/api/formats";
// import { fetchQuranByEditionIdentifier } from "@/app/pages/api/fetchEdtionWithIdentifier";

// const Quran = () => {
//   const [editions, setEditions] = useState([]);
//   const [languages, setLanguages] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [selectedFormat, setSelectedFormat] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [formats, setFormats] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedEditionData, setSelectedEditionData] = useState(null);
//   const [isEditionsLoading, setIsEditionsLoading] = useState(true);
//   const [isLanguagesLoading, setIsLanguagesLoading] = useState(true);
//   const [isFormatsLoading, setIsFormatsLoading] = useState(true);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentPageSet, setCurrentPageSet] = useState(0);
//   const ayahsPerPage = 10;
//   const pageNumbersPerSet = 5;

//   const [currentAudioUrl, setCurrentAudioUrl] = useState(''); // State to manage the current audio URL

//   const editionsRef = useRef();
//   const languagesRef = useRef();
//   const formatsRef = useRef();

//   const fetchData = async (type) => {
//     try {
//       if (type === 'editions') {
//         const editionsData = await fetchEditions();
//         setEditions(editionsData.data);
//         setIsEditionsLoading(false);
//       } else if (type === 'languages') {
//         const languagesData = await fetchLanguages();
//         setLanguages(languagesData.data);
//         setIsLanguagesLoading(false);
//       } else if (type === 'formats') {
//         const formatsData = await fetchFormats();
//         setFormats(formatsData.data);
//         setIsFormatsLoading(false);
//       }
//       const typesData = ["tafsir", "translation", "quran", "transliteration", "versebyverse"];
//       setTypes(typesData);
//     } catch (error) {
//       console.error('Failed to fetch data:', error);
//     }
//   };

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1
//     };

//     const editionsObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('editions');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const languagesObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('languages');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const formatsObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('formats');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     if (editionsRef.current) editionsObserver.observe(editionsRef.current);
//     if (languagesRef.current) languagesObserver.observe(languagesRef.current);
//     if (formatsRef.current) formatsObserver.observe(formatsRef.current);

//     return () => {
//       if (editionsRef.current) editionsObserver.unobserve(editionsRef.current);
//       if (languagesRef.current) languagesObserver.unobserve(languagesRef.current);
//       if (formatsRef.current) formatsObserver.unobserve(formatsRef.current);
//     };
//   }, []);

//   const filteredEditions = useMemo(() => {
//     return editions.filter(edition => {
//       if (selectedLanguage !== '' && selectedFormat !== '' && selectedType !== '') {
//         return edition.language === selectedLanguage && edition.format === selectedFormat && edition.type === selectedType;
//       } else if (selectedLanguage !== '' && selectedFormat !== '') {
//         return edition.language === selectedLanguage && edition.format === selectedFormat;
//       } else if (selectedLanguage !== '' && selectedType !== '') {
//         return edition.language === selectedLanguage && edition.type === selectedType;
//       } else if (selectedFormat !== '' && selectedType !== '') {
//         return edition.format === selectedFormat && edition.type === selectedType;
//       } else if (selectedLanguage !== '') {
//         return edition.language === selectedLanguage;
//       } else if (selectedFormat !== '') {
//         return edition.format === selectedFormat;
//       } else if (selectedType !== '') {
//         return edition.type === selectedType;
//       } else {
//         return true;
//       }
//     });
//   }, [editions, selectedLanguage, selectedFormat, selectedType]);

//   const memoizedSelectedEditionData = useMemo(() => selectedEditionData, [selectedEditionData]);

//   const handleEditionClick = async (identifier) => {
//     try {
//       setSelectedEditionData(null);
//       const data = await fetchQuranByEditionIdentifier(identifier);
//       setSelectedEditionData(data.data);
//       setCurrentPage(1); // Reset to the first page
//       setCurrentPageSet(0); // Reset to the first page set
//     } catch (error) {
//       console.error('Failed to fetch Quran by identifier:', error);
//     }
//   };

//   const indexOfLastAyah = currentPage * ayahsPerPage;
//   const indexOfFirstAyah = indexOfLastAyah - ayahsPerPage;
//   const currentAyahs = memoizedSelectedEditionData
//     ? memoizedSelectedEditionData.surahs.flatMap(surah => surah.ayahs).slice(indexOfFirstAyah, indexOfLastAyah)
//     : [];

//   const totalAyahs = memoizedSelectedEditionData
//     ? memoizedSelectedEditionData.surahs.flatMap(surah => surah.ayahs).length
//     : 0;

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalAyahs / ayahsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const currentPageNumbers = pageNumbers.slice(currentPageSet * pageNumbersPerSet, (currentPageSet + 1) * pageNumbersPerSet);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleNextPageSet = () => {
//     if ((currentPageSet + 1) * pageNumbersPerSet < pageNumbers.length) {
//       setCurrentPageSet(currentPageSet + 1);
//     }
//   };

//   const handlePreviousPageSet = () => {
//     if (currentPageSet > 0) {
//       setCurrentPageSet(currentPageSet - 1);
//     }
//   };

//   const handlePlayAudio = (audioUrl) => {
//     setCurrentAudioUrl(audioUrl);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 flex space-x-8">
//       <div className="w-1/4 border rounded-lg p-4 bg-white shadow-lg">
//         <div ref={languagesRef}>
//           {isLanguagesLoading ? <div>Loading languages...</div> :
//             <div className="mb-6">
//               <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Sort By Language</label>
//               <select
//                 id="language"
//                 name="language"
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//                 onChange={(e) => setSelectedLanguage(e.target.value)}
//               >
//                 <option value="">All Languages</option>
//                 {languages.map(language => (
//                   <option key={language} value={language}>
//                     {language}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           }
//         </div>

//         <div ref={formatsRef}>
//           {isFormatsLoading ? <div>Loading formats...</div> :
//             <div className="mb-6">
//               <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-2">Sort By Format</label>
//               <select
//                 id="format"
//                 name="format"
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//                 onChange={(e) => setSelectedFormat(e.target.value)}
//               >
//                 <option value="">All Formats</option>
//                 {formats.map(format => (
//                   <option key={format} value={format}>
//                     {format}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           }
//         </div>

//         <div className="mb-6">
//           <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Sort By Type</label>
//           <select
//             id="type"
//             name="type"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedType(e.target.value)}
//           >
//             <option value="">All Types</option>
//             {types.map(type => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div ref={editionsRef} className="grid w-4/4 border grid-cols-1 gap-4 custom-scroll" style={{ maxHeight: '45vh', overflowY: 'auto', padding: '1rem 1rem 1rem 0' }}>
//           {isEditionsLoading ? <div>Loading editions...</div> :
//             filteredEditions.map(edition => (
//               <div
//                 key={edition.identifier}
//                 className="bg-gray-100 rounded-lg shadow-md p-4 text-xs cursor-pointer transition-transform transform hover:scale-105"
//                 onClick={() => handleEditionClick(edition.identifier)}
//               >
//                 <div className="text-left text-[10px]">
//                   <div className="flex justify-between mb-2">
//                     <p className="font-bold text-sm">{edition.englishName}</p>
//                     <h2 className="font-semibold text-sm">{edition.name}</h2>
//                   </div>
//                   <div className="text-gray-600">
//                     <p>Language: <span>{edition.language}</span></p>
//                     <p>Format: <span>{edition.format}</span></p>
//                     <p>Type: <span>{edition.type}</span></p>
//                     <p>Direction: <span>{edition.direction}</span></p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>

//       <div className="w-3/4 border rounded-lg p-4 bg-white shadow-lg" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
//         {memoizedSelectedEditionData ? (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Selected Edition Data</h2>
//             <CustomAudioPlayer url={currentAudioUrl} />
//             <div className="flex justify-between mb-4">
//               <button
//                 onClick={handlePreviousPageSet}
//                 className={`mx-1 px-3 py-1 border rounded-md ${currentPageSet === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
//                 disabled={currentPageSet === 0}
//               >
//                 Previous
//               </button>
//               <div className="flex space-x-1">
//                 {currentPageNumbers.map(number => (
//                   <button
//                     key={number}
//                     onClick={() => handlePageChange(number)}
//                     className={`mx-1 px-3 py-1 border rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//                   >
//                     {number}
//                   </button>
//                 ))}
//               </div>
//               <button
//                 onClick={handleNextPageSet}
//                 className={`mx-1 px-3 py-1 border rounded-md ${currentPageSet === Math.floor(pageNumbers.length / pageNumbersPerSet) ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
//                 disabled={currentPageSet === Math.floor(pageNumbers.length / pageNumbersPerSet)}
//               >
//                 Next
//               </button>
//             </div>
//             <div className="space-y-4">
//               {currentAyahs.map((ayah) => (
//                 <div key={ayah.number} className="p-4 bg-gray-100 rounded-lg shadow-inner">
//                   <p className="font-semibold text-sm mb-2">Ayah {ayah.numberInSurah}:</p>
//                   <p className="text-sm mb-2">{ayah.text}</p>
//                   <p className="text-xs text-gray-500">Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}, Ruku: {ayah.ruku}, Hizb Quarter: {ayah.hizbQuarter}, Sajda: {ayah.sajda ? "Yes" : "No"}</p>
//                   {ayah.audio && (
//                     <button
//                       className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
//                       onClick={() => handlePlayAudio(ayah.audio)}
//                     >
//                       Play Ayah Audio
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="text-gray-500 text-center">Select an edition to see its details.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Quran;
"use client"
// "use client";
// import React, { useEffect, useState, useMemo, useRef } from 'react';
// import CustomAudioPlayer from '@/app/reusableComponents/CustomAudioPlayer';
// import { fetchEditions } from "@/app/pages/api/editions";
// import { fetchLanguages } from "@/app/pages/api/languages";
// import { fetchFormats } from "@/app/pages/api/formats";
// import { fetchQuranByEditionIdentifier } from "@/app/pages/api/fetchEdtionWithIdentifier";

// const Quran = () => {
//   const [editions, setEditions] = useState([]);
//   const [languages, setLanguages] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [selectedFormat, setSelectedFormat] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [formats, setFormats] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedEditionData, setSelectedEditionData] = useState(null);
//   const [isEditionsLoading, setIsEditionsLoading] = useState(true);
//   const [isLanguagesLoading, setIsLanguagesLoading] = useState(true);
//   const [isFormatsLoading, setIsFormatsLoading] = useState(true);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentPageSet, setCurrentPageSet] = useState(0);
//   const ayahsPerPage = 10;
//   const pageNumbersPerSet = 5;

//   const [currentAudioUrl, setCurrentAudioUrl] = useState('');

//   const editionsRef = useRef();
//   const languagesRef = useRef();
//   const formatsRef = useRef();

//   const fetchData = async (type) => {
//     try {
//       if (type === 'editions') {
//         const editionsData = await fetchEditions();
//         setEditions(editionsData.data);
//         setIsEditionsLoading(false);
//       } else if (type === 'languages') {
//         const languagesData = await fetchLanguages();
//         setLanguages(languagesData.data);
//         setIsLanguagesLoading(false);
//       } else if (type === 'formats') {
//         const formatsData = await fetchFormats();
//         setFormats(formatsData.data);
//         setIsFormatsLoading(false);
//       }
//       const typesData = ["tafsir", "translation", "quran", "transliteration", "versebyverse"];
//       setTypes(typesData);
//     } catch (error) {
//       console.error('Failed to fetch data:', error);
//     }
//   };

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1
//     };

//     const editionsObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('editions');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const languagesObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('languages');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const formatsObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           fetchData('formats');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     if (editionsRef.current) editionsObserver.observe(editionsRef.current);
//     if (languagesRef.current) languagesObserver.observe(languagesRef.current);
//     if (formatsRef.current) formatsObserver.observe(formatsRef.current);

//     return () => {
//       if (editionsRef.current) editionsObserver.unobserve(editionsRef.current);
//       if (languagesRef.current) languagesObserver.unobserve(languagesRef.current);
//       if (formatsRef.current) formatsObserver.unobserve(formatsRef.current);
//     };
//   }, []);

//   const filteredEditions = useMemo(() => {
//     return editions.filter(edition => {
//       if (selectedLanguage !== '' && selectedFormat !== '' && selectedType !== '') {
//         return edition.language === selectedLanguage && edition.format === selectedFormat && edition.type === selectedType;
//       } else if (selectedLanguage !== '' && selectedFormat !== '') {
//         return edition.language === selectedLanguage && edition.format === selectedFormat;
//       } else if (selectedLanguage !== '' && selectedType !== '') {
//         return edition.language === selectedLanguage && edition.type === selectedType;
//       } else if (selectedFormat !== '' && selectedType !== '') {
//         return edition.format === selectedFormat && edition.type === selectedType;
//       } else if (selectedLanguage !== '') {
//         return edition.language === selectedLanguage;
//       } else if (selectedFormat !== '') {
//         return edition.format === selectedFormat;
//       } else if (selectedType !== '') {
//         return edition.type === selectedType;
//       } else {
//         return true;
//       }
//     });
//   }, [editions, selectedLanguage, selectedFormat, selectedType]);

//   const memoizedSelectedEditionData = useMemo(() => selectedEditionData, [selectedEditionData]);

//   const handleEditionClick = async (identifier) => {
//     try {
//       setSelectedEditionData(null);
//       const data = await fetchQuranByEditionIdentifier(identifier);
//       setSelectedEditionData(data.data);
//       setCurrentPage(1);
//       setCurrentPageSet(0);
//     } catch (error) {
//       console.error('Failed to fetch Quran by identifier:', error);
//     }
//   };

//   const indexOfLastAyah = currentPage * ayahsPerPage;
//   const indexOfFirstAyah = indexOfLastAyah - ayahsPerPage;
//   const currentAyahs = memoizedSelectedEditionData
//     ? memoizedSelectedEditionData.surahs.flatMap(surah => surah.ayahs).slice(indexOfFirstAyah, indexOfLastAyah)
//     : [];

//   const totalAyahs = memoizedSelectedEditionData
//     ? memoizedSelectedEditionData.surahs.flatMap(surah => surah.ayahs).length
//     : 0;

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalAyahs / ayahsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const currentPageNumbers = pageNumbers.slice(currentPageSet * pageNumbersPerSet, (currentPageSet + 1) * pageNumbersPerSet);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleNextPageSet = () => {
//     if ((currentPageSet + 1) * pageNumbersPerSet < pageNumbers.length) {
//       setCurrentPageSet(currentPageSet + 1);
//     }
//   };

//   const handlePreviousPageSet = () => {
//     if (currentPageSet > 0) {
//       setCurrentPageSet(currentPageSet - 1);
//     }
//   };

//   const handlePlayAudio = (audioUrl) => {
//     setCurrentAudioUrl(audioUrl);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 flex space-x-8">
//       <div className="w-1/4 border rounded-lg p-4 bg-white shadow-lg">
//         <div ref={languagesRef}>
//           {isLanguagesLoading ? <div>Loading languages...</div> :
//             <div className="mb-6">
//               <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Sort By Language</label>
//               <select
//                 id="language"
//                 name="language"
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//                 onChange={(e) => setSelectedLanguage(e.target.value)}
//               >
//                 <option value="">All Languages</option>
//                 {languages.map(language => (
//                   <option key={language} value={language}>
//                     {language}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           }
//         </div>

//         <div ref={formatsRef}>
//           {isFormatsLoading ? <div>Loading formats...</div> :
//             <div className="mb-6">
//               <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-2">Sort By Format</label>
//               <select
//                 id="format"
//                 name="format"
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//                 onChange={(e) => setSelectedFormat(e.target.value)}
//               >
//                 <option value="">All Formats</option>
//                 {formats.map(format => (
//                   <option key={format} value={format}>
//                     {format}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           }
//         </div>

//         <div className="mb-6">
//           <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Sort By Type</label>
//           <select
//             id="type"
//             name="type"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
//             onChange={(e) => setSelectedType(e.target.value)}
//           >
//             <option value="">All Types</option>
//             {types.map(type => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div ref={editionsRef} className="grid w-4/4 border grid-cols-1 gap-4 custom-scroll" style={{ maxHeight: '45vh', overflowY: 'auto', padding: '1rem 1rem 1rem 0' }}>
//           {isEditionsLoading ? <div>Loading editions...</div> :
//             filteredEditions.map(edition => (
//               <div
//                 key={edition.identifier}
//                 className="bg-gray-100 rounded-lg shadow-md p-4 text-xs cursor-pointer transition-transform transform hover:scale-105"
//                 onClick={() => handleEditionClick(edition.identifier)}
//               >
//                 <div className="text-left text-[10px]">
//                   <div className="flex justify-between mb-2">
//                     <p className="font-bold text-sm">{edition.englishName}</p>
//                     <h2 className="font-semibold text-sm">{edition.name}</h2>
//                   </div>
//                   <div className="text-gray-600">
//                     <p>Language: <span>{edition.language}</span></p>
//                     <p>Format: <span>{edition.format}</span></p>
//                     <p>Type: <span>{edition.type}</span></p>
//                     <p>Direction: <span>{edition.direction}</span></p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>

//       <div className="w-3/4 border rounded-lg p-4 bg-white shadow-lg" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
//         {memoizedSelectedEditionData ? (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Selected Edition Data</h2>
//             <CustomAudioPlayer url={currentAudioUrl} />
//             <div className="flex justify-between mb-4">
//               <button
//                 onClick={handlePreviousPageSet}
//                 className={`mx-1 px-3 py-1 border rounded-md ${currentPageSet === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
//                 disabled={currentPageSet === 0}
//               >
//                 Previous
//               </button>
//               <div className="flex space-x-1">
//                 {currentPageNumbers.map(number => (
//                   <button
//                     key={number}
//                     onClick={() => handlePageChange(number)}
//                     className={`mx-1 px-3 py-1 border rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//                   >
//                     {number}
//                   </button>
//                 ))}
//               </div>
//               <button
//                 onClick={handleNextPageSet}
//                 className={`mx-1 px-3 py-1 border rounded-md ${currentPageSet === Math.floor(pageNumbers.length / pageNumbersPerSet) ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
//                 disabled={currentPageSet === Math.floor(pageNumbers.length / pageNumbersPerSet)}
//               >
//                 Next
//               </button>
//             </div>
//             <div className="space-y-4">
//               {currentAyahs.map((ayah) => (
//                 <div key={ayah.number} className="p-4 bg-gray-100 rounded-lg shadow-inner">
//                   <p className="font-semibold text-sm mb-2">Ayah {ayah.numberInSurah}:</p>
//                   <p className="text-sm mb-2">{ayah.text}</p>
//                   <p className="text-xs text-gray-500">Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}, Ruku: {ayah.ruku}, Hizb Quarter: {ayah.hizbQuarter}, Sajda: {ayah.sajda ? "Yes" : "No"}</p>
//                   {ayah.audio && (
//                     <button
//                       className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
//                       onClick={() => handlePlayAudio(ayah.audio)}
//                     >
//                       Play Ayah Audio
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="text-gray-500 text-center">Select an edition to see its details.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Quran;
"use client";
import React, { useEffect, useState, useMemo, useRef } from 'react';
import CustomAudioPlayer from '@/app/reusableComponents/CustomAudioPlayer';
import { fetchEditions } from "@/app/pages/api/editions";
import { fetchLanguages } from "@/app/pages/api/languages";
import { fetchFormats } from "@/app/pages/api/formats";
import { fetchQuranByEditionIdentifier } from "@/app/pages/api/fetchEdtionWithIdentifier";

const Quran = () => {
  const [editions, setEditions] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [formats, setFormats] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedEditionData, setSelectedEditionData] = useState(null);
  const [isEditionsLoading, setIsEditionsLoading] = useState(true);
  const [isLanguagesLoading, setIsLanguagesLoading] = useState(true);
  const [isFormatsLoading, setIsFormatsLoading] = useState(true);
 // Inside the Quran component
const [currentAudioIndex, setCurrentAudioIndex] = useState(0); // State variable to track the index of the current audio
const [audioList, setAudioList] = useState([]); // State variable to store the list of audio URLs

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSet, setCurrentPageSet] = useState(0);
  const ayahsPerPage = 10;
  const pageNumbersPerSet = 5;

  const [currentAudioUrl, setCurrentAudioUrl] = useState('');

  const editionsRef = useRef();
  const languagesRef = useRef();
  const formatsRef = useRef();

  const fetchData = async (type) => {
    try {
      if (type === 'editions') {
        const editionsData = await fetchEditions();
        setEditions(editionsData.data);
        setIsEditionsLoading(false);
      } else if (type === 'languages') {
        const languagesData = await fetchLanguages();
        setLanguages(languagesData.data);
        setIsLanguagesLoading(false);
      } else if (type === 'formats') {
        const formatsData = await fetchFormats();
        setFormats(formatsData.data);
        setIsFormatsLoading(false);
      }
      const typesData = ["tafsir", "translation", "quran", "transliteration", "versebyverse"];
      setTypes(typesData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const editionsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fetchData('editions');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const languagesObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fetchData('languages');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const formatsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fetchData('formats');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (editionsRef.current) editionsObserver.observe(editionsRef.current);
    if (languagesRef.current) languagesObserver.observe(languagesRef.current);
    if (formatsRef.current) formatsObserver.observe(formatsRef.current);

    return () => {
      if (editionsRef.current) editionsObserver.unobserve(editionsRef.current);
      if (languagesRef.current) languagesObserver.unobserve(languagesRef.current);
      if (formatsRef.current) formatsObserver.unobserve(formatsRef.current);
    };
  }, []);

  const filteredEditions = useMemo(() => {
    return editions.filter(edition => {
      if (selectedLanguage !== '' && selectedFormat !== '' && selectedType !== '') {
        return edition.language === selectedLanguage && edition.format === selectedFormat && edition.type === selectedType;
      } else if (selectedLanguage !== '' && selectedFormat !== '') {
        return edition.language === selectedLanguage && edition.format === selectedFormat;
      } else if (selectedLanguage !== '' && selectedType !== '') {
        return edition.language === selectedLanguage && edition.type === selectedType;
      } else if (selectedFormat !== '' && selectedType !== '') {
        return edition.format === selectedFormat && edition.type === selectedType;
      } else if (selectedLanguage !== '') {
        return edition.language === selectedLanguage;
      } else if (selectedFormat !== '') {
        return edition.format === selectedFormat;
      } else if (selectedType !== '') {
        return edition.type === selectedType;
      } else {
        return true;
      }
    });
  }, [editions, selectedLanguage, selectedFormat, selectedType]);

  const memoizedSelectedEditionData = useMemo(() => selectedEditionData, [selectedEditionData]);

  const handleEditionClick = async (identifier) => {
    try {
      setSelectedEditionData(null);
      const data = await fetchQuranByEditionIdentifier(identifier);
      setSelectedEditionData(data.data);
      setCurrentPage(1);
      setCurrentPageSet(0);
    } catch (error) {
      console.error('Failed to fetch Quran by identifier:', error);
    }
  };

  const indexOfLastAyah = currentPage * ayahsPerPage;
  const indexOfFirstAyah = indexOfLastAyah - ayahsPerPage;
  const currentAyahs = memoizedSelectedEditionData
    ? memoizedSelectedEditionData.surahs.flatMap(surah => surah.ayahs).slice(indexOfFirstAyah, indexOfLastAyah)
    : [];

  const totalAyahs = memoizedSelectedEditionData
    ? memoizedSelectedEditionData.surahs.flatMap(surah => surah.ayahs).length
    : 0;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalAyahs / ayahsPerPage); i++) {
    pageNumbers.push(i);
  }

  const currentPageNumbers = pageNumbers.slice(currentPageSet * pageNumbersPerSet, (currentPageSet + 1) * pageNumbersPerSet);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPageSet = () => {
    if ((currentPageSet + 1) * pageNumbersPerSet < pageNumbers.length) {
      setCurrentPageSet(currentPageSet + 1);
    }
  };

  const handlePreviousPageSet = () => {
    if (currentPageSet > 0) {
      setCurrentPageSet(currentPageSet - 1);
    }
  };

  const handlePlayAudio = (audioUrl) => {
    setCurrentAudioUrl(audioUrl);
  };
  const handleNextAudio = () => {
    if (currentAudioIndex < audioList.length - 1) {
      setCurrentAudioIndex(currentAudioIndex + 1);
      setCurrentAudioUrl(audioList[currentAudioIndex + 1]);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 flex space-x-8">
      <div className="w-1/4 border rounded-lg p-4 bg-white shadow-lg">
        <div ref={languagesRef}>
          {isLanguagesLoading ? <div>Loading languages...</div> :
            <div className="mb-6">
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Sort By Language</label>
              <select
                id="language"
                name="language"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="">All Languages</option>
                {languages.map(language => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
          }
        </div>

        <div ref={formatsRef}>
          {isFormatsLoading ? <div>Loading formats...</div> :
            <div className="mb-6">
              <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-2">Sort By Format</label>
              <select
                id="format"
                name="format"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
                onChange={(e) => setSelectedFormat(e.target.value)}
              >
                <option value="">All Formats</option>
                {formats.map(format => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </select>
            </div>
          }
        </div>

        <div className="mb-6">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Sort By Type</label>
          <select
            id="type"
            name="type"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-sm"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div ref={editionsRef} className="grid w-4/4 border grid-cols-1 gap-4 custom-scroll" style={{ maxHeight: '45vh', overflowY: 'auto', padding: '1rem 1rem 1rem 0' }}>
          {isEditionsLoading ? <div>Loading editions...</div> :
            filteredEditions.map(edition => (
              <div
                key={edition.identifier}
                className="bg-gray-100 rounded-lg shadow-md p-4 text-xs cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => handleEditionClick(edition.identifier)}
              >
                <div className="text-left text-[10px]">
                  <div className="flex justify-between mb-2">
                    <p className="font-bold text-sm">{edition.englishName}</p>
                    <h2 className="font-semibold text-sm">{edition.name}</h2>
                  </div>
                  <div className="text-gray-600">
                    <p>Language: <span>{edition.language}</span></p>
                    <p>Format: <span>{edition.format}</span></p>
                    <p>Type: <span>{edition.type}</span></p>
                    <p>Direction: <span>{edition.direction}</span></p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="w-3/4 border rounded-lg p-4 bg-white shadow-lg" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        {memoizedSelectedEditionData ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">Selected Edition Data</h2>
            <div className="space-y-4">
              {currentAyahs.map((ayah) => (
                <div key={ayah.number} className="p-4 bg-gray-100 rounded-lg shadow-inner">
                  <p className="font-semibold text-sm mb-2">Ayah {ayah.numberInSurah}:</p>
                  <p className="text-sm mb-2">{ayah.text}</p>
                  <p className="text-xs text-gray-500">Juz: {ayah.juz}, Manzil: {ayah.manzil}, Page: {ayah.page}, Ruku: {ayah.ruku}, Hizb Quarter: {ayah.hizbQuarter}, Sajda: {ayah.sajda ? "Yes" : "No"}</p>
                  {ayah.audio && (
                    <button
                      className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
                      onClick={() => handlePlayAudio(ayah.audio)}
                    >
                      Play Ayah Audio
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousPageSet}
                className={`mx-1 px-3 py-1 border rounded-md ${currentPageSet === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
                disabled={currentPageSet === 0}
              >
                Previous
              </button>
              <div className="flex space-x-1">
                {currentPageNumbers.map(number => (
                  <button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    className={`mx-1 px-3 py-1 border rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {number}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNextPageSet}
                className={`mx-1 px-3 py-1 border rounded-md ${currentPageSet === Math.floor(pageNumbers.length / pageNumbersPerSet) ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700'}`}
                disabled={currentPageSet === Math.floor(pageNumbers.length / pageNumbersPerSet)}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="text-gray-500 text-center">Select an edition to see its details.</div>
        )}
      </div>
      <CustomAudioPlayer url={currentAudioUrl} onEnded={handleNextAudio} />
    </div>
  );
};

export default Quran;
