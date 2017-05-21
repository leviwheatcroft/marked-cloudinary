# marked-cloudinary

![nodei.co](https://nodei.co/npm/marked-cloudinary.png?downloads=true&downloadRank=true&stars=true)

![npm](https://img.shields.io/npm/v/marked-cloudinary.svg)

![github-issues](https://img.shields.io/github/issues/leviwheatcroft/marked-cloudinary.svg)

![stars](https://img.shields.io/github/stars/leviwheatcroft/marked-cloudinary.svg)

![forks](https://img.shields.io/github/forks/leviwheatcroft/marked-cloudinary.svg)

[marked](https://www.npmjs.com/package/marked) / [cloudinary](http://cloudinary.com/)
renderer to generate cloudinary urls.

## install

`npm i --save marked-cloudinary`

## usage

```javascript
import markedCloudinary from 'markedCloudinary'
import marked from 'marked'

const renderer = new marked.Renderer()
renderer.image = markedCloudinary('my-cloud-name')

marked(
  '![image alt](cloudinary_id "image title { width: 400, height: 300, crop: \'fill\'}")',
  { renderer }
)
// <img src="http://res.cloudinary.com/my-cloud-name/image/upload/c_fill,h_300,w_400/v1/cloudinary_id" alt="image alt"> "image title"
```

## quotes

The example above shows a problem you run into if trying to declare strings in
js. The escaped quotes will work fine in this case.

In a markdown file, you can just use single quotes for string parameters.

## compatibility

`dist/index.js` should be fully compatible with node 6

## Author

Levi Wheatcroft <levi@wht.cr>

## Contributing

Contributions welcome; Please submit all pull requests against the master
branch.

## License

[MIT](http://opensource.org/licenses/MIT)
