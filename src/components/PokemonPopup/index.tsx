import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Heading from '../Heading';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';
import s from './PokemonCard.module.scss';
import uniqid from 'uniqid';
import useOutsideClick from '../../utils/hooks'
import { fetchAndSetPokemonDetailedData, setPokemonDetailedData } from '../../store/actions';
import { AppDispatch, RootState } from '../../store/store';
import {IPokemonDetailedData} from '../../store/reducer';


const PokemonCard: React.FC<any> = React.memo(({pokemonName}) => {
  const ref = useRef(null)
  const [isPopupOpen, setPopupOpen] = useState<any>(false);
  const dispatch: AppDispatch = useDispatch()
  useOutsideClick([ref], () => setPopupOpen(false));

  const pokemonDetailedData = useSelector((state: RootState) => state.pokemonDetailedData)

  useEffect(() => {
    if (isPopupOpen) {
          dispatch(fetchAndSetPokemonDetailedData(pokemonName))
    } else {
      dispatch(setPokemonDetailedData({} as IPokemonDetailedData))
    }
    
  }, [dispatch, pokemonName, isPopupOpen])

  // useEffect(() => {
  //   console.log('setPopupData')

  //   if (pokemonName !== '' ) {
  //     setPopupData(pokemonDetailedData)
  //     setPopupOpen(true)
  //   }
  // }, [dispatch, pokemonDetailedData, selectedPokemonName])
  useEffect(() => {
    console.log('PokemonCard rerender')
})
  return (
    <>
      <div className={s.wrap} role="presentation">
        <Heading type='s'>{toCapitalizeFirstLetter(pokemonName)}</Heading>
        <button className={s.button} onClick={() => {
          // setSelectedPokemonName(pokemonName)
          // setPopupData(pokemonDetailedData)
          setPopupOpen(true)
        }

        }>Look at details...</button>

      </div>
      {isPopupOpen &&
        (
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
                      {pokemonDetailedData.stats.map((item: any) => (
                        <div key={uniqid()} className={s.statItem}>
                          {item.stat.name}
                        </div>
                      ))
                      }
                    </div>

                    <div className={s.statWrap}>
                      Moves
                      {pokemonDetailedData.moves.map((item: any) => (
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
});

export default PokemonCard;



