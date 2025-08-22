'use client';

import { useState, useEffect } from "react";
import { NewsItem } from "./newsData";
import { contentfulService } from "@/lib/contentful";

interface NewsSearchBarProps {
  newsList: NewsItem[];
  onSearchResults: (results: NewsItem[]) => void;
  ministryId?: string;
}

export default function NewsSearchBar({ newsList, onSearchResults, ministryId }: NewsSearchBarProps) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<{title: string, slug: string}[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // 🔹 Fetch suggestions only (doesn't affect results grid)
  useEffect(() => {
    let active = true;

    const fetchSuggestions = async () => {
      if (!query.trim() || !ministryId) {
        if (active) setSuggestions([]);
        return;
      }

      try {
        const results = await contentfulService.getBlogTitlesAndSlugsByMinistryId(ministryId);
        if (!active) return;

        const filtered = results.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered);
      } catch (error) {
        if (active) setSuggestions([]);
        console.error("Error fetching search suggestions:", error);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);

    return () => {
      active = false;
      clearTimeout(debounceTimer);
    };
  }, [query, ministryId]);

  // 🔹 Reset grid results when input is cleared
  useEffect(() => {
    if (!query.trim()) {
      onSearchResults(newsList); 
    }
  }, [query, newsList, onSearchResults]);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) {
      onSearchResults(newsList);
      return;
    }

    try {
      setIsSearching(true);
      const results = await contentfulService.getBlogTitlesAndSlugsByMinistryId(ministryId || '');
      const matchedTitles = results
        .filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.slug.toLowerCase().includes(query.toLowerCase())
        )
        .map(item => item.title);
      
      const filteredResults = newsList.filter(item => 
        matchedTitles.includes(item.title)
      );
      
      onSearchResults(filteredResults);
    } catch (error) {
      console.error('Error performing search:', error);
      const q = query.toLowerCase();
      const results = newsList.filter(
        item =>
          item.title.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q))
      );
      onSearchResults(results);
    } finally {
      setIsSearching(false);
      setShowSuggestions(false);
    }
  }

  // 🔹 Clicking a suggestion only fills input, does NOT trigger results
  function handleSuggestionClick(title: string) {
    setQuery(title);
    setShowSuggestions(false);
  }

  return (
    <div className="w-full flex flex-col items-center py-8 px-2 bg-white relative">
      <form className="flex w-full max-w-2xl" onSubmit={handleSearch} autoComplete="off">
        <div className="relative w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Search news..."
            className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={isSearching}
          />
          {isSearching && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-r-lg hover:bg-green-700 transition-colors disabled:opacity-50"
          disabled={isSearching}
        >
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-white border border-gray-200 rounded-b-lg shadow-lg z-10 mt-1">
          {suggestions.map((item, index) => (
            <div
              key={`${item.slug}-${index}`}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onMouseDown={() => handleSuggestionClick(item.title)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
