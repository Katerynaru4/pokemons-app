/**
 * @jest-enviroment jsdom
 */
 import React from 'react'
 import { render, unmountComponentAtNode } from 'react-dom'
 import { act } from 'react-dom/test-utils'
 import PokemonPopup from './index'
 
 describe('PokemonPopup', () => {
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
 
     // eslint-disable-next-line @typescript-eslint/no-empty-function
     const [pokemonName, setPopupOpen] = ['ditto', () => { }];
 
     it('render', () => {
         act(() => {
             render(<PokemonPopup {...{ pokemonName, setPopupOpen }} />, container);
         })
 
         expect(container?.innerHTML).toBeDefined();
     })
     it('render with right content', () => {
         act(() => {
             render(<PokemonPopup {...{ pokemonName, setPopupOpen }} />, container);
         })
 
         expect(container?.textContent).toContain('Bulbasaur');
     })
     it('render with root block', () => {
         act(() => {
             render(<PokemonPopup {...{ pokemonName, setPopupOpen }} />, container);
         })
 
         expect(container?.getElementsByClassName('wrap').length).toBe(1);
     })
 
 })
 
 