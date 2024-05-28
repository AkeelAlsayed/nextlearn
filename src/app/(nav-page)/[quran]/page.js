"use client";
import React, { useEffect, useState } from 'react';
import { fetchEditions } from "@/app/pages/api/editions";
import { fetchLanguages } from "@/app/pages/api/languages";
import { fetchFormats } from "@/app/pages/api/formats";
import { fetchEditionsByType } from "@/app/pages/api/editionsByType"; // Import fetchEditionsByType
import Link from 'next/link';

const Quran = () => {
  // State variables
  const [editions, setEditions] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [formats, setFormats] = useState([]);
  const [types, setTypes] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const editionsData = await fetchEditions();
        const languagesData = await fetchLanguages();
        const formatsData = await fetchFormats();
        const typesData = ["tafsir", "translation", "quran", "transliteration", "versebyverse"]; // Hardcoded types

        setEditions(editionsData.data);
        setLanguages(languagesData.data);
        setFormats(formatsData.data);
        setTypes(typesData);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter editions based on selected language, format, and type
  const filteredEditions = editions.filter(edition => {
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

  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* Menu */}
      <div className="w-1/4 mr-4 custom-scroll max-h-screen overflow-auto"> {/* Add custom-scroll class */}
        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Sort By Language</label>
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

        <div className="mb-4">
          <label htmlFor="format" className="block text-sm font-medium text-gray-700">Sort By Format</label>
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

        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Sort By Type</label>
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

        {/* Quran Editions */}
        <div className="grid grid-cols-1 gap-4">
          {/* Map over filtered editions */}
          {filteredEditions.map(edition => (
            <div key={edition.identifier} className="bg-white rounded-lg shadow-md p-2 text-xs mb-1">
              <Link href={`/editions/${edition.identifier}`}>
                <div className="text-left text-[10px]">
                  <div className="flex justify-between mb-1">
                    <p className="font-bold">{edition.englishName}</p>
                    <h2 className="font-semibold">{edition.name}</h2>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <p>Language: <span>{edition.language}</span></p>
                    <p>Format: <span>{edition.format}</span></p>
                    <p>Type: <span>{edition.type}</span></p>
                    <p>Direction: <span>{edition.direction}</span></p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Quran;
