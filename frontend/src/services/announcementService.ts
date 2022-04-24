import serverAPI from './serverAPI';
const announcementService = {
  async getSingleAnnouncement(id: string) {
    const data = await serverAPI.get({
      url: `ad/${id}`
    });
    console.log('asd');
    return data;
  }
};

export default announcementService;
