import { v2 as cloudinary } from 'cloudinary'
import { parse } from 'hjson'
import unescape from 'lodash.unescape'

/**
 * ## Anonymous default export
 * A wrapper around the renderer to allow instantiation.
 * The only option which needs to be passed is `cloud_name`. Other options may
 * be passed to cloudinary config like `secure: true`
 *
 * @param {Object|String} opts cloud_name as string or options hash
 */
export default function (opts) {
  if (typeof opts === 'string') opts = { cloud_name: opts }
  cloudinary.config(opts)
  return (href, title, alt) => {
    let params = /\{.*\}/.exec(title)
    if (params) {
      title = title.replace(/\{.*\}/, '')
      params = params[0]
      // see https://github.com/hjson/hjson-js/issues/13
      params = unescape(params).replace(/'/g, '"')
      href = cloudinary.url(href, parse(params))
    }
    title = title ? ` &quot;${title}&quot;` : ''
    return `<img src="${href}" alt="${alt}">${title}`
  }
}
