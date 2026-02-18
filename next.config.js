/ ** @type {import('next').NextConfig} * /;
const nextConfig = {
  outputFileTracingIncludes: {
    "api/v1/migrations": ["infra/migrations/**"],
  },
};
