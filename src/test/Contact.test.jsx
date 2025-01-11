import { render , screen } from '@testing-library/react'
import {it, describe  } from 'vitest'
import Contact from '../components/Contact'
describe('Contact', () => {
    it('Contact render', () => {
        render(<Contact/>);
        screen.debug();
        
    })
    
})