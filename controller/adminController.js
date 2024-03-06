import path from 'path'
import bcrypt from 'bcryptjs'
import AdminModel from '../model/adminModel.js'
import UserModel from '../model/userModel.js'

class AdminController {
  async getUserAll(ctx) {
    let userData = await AdminModel.getUser()
    ctx.body = { type: 'success', status: 200, data: userData, message: '获取用户数据成功' }
  }
  async createUser(ctx) {
    let { LoginName, Password, IsAction, CreateTime } = ctx.request.body
    const userArr = await UserModel.findAdmin(LoginName)
    if (userArr.length > 0) {
      ctx.body = { type: 'error', message: '用户名被占用，请更换其他用户名！' }
    } else {
      Password = bcrypt.hashSync(Password, bcrypt.genSaltSync(10))
      CreateTime = new Date(CreateTime).toISOString().slice(0, 19).replace('T', ' ')
      let insertResult = await AdminModel.insertUser({ LoginName, Password, IsAction, CreateTime })
      if (insertResult.affectedRows === 1) {
        ctx.body = {
          type: 'success',
          status: 200,
          message: '新增用户成功'
        }
      } else {
        ctx.body = { type: 'error', message: '插入失败！' }
      }
    }
  }
  async modifiedUser(ctx) {
    let { Id, LoginName, Password, IsAction } = ctx.request.body
    Password = bcrypt.hashSync(Password, bcrypt.genSaltSync(10))
    IsAction = IsAction ? 1 : 0
    const updateResult = await AdminModel.updateUserInfo(Id, {
      LoginName,
      Password,
      IsAction
    })
    if (updateResult.changedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '更新信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '更新失败！' }
    }
  }
  async deleteUser(ctx) {
    let { id } = ctx.request.query
    id = parseInt(id)
    const deleteResult = await AdminModel.deleteUserInfo(id)
    if (deleteResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '删除用户信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '删除失败！' }
    }
  }
  async createNews(ctx) {
    let { Title, Img, Type, Content, CreateTime } = ctx.request.body
    CreateTime = new Date(CreateTime).toISOString().slice(0, 19).replace('T', ' ')
    let insertResult = await AdminModel.insertNews({ Title, Img, Type, Content, CreateTime })
    if (insertResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '新增新闻资讯成功'
      }
    } else {
      ctx.body = { type: 'error', message: '插入失败！' }
    }
  }
  async modifiedNews(ctx) {
    let { Id, Title, Img, Type, Content } = ctx.request.body
    const updateResult = await AdminModel.updateNewsInfo(Id, {
      Title,
      Img,
      Type,
      Content
    })
    if (updateResult.changedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '更新信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '更新失败！' }
    }
  }
  async deleteNews(ctx) {
    let { id } = ctx.request.query
    id = parseInt(id)
    const deleteResult = await AdminModel.deleteNewsInfo(id)
    if (deleteResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '删除新闻信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '删除失败！' }
    }
  }
  async createCase(ctx) {
    let { Img, Title, Content, CreateTime } = ctx.request.body
    CreateTime = new Date(CreateTime).toISOString().slice(0, 19).replace('T', ' ')
    let insertResult = await AdminModel.insertCase({ Img, Title, Content, CreateTime })
    if (insertResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '新增案例成功'
      }
    } else {
      ctx.body = { type: 'error', message: '插入失败！' }
    }
  }
  async modifiedCase(ctx) {
    let { Id, Img, Title, Content } = ctx.request.body
    const updateResult = await AdminModel.updateCaseInfo(Id, {
      Img,
      Title,
      Content
    })
    if (updateResult.changedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '更新案例信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '更新失败！' }
    }
  }
  async deleteCase(ctx) {
    let { id } = ctx.request.query
    id = parseInt(id)
    const deleteResult = await AdminModel.deleteCaseInfo(id)
    if (deleteResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '删除案例信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '删除失败！' }
    }
  }
  async createTeam(ctx) {
    let { Img, Remark, CreateTime } = ctx.request.body
    CreateTime = new Date(CreateTime).toISOString().slice(0, 19).replace('T', ' ')
    let insertResult = await AdminModel.insertTeam({ Img, Remark, CreateTime })
    if (insertResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '新增团队信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '插入失败！' }
    }
  }
  async modifiedTeam(ctx) {
    let { Id, Img, Remark } = ctx.request.body
    const updateResult = await AdminModel.updateTeamInfo(Id, {
      Img,
      Remark
    })
    if (updateResult.changedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '更新团队信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '更新失败！' }
    }
  }
  async deleteTeam(ctx) {
    let { id } = ctx.request.query
    id = parseInt(id)
    const deleteResult = await AdminModel.deleteTeamInfo(id)
    if (deleteResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '删除团队信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '删除失败！' }
    }
  }

  async createCourse(ctx) {
    let { Year, Content } = ctx.request.body
    let insertResult = await AdminModel.insertCourse({ Year, Content })
    if (insertResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '新增历程信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '插入失败！' }
    }
  }
  async modifiedCourse(ctx) {
    let { Id, Year, Content } = ctx.request.body
    const updateResult = await AdminModel.updateCourseInfo(Id, {
      Year,
      Content
    })
    if (updateResult.changedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '更新历程信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '更新失败！' }
    }
  }
  async deleteCourse(ctx) {
    let { id } = ctx.request.query
    id = parseInt(id)
    const deleteResult = await AdminModel.deleteCourseInfo(id)
    if (deleteResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '删除历程信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '删除失败！' }
    }
  }

  async createEnterprise(ctx) {
    let { Img, Remark } = ctx.request.body
    let insertResult = await AdminModel.insertEnterprise({ Img, Remark })
    if (insertResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '新增合作伙伴信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '插入失败！' }
    }
  }
  async modifiedEnterprise(ctx) {
    let { Id, Img, Remark } = ctx.request.body
    const updateResult = await AdminModel.updateEnterpriseInfo(Id, {
      Img,
      Remark
    })
    if (updateResult.changedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '更新合作伙伴信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '更新失败！' }
    }
  }
  async deleteEnterprise(ctx) {
    let { id } = ctx.request.query
    id = parseInt(id)
    const deleteResult = await AdminModel.deleteEnterpriseInfo(id)
    if (deleteResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '删除合作伙伴信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '删除失败！' }
    }
  }

  async createHonor(ctx) {
    let { Img, Remark } = ctx.request.body
    let insertResult = await AdminModel.insertHonor({ Img, Remark })
    if (insertResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '新增荣誉信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '插入失败！' }
    }
  }
  async modifiedHonor(ctx) {
    let { Id, Img, Remark } = ctx.request.body
    const updateResult = await AdminModel.updateHonorInfo(Id, {
      Img,
      Remark
    })
    if (updateResult.changedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '更新荣誉信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '更新失败！' }
    }
  }
  async deleteHonor(ctx) {
    let { id } = ctx.request.query
    id = parseInt(id)
    const deleteResult = await AdminModel.deleteHonorInfo(id)
    if (deleteResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '删除荣誉信息成功'
      }
    } else {
      ctx.body = { type: 'error', message: '删除失败！' }
    }
  }

  async createDictionary(ctx) {
    let { Key, Content } = ctx.request.body
    let insertResult = await AdminModel.insertDictionary({ Key, Content })
    if (insertResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '新增数据字典成功'
      }
    } else {
      ctx.body = { type: 'error', message: '插入失败！' }
    }
  }
  async modifiedDictionary(ctx) {
    let { Id, Key, Content } = ctx.request.body
    const updateResult = await AdminModel.updateDictionaryInfo(Id, {
      Key,
      Content
    })
    if (updateResult.changedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '更新数据字典成功'
      }
    } else {
      ctx.body = { type: 'error', message: '更新失败！' }
    }
  }
  async deleteDictionary(ctx) {
    let { id } = ctx.request.query
    id = parseInt(id)
    const deleteResult = await AdminModel.deleteDictionaryInfo(id)
    if (deleteResult.affectedRows === 1) {
      ctx.body = {
        type: 'success',
        status: 200,
        message: '删除数据字典成功'
      }
    } else {
      ctx.body = { type: 'error', message: '删除失败！' }
    }
  }

  async uploadImage(ctx) {
    let fileInfo = ctx.request.file
    const fullPath = fileInfo.path
    const baseDir = 'D:\\Project\\Vue\\kejian-Api\\public'
    let relativePath = path.relative(baseDir, fullPath)
    relativePath = '/' + path.posix.join(...relativePath.split(path.sep))
    ctx.body = {
      type: 'success',
      status: 200,
      data: {
        url: relativePath,
        ...fileInfo
      },
      message: '图片上传成功'
    }
  }
}
export default new AdminController()
