
function filterData(JSONData, regex) {
    let jsonData = [];
    let params = regex.split('/');
    let driverType = params[0];
    let date = params[1];
    let time = params[2];
    let countPeople = params[3];
    console.log(params);
    JSONData.forEach(element => {
        let drv = true; let dt = true; let cpcty = true;
        if(driverType !== '-0-'){
            element.available == (driverType == 1 ? true : false) ? drv = true : drv = false;
        }
        if(date != '-0-' || time !== '-0-'){
            if(date == '-0-') date = new Date().getFullYear().toString()+'-'+ new Date().getMonth().toString()+'-'+new Date().getDate().toString();
            if(time == '-0-') time = new Date().getHours().toString()+':'+new Date().getMinutes().toString()
            let strDtEl = element.availableAt.replace('T', ' ');
            strDtEl = strDtEl.replace('Z', '');
            let datetime = new Date(`${date} ${time}`);
            let elDatetime = new Date(strDtEl);
            datetime >= elDatetime ? dt = true : dt = false;
            console.log(date, time,datetime,' ', elDatetime);
        }
        if(countPeople != '-0-'){
            element.capacity >= countPeople ? cpcty = true : cpcty = false;
        }
        drv && dt && cpcty == true ? jsonData.push(element) : console.log('');
    });
    return jsonData;
}

export {filterData}