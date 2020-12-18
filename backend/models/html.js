const mongoose = require('mongoose');

const HTML_Schema = new mongoose.Schema ({
    Titles:
    {
        type: String,     
    },
    Videos: {
        type: String,       
    },
    Desceriptions: {
        type: String,
        
    },
    userSchema:[
        {
            type: mongoose.Schema.Types.ObjectId,
          ref:"User"
      }
    ],
});

export default mongoose.model('Html',HTML_Schema );
