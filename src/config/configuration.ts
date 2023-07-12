import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    environment: process.env.ENV,

    apiSports: {
      key: process.env.API_SPORTS_KEY,
      url: process.env.API_SPORTS_URL,
    },

    host: {
      port: process.env.PORT,
    },
  };
});
