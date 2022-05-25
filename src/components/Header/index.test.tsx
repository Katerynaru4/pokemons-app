/**
 * @jest-enviroment jsdom
 */ 
 import React from 'react'
 import { render, unmountComponentAtNode } from 'react-dom'
 import { act } from 'react-dom/test-utils'
 import Header from './index'
 
 describe('Header', () => {
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
 
     it('render', () => {
         act(() => {
             render(<Header />, container);
         })
         expect(container?.innerHTML).toBeDefined();
     })

     it('render and return block wrapper', () => {
        act(() => {
            render(<Header />, container);
        })
        expect(container?.getElementsByClassName('wrapper').length).toBe(1);
    })
     
 })