import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../components/ProductImageGallery'

describe("testing product image gallery",()=>{
    it("should return null if product array is empty",()=>{
       const {container} = render(<ProductImageGallery imageUrls={[]}/>)
        expect(container).toBeEmptyDOMElement()
    })

    it("product image render with a correct url",()=>{
        const imgUrl :string [] =["image1","image2"]
        render(<ProductImageGallery imageUrls={imgUrl}/>)
        const image=screen.getAllByRole("img")
        expect(image).toHaveLength(2)

        imgUrl.forEach((img,index)=>{
          expect(image[index]).toHaveAttribute('src',img)
        })
     
     })
})