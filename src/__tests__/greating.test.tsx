import {describe,it,expect, beforeEach} from 'vitest'
import {render, screen} from '@testing-library/react'
import { Greating } from '../components/greating'

describe('Greating', () => { 
    it("should render with username",()=>{
        render(<Greating name="Manuel" />)

        const title = screen.getByRole("heading");
        expect(title).toBeDefined()
        expect(title.innerText).toBe("Hello, Manuel")
    })
    it("should render without username",()=>{
        render(<Greating />)

        const title = screen.getByRole("heading");
        expect(title).toBeDefined()
        expect(title.innerText).toBe("Hello, Stranger")
    })
})