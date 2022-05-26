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

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const [pokemonName, setSelectedPokemonName, setPopupOpen] = ['ditto', () => { }, () => { }];

    it('render', () => {
        act(() => {
            render(<PokemonCard {...{ pokemonName, setSelectedPokemonName, setPopupOpen }} />, container);
        })

        expect(container?.innerHTML).toBeDefined();
    })
    it('render with right content', () => {
        act(() => {
            render(<PokemonCard {...{ pokemonName, setSelectedPokemonName, setPopupOpen }} />, container);
        })

        expect(container?.textContent).toContain('Bulbasaur');
    })
    it('render with root block', () => {
        act(() => {
            render(<PokemonCard {...{ pokemonName, setSelectedPokemonName, setPopupOpen }} />, container);
        })

        expect(container?.getElementsByClassName('wrap').length).toBe(1);
    })

})

