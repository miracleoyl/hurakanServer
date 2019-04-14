module.exports = {  
    supportedMimes: {
      'application/excel': '.xls',
      'application/pdf': '.pdf',
      'application/msword': 'doc',
      'application/vnd.ms-powerpoint': '.ppt',
      'image/gif': '.gif',
      'image/png': '.png',
      'image/jpeg': '.jpeg',
      'image/jpeg': '.jpg',
      'application/vnd.ms-excel': '.csv',
      'text/plain': 'txt',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
      'application/json': '.json',
      'image/x-icon': '.ico',
      'application/x-zip-compressed': '.zip'
    },
    uploadsFolder: 'uploads',
    dbConnection: 'mongodb://127.0.0.1:27017/fileupload'
  }