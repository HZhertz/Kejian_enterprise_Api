// 导入koa
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import Cors from 'koa2-cors'
import checkToken from './middleware/checkToken.js'
import Static from 'koa-static'
import path from 'path'
import { fileURLToPath } from 'url'

const app = new Koa()
app.use(bodyParser())

app.use(Cors())

app.use(checkToken)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(Static(path.join(__dirname, './public')))

import userRouter from './router/userRouter.js'
app.use(userRouter.routes())
import adminRouter from './router/adminRouter.js'
app.use(adminRouter.routes())

app.listen(3007, () => {
  console.log('server runing at http://127.0.0.1:3007')
})
