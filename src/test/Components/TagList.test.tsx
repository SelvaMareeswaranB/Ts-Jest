import { render, screen, waitFor } from '@testing-library/react'
import TagList from '../../components/TagList'

describe('TagList', ()=>{
    it("should render the list item",async()=>{
        render(<TagList/>)
    //    await waitFor(()=>{
    //         const listItem=screen.getAllByRole('listitem')
    //         expect(listItem.length).toBeGreaterThan(0)
    //     })

        const list=await screen.findAllByRole('listitem')
        expect(list.length).toBeGreaterThan(0)
  
    })
})