import jwt from 'jsonwebtoken'
import { PUBLIC_KEY } from '../app/config.js'

async function check(ctx, next) {
  if (!ctx.path.startsWith('/Admin')) {
    await next()
  } else {
    try {
      const token = ctx.header.authorization.replace('Bearer ', '')
      if (token) {
        const tokenItem = jwt.verify(token, PUBLIC_KEY, {
          algorithms: ['RS256']
        })
        ctx.state.user = tokenItem
        const { time, timeout } = tokenItem
        let NewTime = new Date().getTime()
        if (NewTime - time <= timeout) {
          await next()
        } else {
          ctx.body = {
            type: 'error',
            status: 405,
            message: 'token已过期'
          }
        }
      } else {
        ctx.body = {
          type: 'error',
          status: 405,
          message: '未携带token'
        }
      }
    } catch (error) {
      ctx.body = {
        type: 'error',
        status: 405,
        message: error.message
      }
    }
  }
}
export default check
