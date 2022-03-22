const SongModel = require("../models/song");

const songOperations = {
  async add(songObject) {
    return await SongModel.create(songObject);
  },
  async readBySinger(singerName) {
    return await SongModel.find({ artistName: singerName });
  },
  async readAll() {
    return await SongModel.find({});
  },
  async removeSong(songObject) {
    return await SongModel.remove({ name: songObject.name });
  },
};
module.exports = songOperations;
