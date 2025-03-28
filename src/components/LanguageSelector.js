import React from 'react';
const LanguageSelector = ({ label, selectedLanguage, onChange, options }) => {
  return (
    <div className="language-selector">
      <label>
        {label}:
        <select value={selectedLanguage} onChange={(e) => onChange(e.target.value)}>
          {options.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
export default LanguageSelector;
