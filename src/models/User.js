

class User {
  constructor(body, data) {
    this.body = body;
    this.data = data;
  }

  async login() {
    const client = this.body;

    

    try {
      const user = this.data.filter(word => word.id === client.id)[0];

      if (user) {
        if (user.id === client.id && user.psword === client.password) {
          return { success: true, name:user.name };
        }
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
      return { success: false, msg: "존재하지 않는 아이디입니다." };

    } catch (err) {
      return { success: false, err };
    }
  }

  
}


module.exports = User;


