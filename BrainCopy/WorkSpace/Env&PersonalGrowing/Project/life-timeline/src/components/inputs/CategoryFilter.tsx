import React from 'react';

const categories = [
  'economic',
  'political',
  'tech',
  'social',
  'international',
  'environment',
];

interface CategoryFilterProps {
  selectedCategories: string[];
  onChange: (cats: string[]) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategories, onChange }) => {
  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      onChange(selectedCategories.filter(c => c !== cat));
    } else {
      onChange([...selectedCategories, cat]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(cat => (
        <button
          key={cat}
          type="button"
          onClick={() => toggleCategory(cat)}
          className={`px-3 py-1 rounded-lg text-sm border transition-colors ${
            selectedCategories.includes(cat)
              ? 'bg-accent/30 text-accent border-accent'
              : 'bg-primary/40 text-gray-300 border-white/20'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;