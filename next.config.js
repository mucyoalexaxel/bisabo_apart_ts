const path = require("path");

module.exports = {
  images: {
    domains: ["pjupfwqneycuvhuorsvd.supabase.co"],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};
