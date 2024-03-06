import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PRIVATE_KEY } from '../app/config.js'
import UserModel from '../model/userModel.js'

class UserController {
  async getCaseAll(ctx) {
    let caseData = await UserModel.getCase()
    ctx.body = { type: 'success', status: 200, data: caseData, message: '获取案例数据成功' }
  }
  async getCaseById(ctx) {
    let { pid } = ctx.params
    pid = parseInt(pid)
    const caseData = await UserModel.findCase(pid)
    ctx.body = { type: 'success', status: 200, data: caseData, message: '获取案例详情成功' }
  }
  async getNews(ctx) {
    let { type, num } = ctx.request.query
    type = parseInt(type)
    num = parseInt(num)
    const newsData = await UserModel.getNews(type, num)
    ctx.body = { type: 'success', status: 200, data: newsData, message: '获取新闻数据成功' }
  }
  async getNewsById(ctx) {
    let { pid } = ctx.params
    pid = parseInt(pid)
    const newsData = await UserModel.findNews(pid)
    ctx.body = { type: 'success', status: 200, data: newsData, message: '获取新闻详情成功' }
  }
  async getDataDictionaryAll(ctx) {
    const dataDictionaryData = await UserModel.getDataDictionary()
    ctx.body = {
      type: 'success',
      status: 200,
      data: dataDictionaryData,
      message: '获取字典数据成功'
    }
  }
  async getDataDictionaryByKey(ctx) {
    let { key } = ctx.request.query
    const dictionaryData = await UserModel.findDataDictionary(key)
    ctx.body = { type: 'success', status: 200, data: dictionaryData, message: '获取新闻数据成功' }
  }
  async getHonorAll(ctx) {
    const honorData = await UserModel.getHonor()
    ctx.body = { type: 'success', status: 200, data: honorData, message: '获取荣誉数据成功' }
  }
  async getEnterpriseAll(ctx) {
    const enterpriseData = await UserModel.getEnterprise()
    ctx.body = {
      type: 'success',
      status: 200,
      data: enterpriseData,
      message: '获取合作企业数据成功'
    }
  }
  async getTeamAll(ctx) {
    const teamData = await UserModel.getTeam()
    ctx.body = {
      type: 'success',
      status: 200,
      data: teamData,
      message: '获取团队数据成功'
    }
  }
  async getCourseAll(ctx) {
    const courseData = await UserModel.getCourse()
    ctx.body = {
      type: 'success',
      status: 200,
      data: courseData,
      message: '获取发展历程数据成功'
    }
  }
  async onLogin(ctx) {
    let { strAdmin, strPwd } = ctx.request.body
    const adminData = await UserModel.findAdmin(strAdmin)
    if (adminData.length === 1) {
      const compareResult = bcrypt.compareSync(strPwd, adminData[0].Password)
      if (compareResult) {
        const payload = {
          id: adminData[0].Id,
          username: adminData[0].LoginName,
          time: new Date().getTime(),
          timeout: 1000 * 60 * 60 * 48
        }
        const token = jwt.sign(payload, PRIVATE_KEY, {
          algorithm: 'RS256' // 指定算法
        })
        ctx.body = {
          type: 'success',
          status: 200,
          message: '登录成功',
          Ticket: `Bearer ${token}`,
          LoginName: adminData[0].LoginName
        }
      } else {
        ctx.body = { type: 'error', message: '用户名或密码不正确' }
      }
    } else {
      ctx.body = { type: 'error', message: '用户名不存在' }
    }
  }
}
export default new UserController()
