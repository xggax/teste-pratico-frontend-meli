import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../../../components/molecules/SearchBar';

jest.mock('react-router-dom', () => '/');

describe('Search Bar Component', () => {
    it('Search Bar renders correctly', () => {
        const handleSubmit = jest.fn((value) => { })
        const setFormSearch = jest.fn((value) => { })

        const { queryByPlaceholderText } = render(
            <SearchBar
                handleSubmit={handleSubmit}
                formSearch='Apple'
                setFormSearch={setFormSearch}
            />
        )

        const searchInput = queryByPlaceholderText('Nunca dejes de buscar')

        fireEvent.change(searchInput, { target: { value: 'test' } })

        expect(searchInput.value).toBe('test')
    });
});