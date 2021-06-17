import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { useItems } from '../../../hooks/useItems';
import { SearchBar } from '../../molecules/SearchBar';

import './styles.scss';

export function Header() {
    const { setSearch } = useItems();
    const [formSearch, setFormSearch] = useState('');
    const history = useHistory();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setSearch(formSearch);
        history.push({ pathname: '/' })
    }

    return (
        <header className="header-component">
            <SearchBar
                handleSubmit={handleSubmit}
                formSearch={formSearch}
                setFormSearch={setFormSearch}
            />
        </header>
    )
}