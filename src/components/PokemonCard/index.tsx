import React, { useEffect, useRef, useState } from 'react';
import Heading from '../Heading';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';
import s from './PokemonCard.module.scss';
import uniqid from 'uniqid';
import useOutsideClick from '../../utils/hooks'

interface PokemonProps {
  pokemon: {
    name: string;
    stats: {
      attack: number;
      defense: number;
    };
    types: Array<string>;
    img: string;
    id: number;
  };
  onClick: () => void;
}

const PokemonCard: React.FC<any> = ({ pokemon }) => {
  const ref = useRef(null)
  const [popupData, setPopupData] = useState<any>(null)
  const [isPopupOpen, setPopupOpen] = useState<any>(false);

  useOutsideClick([ref], () => setPopupOpen(false));

  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((data) => data.json())
      .then((data) => {
        setPopupData(data);
      }
      )
  }, [])

  return (
    <>
      <div className={s.wrap} role="presentation">
        <Heading type='s'>{toCapitalizeFirstLetter(pokemon.name)}</Heading>
        <button className={s.button} onClick={() => setPopupOpen(true)}>Look at details...</button>

      </div>
      {isPopupOpen &&
        (
          <div className={s.popup} ref={ref}>
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

          </div>)
      }

    </>
  );
};

export default PokemonCard;



