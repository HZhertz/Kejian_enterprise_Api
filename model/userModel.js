import query from '../sql/query.js'

class UserModel {
  async getCase() {
    return await query('SELECT * FROM `case`')
  }
  async findCase(pid) {
    return await query('SELECT * FROM `case` WHERE Id = ?', [pid])
  }
  async getNews(type, num) {
    if (type === 0) {
      return await query(`SELECT * FROM news LIMIT ?`, [num])
    } else {
      let sql = `SELECT * FROM news WHERE type = ? LIMIT ?`
      return await query(sql, [type, num])
    }
  }
  async findNews(pid) {
    return await query('SELECT * FROM news WHERE Id = ?', [pid])
  }
  async getDataDictionary() {
    return await query('SELECT * FROM datadictionary')
  }
  async findDataDictionary(key) {
    return await query('SELECT * FROM datadictionary WHERE `Key` = ?', [key])
  }
  async getHonor() {
    return await query('SELECT * FROM honor')
  }
  async getEnterprise() {
    return await query('SELECT * FROM enterprise')
  }
  async getTeam() {
    return await query('SELECT * FROM team')
  }
  async getCourse() {
    return await query('SELECT * FROM course')
  }
  async findAdmin(strAdmin) {
    return await query('SELECT * FROM user WHERE LoginName = ?', [strAdmin])
  }
}
export default new UserModel()
