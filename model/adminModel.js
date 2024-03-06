import query from '../sql/query.js'

class AdminModel {
  async getUser() {
    return await query('SELECT * FROM user')
  }
  async insertUser(userInfo) {
    return await query('INSERT INTO user SET ?', userInfo)
  }
  async updateUserInfo(Id, userInfo) {
    let sql = 'UPDATE user SET ? WHERE Id = ?'
    return await query(sql, [userInfo, Id])
  }
  async deleteUserInfo(Id) {
    return await query('DELETE FROM user WHERE Id = ?', [Id])
  }
  async insertNews(newsInfo) {
    return await query('INSERT INTO news SET ?', newsInfo)
  }
  async updateNewsInfo(Id, newsInfo) {
    let sql = 'UPDATE news SET ? WHERE Id = ?'
    return await query(sql, [newsInfo, Id])
  }
  async deleteNewsInfo(Id) {
    return await query('DELETE FROM news WHERE Id = ?', [Id])
  }
  async insertCase(caseInfo) {
    return await query('INSERT INTO `case` SET ?', caseInfo)
  }
  async updateCaseInfo(Id, caseInfo) {
    let sql = 'UPDATE `case` SET ? WHERE Id = ?'
    return await query(sql, [caseInfo, Id])
  }
  async deleteCaseInfo(Id) {
    return await query('DELETE FROM `case` WHERE Id = ?', [Id])
  }
  async insertTeam(teamInfo) {
    return await query('INSERT INTO team SET ?', teamInfo)
  }
  async updateTeamInfo(Id, teamInfo) {
    let sql = 'UPDATE team SET ? WHERE Id = ?'
    return await query(sql, [teamInfo, Id])
  }
  async deleteTeamInfo(Id) {
    return await query('DELETE FROM team WHERE Id = ?', [Id])
  }
  async insertCourse(courseInfo) {
    return await query('INSERT INTO course SET ?', courseInfo)
  }
  async updateCourseInfo(Id, courseInfo) {
    let sql = 'UPDATE course SET ? WHERE Id = ?'
    return await query(sql, [courseInfo, Id])
  }
  async deleteCourseInfo(Id) {
    return await query('DELETE FROM course WHERE Id = ?', [Id])
  }
  async insertEnterprise(enterpriseInfo) {
    return await query('INSERT INTO enterprise SET ?', enterpriseInfo)
  }
  async updateEnterpriseInfo(Id, enterpriseInfo) {
    let sql = 'UPDATE enterprise SET ? WHERE Id = ?'
    return await query(sql, [enterpriseInfo, Id])
  }
  async deleteEnterpriseInfo(Id) {
    return await query('DELETE FROM enterprise WHERE Id = ?', [Id])
  }
  async insertHonor(honorInfo) {
    return await query('INSERT INTO honor SET ?', honorInfo)
  }
  async updateHonorInfo(Id, honorInfo) {
    let sql = 'UPDATE honor SET ? WHERE Id = ?'
    return await query(sql, [honorInfo, Id])
  }
  async deleteHonorInfo(Id) {
    return await query('DELETE FROM honor WHERE Id = ?', [Id])
  }
  async insertDictionary(dictionaryInfo) {
    return await query('INSERT INTO datadictionary SET ?', dictionaryInfo)
  }
  async updateDictionaryInfo(Id, dictionaryInfo) {
    let sql = 'UPDATE datadictionary SET ? WHERE Id = ?'
    return await query(sql, [dictionaryInfo, Id])
  }
  async deleteDictionaryInfo(Id) {
    return await query('DELETE FROM datadictionary WHERE Id = ?', [Id])
  }
}
export default new AdminModel()
