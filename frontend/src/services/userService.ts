import serverAPI from './serverAPI';
const userService = {
  async login(userData: { login: string; password: string }) {
    const data = await serverAPI.post({
      url: '/login',
      data: userData
    });
    return data;
  },
  async register(userData: {}) {
    const data = await serverAPI.post({
      url: '/register',
      data: userData
    });
    return data;
  }
};

export default userService;
