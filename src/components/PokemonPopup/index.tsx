import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './PokemonCard.module.scss';
import Heading from '../Heading';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';
import uniqid from 'uniqid';
import useOutsideClick from '../../utils/hooks'
import { fetchAndSetPokemonDetailedData } from '../../store/actions';
import { AppDispatch, RootState } from '../../store/store';
import { characteristics } from '../../store/types';

interface IPokemonPopupProps {
  pokemonName: string,
  setPopupOpen: (value: boolean) => void
}

const PokemonPopup: React.FC<IPokemonPopupProps> = ({ pokemonName, setPopupOpen }) => {
  const dispatch: AppDispatch = useDispatch()

  const pokemonDetailedData = useSelector((state: RootState) => state.pokemonDetailedData)

  const ref = useRef(null)
  useOutsideClick([ref], () => setPopupOpen(false));

  useEffect(() => {
    dispatch(fetchAndSetPokemonDetailedData(pokemonName))
  }, [dispatch, pokemonName])


  return (
    <div className={s.popup} ref={ref}>
      {(Object.keys(pokemonDetailedData).length !== 0) &&
        <>
          <div className={s.pictureWrap}>
            <img src={pokemonDetailedData.sprites.front_default} alt={`${pokemonDetailedData.name}`} />
          </div>
          <div className={s.infoWrap}>
            <Heading className={s.titleName} type="s">
              {toCapitalizeFirstLetter(pokemonDetailedData.name)}
            </Heading>
            <div className={s.info}>
              <div className={s.statWrap}>
                Stats
                {pokemonDetailedData.stats.map((item: characteristics) => (
                  <div key={uniqid()} className={s.statItem}>
                    {item.stat.name}
                  </div>
                ))
                }
              </div>
              <div className={s.statWrap}>
                Moves
                {pokemonDetailedData.moves.map((item: characteristics) => (
                  <div key={uniqid()} className={s.statItem}>
                    {item.move.name}
                  </div>
                ))
                }
              </div>

            </div>
          </div>
        </>
      }
    </div>)
};

export default React.memo(PokemonPopup);



