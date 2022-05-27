import React, { useEffect, useLayoutEffect, useState } from 'react';
import uniqid from 'uniqid';

import s from './Pokedex.module.scss';
import PokemonCard from '../PokemonCard';
import PokemonPopup from '../PokemonPopup';
import Heading from '../Heading';
import Layout from '../Layout';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndSetPokemons, fetchAndSetPokemonsTypes, setPokemonDetailedData } from '../../store/actions';
import { IPokemon, IPokemonDetailedData } from '../../store/types';

const Pokedex: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()

    const pokemonsTypes = useSelector((state: RootState) => state.pokemonsTypes)
    const pokemons = useSelector((state: RootState) => state.pokemons)

    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedType, setSelectedType] = useState<string>('')
    const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
    const [selectedPokemonName, setSelectedPokemonName] = useState<string>('');

    useLayoutEffect(() => {
        dispatch(fetchAndSetPokemonsTypes())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchAndSetPokemons(searchValue, selectedType))
    }, [dispatch, searchValue, selectedType])

    useEffect(() => {
        if (!isPopupOpen) {
            dispatch(setPokemonDetailedData({} as IPokemonDetailedData))
        }
    }, [dispatch, isPopupOpen])

    return (
        <Layout className={s.root}>
            <div className={s.wrapper}>
                <Heading type="l" className={s.title}>
                    {`${pokemons.length} Pokemons was finded...`}
                </Heading>
                <div className={s.filters}>
                    <div className={s.searchInput}>
                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                            placeholder="Find pokemon by name..."
                        />
                    </div>
                    <div className={s.filter}>

                        <select value={selectedType} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setSelectedType(e.target.value) }}>
                            <option value="">Type</option>
                            {pokemonsTypes.map((item: IPokemon) => <option key={uniqid()} value={item.url}>{item.name}</option>)}
                        </select>

                    </div>
                </div>
                <div className={s.cardWrap}>
                    {
                        pokemons.map((pokemon: IPokemon) => {
                            return (
                                <PokemonCard
                                    key={uniqid()}
                                    {...{ pokemonName: pokemon.name, setSelectedPokemonName, setPopupOpen }}
                                />
                            );
                        })}
                </div>
                <footer />
            </div>
            {isPopupOpen &&
                <PokemonPopup {...{ pokemonName: selectedPokemonName, setPopupOpen, isPopupOpen }} />}
        </Layout>
    );
};

export default Pokedex;
