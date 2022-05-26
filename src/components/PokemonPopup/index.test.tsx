/**
 * @jest-enviroment jsdom
 */ 
 import React from 'react'
 import { render, unmountComponentAtNode } from 'react-dom'
 import { act } from 'react-dom/test-utils'
 import PokemonCard from './index'
 
 describe('PokemonCard', () => {
     let container: Element | null = null;
 
     beforeEach(() => {
         container = window.document.createElement('div')
         window.document.body.appendChild(container)
     })
 
     afterEach(() => {
         if (container != null) {
             unmountComponentAtNode(container)
             container.remove()
             container = null
         }
     })
 
     const pokemon = {
        "name_clean": "bulbasaur",
        "abilities": [
          "overgrow",
          "chlorophyll"
        ],
        "stats": {
          "hp": 45,
          "attack": 49,
          "defense": 49,
          "special-attack": 65,
          "special-defense": 65,
          "speed": 45
        },
        "types": [
          "grass",
          "poison"
        ],
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "name": "bulbasaur",
        "base_experience": 64,
        "height": 7,
        "id": 1,
        "is_default": true,
        "order": 1,
        "weight": 69
      }

     it('render', () => {
         act(() => {
             render(<PokemonCard pokemon = { pokemon } onClick={() => {}}/>, container);
         })

         expect(container?.innerHTML).toBeDefined();
     })
     it('render with right content', () => {
        act(() => {
            render(<PokemonCard pokemon = { pokemon } onClick={() => {}}/>, container);
        })

        expect(container?.textContent).toContain('Bulbasaur');
    })
    it('render with root block', () => {
        act(() => {
            render(<PokemonCard pokemon = { pokemon } onClick={() => {}}/>, container);
        })
        
        expect(container?.getElementsByClassName('wrap').length).toBe(1);
    })

 })

 