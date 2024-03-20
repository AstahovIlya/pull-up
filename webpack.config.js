import path from 'path';

export default {
   mode: 'development',
   entry: path.resolve('src', 'script.js'),

   devServer: {
      static: {
         directory: path.resolve('dist'),
      },
      compress: true,
      port: 9000,
   }
};