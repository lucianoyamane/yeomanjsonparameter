const fs = require('fs');

class UploadFile {


    writeFile(fileValue, content) {
        return new Promise((res, rej) => {
            fs.open(fileValue, 'w+', (err, fd) => {
                if (err) {
                    console.log(err)
                    rej(new Error('error opening file: ' + fileValue));
                }
                res(fd);
            });
        }).then((fd) => {
            return new Promise((res, rej) => {
                fs.write(fd, content, (err, written, buffer) => {
                    if (err) {
                        console.error('error writing file: ' + err);
                        rej(err);
                    }
                    res(fd);
                });
            });
        }).then((fd) => {
            fs.close(fd, (err) => {
                if (err) {
                    rej(new Error('error writing file: ' + fileValue));
                }
            });
        });
    }
}

module.exports.UploadFile = UploadFile;