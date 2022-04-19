const debug = process.env.NODE_ENV !== "production";
const name = "leeinseong.github.io";

module.exports = {
  assetPrefix: !debug ? `/${name}/` : "",
};
