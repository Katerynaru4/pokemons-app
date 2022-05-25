// import React from 'react';
// import { pokemonsRequest } from '../../interface/pokemons';
// import Heading from '../../components/Heading';
// import useData from '../../hook/getData';
// import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';
// import s from './Pokemon.module.scss';

// export interface PokemonProps {
//   name: string;
// }

// const Pokemon: React.FC<PokemonProps> = ({ name }) => {
//   const { data, isLoading, isError } = useData<pokemonsRequest>('getPokemons', { name });

//   if (isError) {
//     return <div>Something wrong!</div>;
//   }
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   const pokemon = data;
//   if (!pokemon) {
//     return <div>Pokemon not found!</div>;
//   }

//   return (
//     <div className={s.root}>
//       <div className={s.cardWrap}>
//         <div className={s.pokemonImage}>
//           <img src={pokemon.img} alt="" />
//           <div className={s.labels}>
//             {pokemon.types.map((type) => {
//               return (
//                 <span key={type} className={s.label}>
//                   {type}
//                 </span>
//               );
//             })}
//           </div>
//         </div>
//         <div className={s.info}>
//           <div className={s.title}>
//             <Heading type="m">{toCapitalizeFirstLetter(pokemon.name)}</Heading>
//             <Heading type="s">Generation 1</Heading>
//             <div className={s.id}>{pokemon.id}</div>
//           </div>
//           <div className={s['abilities-box']}>
//             <p>Abilities</p>
//             <p>{`${pokemon.abilities[0]}-${pokemon.abilities[1]}`}</p>
//           </div>
//           <div className={s['points-box']}>
//             <div className={s.point}>
//               <p>Healthy Points</p>
//               <strong>{pokemon.stats.hp}</strong>
//               <span style={{ width: `${pokemon.stats.hp * 0.14}px` }} />
//             </div>
//             <div className={s.point}>
//               <p>Experience</p>
//               <strong>{pokemon.base_experience}</strong>
//               <span style={{ width: `${pokemon.base_experience * 0.14}px` }} />
//             </div>
//           </div>
//           <div className={s['stats-box']}>
//             <div className={s['stats-item']}>
//               <div className={s['stats-number']}>{pokemon.stats.defense}</div>
//               <div className={s['stats-title']}>Defense</div>
//             </div>
//             <div className={s['stats-item']}>
//               <div className={s['stats-number']}>{pokemon.stats.attack}</div>
//               <div className={s['stats-title']}>Attack</div>
//             </div>
//             <div className={s['stats-item']}>
//               <div className={s['stats-number']}>{pokemon.stats['special-attack']}</div>
//               <div className={s['stats-title']}>Sp Attack</div>
//             </div>
//             <div className={s['stats-item']}>
//               <div className={s['stats-number']}>{pokemon.stats['special-defense']}</div>
//               <div className={s['stats-title']}>Sp Defense</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pokemon;
