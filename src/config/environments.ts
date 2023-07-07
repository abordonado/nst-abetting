const path = 'environments';

export const environments = {
  dev: `${path}/dev.env`,
  test: `${path}/test.env`,
  prod: `${path}/prod.env`,
};

export declare type environmentsType = keyof typeof environments;
