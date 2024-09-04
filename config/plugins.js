module.exports = ({ env }) => ({
  "backup": {
    enabled: false,
    config: {
      cronSchedule: '0 9-17 * * *', // At minute 0 past every hour from 9 through 17
      storageService: 'aws-s3',
      awsAccessKeyId: '<AWS_ACCESS_KEY_ID>',
      awsSecretAccessKey: '<AWS_SECRET_ACCESS_KEY>',
      awsRegion: '<AWS_REGION>',
      awsS3Bucket: '<AWS_S3_BUCKET>',
      databaseDriver: env('DATABASE_CLIENT'),
      allowCleanup: true,
      timeToKeepBackupsInSeconds: 172800, // 2 days
      cleanupCronSchedule: '0 9 * * *', // Each day at 09:00 AM
      errorHandler: (error, strapi) => {
        console.log(error);
      },
    }
  },
});
