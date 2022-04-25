import serverAPI from './serverAPI';
const announcementService = {
  async getSingleAnnouncement(id: string) {
    const data = await serverAPI.get({
      url: `ad/${id}`
    });
    return data;
  },

  async getAnnouncements(type: string) {
    const data = await serverAPI.get({
      url: `ad/${type}`
    });
    return data;
  }
};

export default announcementService;
