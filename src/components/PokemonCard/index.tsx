import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Heading from '../Heading';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';
import s from './PokemonCard.module.scss';
import uniqid from 'uniqid';
import useOutsideClick from '../../utils/hooks'
import { fetchAndSetPokemonDetailedData } from '../../store/actions';
import { AppDispatch, RootState } from '../../store/store';



const PokemonCard: React.FC<any> = ({ pokemon }) => {
  const ref = useRef(null)
  const [popupData, setPopupData] = useState<any>({})
  const [isPopupOpen, setPopupOpen] = useState<any>(false);
  const [selectedPokemonName, setSelectedPokemonName] = useState('')
  const dispatch: AppDispatch = useDispatch()
  useOutsideClick([ref], () => setPopupOpen(false));

  const pokemonDetailedData = useSelector((state: RootState) => state.pokemonDetailedData)

  useEffect(() => {
    dispatch(fetchAndSetPokemonDetailedData(selectedPokemonName))
  }, [dispatch, selectedPokemonName])

  // useEffect(() => {
  //   console.log('setPopupData')

  //   if (pokemon.name !== '' ) {
  //     setPopupData(pokemonDetailedData)
  //     setPopupOpen(true)
  //   }
  // }, [dispatch, pokemonDetailedData, selectedPokemonName])

  return (
    <>
      <div className={s.wrap} role="presentation">
        <Heading type='s'>{toCapitalizeFirstLetter(pokemon.name)}</Heading>
        <button className={s.button} onClick={() => {
          setSelectedPokemonName(pokemon.name)
          setPopupData(pokemonDetailedData)
          setPopupOpen(true)
        }

        }>Look at details...</button>

      </div>
      {isPopupOpen &&
        (
          <div className={s.popup} ref={ref}>

            {(Object.keys(popupData).length !== 0) &&
              <>
                <div className={s.pictureWrap}>
                  <img src={popupData.sprites.front_default} alt={`${popupData.name}`} />
                </div>
                <div className={s.infoWrap}>

                  <Heading className={s.titleName} type="s">
                    {toCapitalizeFirstLetter(popupData.name)}
                  </Heading>

                  <div className={s.info}>

                    <div className={s.statWrap}>
                      Stats
                      {popupData.stats.map((item: any) => (
                        <div key={uniqid()} className={s.statItem}>
                          {item.stat.name}
                        </div>
                      ))
                      }
                    </div>

                    <div className={s.statWrap}>
                      Moves
                      {popupData.moves.map((item: any) => (
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
      }

    </>
  );
};

export default PokemonCard;



