const HOST = "mysql-keiwa.alwaysdata.net";
const CONNECTION = "mysql";

const baseConfig = {
  TYPEORM_CONNECTION: CONNECTION,
  TYPEORM_HOST: HOST,
  TYPEORM_USERNAME: "keiwa",
  TYPEORM_PASSWORD: "Bertrand",
  TYPEORM_SYNCHRONIZE: true,
  TYPEORM_LOGGING: true,
  TYPEORM_ENTITIES: ["entities/*.ts"],
};

module.exports = Promise.resolve({
  local: {
    ...baseConfig,
    TYPEORM_DATABASE: "keiwa_foodly_recette",
  },
  staging: {
    ...baseConfig,
    TYPEORM_DATABASE: "keiwa_foodly_recette",
  },
  recette: {
    ...baseConfig,
    TYPEORM_DATABASE: "keiwa_foodly_recette",
  },
  production: {
    ...baseConfig,
    TYPEORM_DATABASE: "keiwa_foodly_production",
  },
});
