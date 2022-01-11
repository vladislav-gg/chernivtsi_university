module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ae5e22b4fbf3182486ca66e747a29934'),
  },
});
