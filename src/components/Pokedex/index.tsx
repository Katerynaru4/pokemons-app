import React, { useEffect, useLayoutEffect, useState } from 'react';
import PokemonCard from '../PokemonCard';
import Heading from '../Heading';
import Layout from '../Layout';
import s from './Pokedex.module.scss';

type IPokemons = {
    data: any
}


const Pokedex = () => {
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState<any>(null)
    const [selectedType, setSelectedType] = useState<any>('Type')
    const [types, setTypes] = useState<any>([])


    useLayoutEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
        .then(response => response.json())
        .then(data => setTypes(data.results))

    }
        , [])


    useEffect(() => {
        if (selectedType !== 'Type') {
            const selectedTypeUrl = types.find((item: any) => item.name === selectedType).url

            fetch(selectedTypeUrl)
                .then(response => response.json())
                .then(data => setData(data.pokemon.map((item: any) => item.pokemon).filter((item: any) => item.name.includes(searchValue))))
        } else {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=300&offset=0")
                .then(response => response.json())
                .then(data => setData(data.results.filter((item: any) => item.name.includes(searchValue))))
        }

    }, [selectedType, searchValue])



    console.log(data)

    return (
        <>
            <Layout className={s.root}>
                <div className={s.wrapper}>
                    <Heading type="l" className={s.title}>
                        {data && `${data.length} Pokemons for you to choose your favorite`}
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

                            <select value={selectedType} onChange={(e: any) => setSelectedType(e.target.value)}>
                                <option value="Type">Type</option>
                                {types.map((item: any) => <option value={item.name}>{item.name}</option>)}
                            </select>

                        </div>
                    </div>
                    <div className={s.cardWrap}>
                        {
                            data &&
                            data.map((pokemon: any) => {
                                return (
                                    <PokemonCard
                                        key={pokemon.url}
                                        pokemon={pokemon}
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
