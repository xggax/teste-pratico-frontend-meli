import { Dispatch, FormEvent, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/input";

import logo_ml from '../../../assets/logo_ml.png';
import searchImg from '../../../assets/ic_search.png';

import "./styles.scss";

interface SearchBarProps {
    handleSubmit: (event: FormEvent<Element>) => void;
    formSearch: string;
    setFormSearch: Dispatch<SetStateAction<string>>
}

export function SearchBar({ handleSubmit, formSearch, setFormSearch }: SearchBarProps) {
    return (
        <div className="search-bar">
            <Link to={"/"}>
                <img className="logo" src={logo_ml} alt="meli" />
            </Link>
            <form onSubmit={handleSubmit}>
                <Input
                    className="search-input"
                    value={formSearch}
                    name="search"
                    type="text"
                    autoFocus
                    onChange={event => setFormSearch(event.target.value)}
                    placeholder="Nunca dejes de buscar"
                />
                <Button type="submit"><img src={searchImg} alt="search button" /></Button>
            </form>
        </div>
    )
}