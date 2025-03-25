const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/public/images')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })

const fileFilter = (req, res, cb)=>{
    const allowedType = ['image/jpeg', 'image/png', 'image/jpg'];
    if(allowedType.includes(file.mimetype)){
        cb(null, true)
    }
    else{
        cb(new Error("only .jpeg, .png, .jpg formats are allowed". false))
    }
}
  
const upload = multer({ storage, fileFilter })

module.exports = upload