import serverAPI from './serverAPI';
const userService = {
  async login(userData: { email: string; password: string }) {
    const data = await serverAPI.post({
      url: '/http://localhost:3001/api/user/register',
      data: userData
    });
    return data;
  },
  async register(userData: {}) {
    const data = await serverAPI.post({
      url: 'http://localhost:3001/api/user/registerVolunteer',
      data: userData
    });
    return data;
  }
};

export default userService;
