const imgURLExample = 'https://picsum.photos/250/450';

const photos = [
  'https://i.picsum.photos/id/1/250/450.jpg?hmac=E8t3kigun_RlWVq-U1gz1uuoA8yai5Z0NIEAwWtXO8U',
  'https://i.picsum.photos/id/0/250/450.jpg?hmac=N9UA7eXUtlLIZmP9TQly48SvOy5PVOGyPuPSFP1qSHM',
  'https://i.picsum.photos/id/983/250/450.jpg?hmac=6QaeY1BqIVzFjw3SwgNEvSrT6hx-bJhjTUiVzqJh9PU',
  'https://i.picsum.photos/id/283/250/450.jpg?hmac=wuv7U77nW4wzmBRSMTesWzmPIi0fWPxEXYgilfosE1U',
  'https://i.picsum.photos/id/137/250/450.jpg?hmac=kt93NfVj9miJ0WHtfoENBpnMi0HdxVO1T4H2RyfFhpk',
];

export const randomPhoto = photos[Math.round(Math.random() * 4)];
