const fs = require('fs');
var axios = require('axios')

exports.home = function(req, res, next){
  try{
     axios({
      maxContentLength: Infinity, maxBodyLength: Infinity, 
      headers: {'X_API_KEY': 'VTCD_PRIVATE_dee91a7c05bdaf5f648ef378318aca', 'X_ROUTE_NAME': "react"},
      method: 'post',
      url: 'https://cloud.vetacloud.com/node/video/0/0/70',
      data: {
          file: req.files, raw: fs.readFileSync(req.files.file.path)
      }
    }).then(function (response) {
      fs.unlinkSync(req.files.file.path)
      if(response.status == "error" || response.data.status == "error"){
        console.log(response.data)
        return res.status(400).json({
          status: 400,
          "success": false,
          "message": "Something went wrong"
        })
      }
      return res.status(200).json({
        status: 200,
        "success": true,
        "message": response.data
      })
    }); 
  }
  catch(err){console.log(err)
    return res.status(500).send({
      status: 500,
      "success": false,
      "message": "Error occured"
    })
  }
}

// ///UPLOAD FILE WITH A DEMAND! ----- IMAGE FILE
// exports.demandImage = function(req, res, next){
//   try{
//    axios({
//     headers: {'X_API_KEY': 'VTCD_PRIVATE_0968f2c2a8e42df0325042fd910e32', 'X_ROUTE_NAME': "profile-picture"},
//     method: 'post',
//     url: 'https://cloud.vetacloud.com/node/image/50/50/10',
//     data: {
//           file: req.files, raw: fs.readFileSync(req.files.file.path)
//           }
//     }).then(function (response) {
//       if(response.status !== "error"){
//         console.log(response.data)
//       }
//       else{
//         console.log(response.data)
//       }
//       fs.unlinkSync(req.files.file.path)
//       res.redirect('/')
//     });   
//   }
//   catch(err){
//     return Response.send(
//       res,
//       500,
//       "Error occured"
//     )
//   }
// }


// /////UPLOAD FILE WITH A DEMAND!  ---- VIDEO FILE
// exports.demandVideo = function(req, res, next){
//   try{
//     axios({
//       maxContentLength: Infinity, maxBodyLength: Infinity, 
//       headers: {'X_API_KEY': 'VTCD_PRIVATE_0968f2c2a8e42df0325042fd910e32', 'X_ROUTE_NAME': "profile-picture"},
//       method: 'post',
//       url: 'https://cloud.vetacloud.com/node/video/50/50/10',
//       data: {
//             file: req.files, raw: fs.readFileSync(req.files.file.path)
//             }
//     }).then(function (response) {
//       if(response.status !== "error"){
//         console.log(response.data)
//       }
//       else{
//         console.log(response.data)
//       }
//       fs.unlinkSync(req.files.file.path)
//       res.redirect('/')
//     });
//   }
//   catch(err){
//     return Response.send(
//       res,
//       500,
//       "Error occured"
//     )
//   }
// }

// /////DELETE FILE
// exports.deleteFile = function(req, res, next){
//   try{
//     axios({
//       headers: {'X_API_KEY': 'VTCD_PRIVATE_2cd6793f8daa684155ceed6b2a9c01', 'X_ROUTE_NAME': "profile-picture", 'X_FILE_NAME': "IHNUBDUpl2facbgCu-BSp.png"},
//       method: 'delete',
//       url: 'https://cloud.vetacloud.com/node/',
//     }).then(function (response) {
//       if(response.status !== error){
//         console.log(response.data)
//         fs.unlinkSync(req.files.file.path)
//       }
//       else{
//         console.log(response.data)
//       }
//       res.redirect('/')
//     });
//   }
//   catch(err){
//     return Response.send(
//       res,
//       500,
//       "Error occured"
//     )
//   }
// }


// /////GET FILES IN A ROUTE
// exports.files = function(req, res, next){
//   try{
//     axios({
//       headers: {'X_API_KEY': 'VTCD_PRIVATE_2cd6793f8daa684155ceed6b2a9c01', 'X_ROUTE_NAME': "profile-picture"},
//       method: 'get',
//       url: 'https://cloud.vetacloud.com/node/files',
//     }).then(function (response) {
//       if(response.status !== error){
//         console.log(response.data)
//       }
//       else{
//         console.log(response.data)
//       }
//       res.redirect('/')
//     });
//   }
//   catch(err){
//     return Response.send(
//       res,
//       500,
//       "Error occured"
//     )
//   }
// }