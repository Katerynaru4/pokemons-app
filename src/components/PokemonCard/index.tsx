import React from 'react';

import s from './PokemonCard.module.scss';
import Heading from '../Heading';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';

interface IPokemonCardProps {
  pokemonName: string,
  setSelectedPokemonName: (value: string) => void,
  setPopupOpen: (value: boolean) => void
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemonName, setSelectedPokemonName, setPopupOpen }) => {
  return (
    <div className={s.wrap} role="presentation">
      <Heading type='s'>{toCapitalizeFirstLetter(pokemonName)}</Heading>
      <button className={s.button} onClick={() => {
        setPopupOpen(true)
        setSelectedPokemonName(pokemonName)
      }
      }>Look at details...</button>

    </div>
  );
};


export default React.memo(PokemonCard);



