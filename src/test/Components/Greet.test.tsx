import Greet from '../../components/Greet'
import { render,screen } from '@testing-library/react'

describe("Greet",()=>{
    it("should render with the name when name is provided",()=>{
        render(<Greet name='selva'/>)
       const heading= screen.getByRole("heading")
       expect(heading).toBeInTheDocument()
       expect(heading).toHaveTextContent(/hello selva/i)

    })
    it("should render with the name when name is not provided",()=>{
        render(<Greet />)
       const button= screen.getByRole("button")
       expect(button).toBeInTheDocument()
       expect(button).toHaveTextContent(/login/i)

    })

    
})