const { exec } = require("child_process");

let getdiskinfo = () => {
  return new Promise((resolve, reject) => {
    exec(
      'powershell -command "Get-CimInstance Win32_LogicalDisk | Select-Object DeviceID,FreeSpace,Size | ConvertTo-Json"',
      (err, stdout) => {
        if (err) return reject(err);

        try {
          resolve(JSON.parse(stdout));
        } catch (e) {
          reject(e);
        }
      }
    );
  });
};

async function loadDisks() {
  return await getdiskinfo();
}

function BytesToGb(value) {
  let data = value / 1024 ** 3;
  return data.toFixed(2) + "GB";
}


function BytesToTb(value) {
  console.log(value)
  let data = value / 1024 ** 4;
  return data.toFixed(2) + "TB";
}

module.exports = {
  BytesToGb,
  BytesToTb,
  loadDisks,
};
