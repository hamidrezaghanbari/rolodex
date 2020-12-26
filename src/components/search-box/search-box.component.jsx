import React from 'react'
import './search-box.styles.scss'

export const SearchBox = ({ placeholder, type, handleChange }) => (
    <input
        className="search-input"
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
    />

)
