import serverAPI from './serverAPI';
const userService = {
  async login(userData: { email: string; password: string }) {
    const data = await serverAPI.post({
      url: 'user/login',
      data: userData
    });
    return data;
  },
  async register(userData: {}) {
    const data = await serverAPI.post({
      url: 'user/registerVolunteer',
      data: userData
    });
    return data;
  },
  async add(adData: {}){
    const data = await serverAPI.post({
      url: 'ad/',
      data: adData
    });
    return data;
  }
};

export default userService;
