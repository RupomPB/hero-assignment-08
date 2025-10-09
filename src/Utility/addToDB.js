

const getInstalledApp = () => {
  const installedSTR = localStorage.getItem("installList");

  if (installedSTR) {
    const installedData = JSON.parse(installedSTR);
    return installedData;
  } else {
    return [];
  }
};

const addToInstalledDB = (id) => {
  const installedData = getInstalledApp();

  if (installedData.includes(id)) {
   return false;
    
  } else {
    installedData.push(id);
    const data = JSON.stringify(installedData);
    localStorage.setItem('installList', data);
    return true;
  }
};

export { addToInstalledDB, getInstalledApp };
