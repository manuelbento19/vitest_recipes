/* eslint-disable @typescript-eslint/no-explicit-any */
import {describe,it,expect, vi, afterEach} from 'vitest'
import {act, render, screen} from '@testing-library/react'
import { UserDetails } from '../components/userDetails'

const fakeData = {
    id: 2,
    name: "Manuel Bento",
    email: "manuelbento@developer.com",
    address: "Luanda. Cazenga"
}

describe('UserDetails', () => {
    const mockedFetch = vi.spyOn(globalThis,"fetch")

    afterEach(()=>{
        vi.restoreAllMocks()
    })

    it("should render user data",async()=>{
        mockedFetch.mockReturnValueOnce({
            ok: true,
            json: () => Promise.resolve(fakeData)
        } as any)
        
        await act(() => render(<UserDetails id={2} />))
        
        expect(screen.getByRole("heading").innerHTML).toBe(fakeData.name)
        expect(screen.getByRole("strong").innerHTML).toBe(fakeData.email)
    })
})