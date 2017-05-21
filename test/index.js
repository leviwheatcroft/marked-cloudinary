import markedCloudinary from '../lib'
import marked from 'marked'

const renderer = new marked.Renderer()
renderer.image = markedCloudinary('test')

describe('marked-cloudinary', () => {
  it('should render urls', (done) => {
    let output = marked(
      `![image alt](cloudinary_id "image title { width: 400, height: 300, crop: 'fill'}")`,
      { renderer }
    )
    output.should.eql('<p><img src="http://res.cloudinary.com/test/image/upload/c_fill,h_300,w_400/cloudinary_id" alt="image alt"> &quot;image title &quot;</p>')
    done()
  })
})
