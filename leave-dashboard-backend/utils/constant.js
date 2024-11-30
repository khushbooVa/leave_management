 const corsOptions = {
    origin: '*',// allows all origin to access it 
    methods:'*', //allows all method to access it.
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true, 
  };
  module.exports={corsOptions}