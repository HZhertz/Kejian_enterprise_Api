import crypto from 'crypto'
import multer from '@koa/multer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/', req.body.folder))
  },

  filename: function (req, file, cb) {
    const hash = crypto.createHash('sha256')
    hash.update(file.originalname)
    const hashedFilename = hash.digest('hex')
    cb(null, hashedFilename + path.extname(file.originalname))
  }
})

const limits = {
  fields: 6,
  fileSize: 6 * 1024 * 1024,
  files: 1
}

const upload = multer({ storage: storage, limits })

export default upload
