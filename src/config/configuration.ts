import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    environment: process.env.ENV,

    host: {
      port: process.env.PORT,
    },
  };
});
