import React, { useEffect, useLayoutEffect, useState } from 'react';
import PokemonCard from '../PokemonCard';
import Heading from '../Heading';
import Layout from '../Layout';
import s from './Pokedex.module.scss';
import uniqid from 'uniqid';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchAndSetPokemons, fetchAndSetPokemonsTypes } from '../../store/actions';

const Pokedex = () => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedType, setSelectedType] = useState<any>('')
    const pokemonsTypes = useSelector((state: RootState) => state.pokemonsTypes)
    const pokemons = useSelector((state: RootState) => state.pokemons)
    const dispatch: AppDispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(fetchAndSetPokemonsTypes())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchAndSetPokemons(searchValue, selectedType))
    }, [dispatch, searchValue, selectedType])

    useEffect(() => {
        console.log('Pokedex rerender')
    })
    
    return (
        <>
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
                                onChange={(e: any) => setSearchValue(e.target.value)}
                                placeholder="Find pokemon by name..."
                            />
                        </div>
                        <div className={s.filter}>

                            <select value={selectedType} onChange={(e: any) => { setSelectedType(e.target.value) }}>
                                <option value="">Type</option>
                                {pokemonsTypes.map((item: any) => <option key={uniqid()} value={item.url}>{item.name}</option>)}
                            </select>

                        </div>
                    </div>
                    <div className={s.cardWrap}>
                        {
                            pokemons.map((pokemon: any) => {
                                return (
                                    <PokemonCard
                                        key={uniqid()}
                                        pokemonName={pokemon.name}
                                    />
                                );
                            })}
                    </div>
                    <footer />
                </div>
            </Layout>
        </>
    );
};

export default Pokedex;
