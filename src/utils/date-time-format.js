const formatDateTime = function async(date){
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    if (isNaN(date)) {
        throw new Error('Invalid date');
    }
    
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true, 
        timeZone: 'Asia/Ho_Chi_Minh' 
    };
    return new Intl.DateTimeFormat('en-US', options).format(date).replace(',', '');
}

const formateDate = function async(date){
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    if (isNaN(date)) {
        throw new Error('Invalid date');
    }
    
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: '2-digit',  
        timeZone: 'Asia/Ho_Chi_Minh' 
    };
    return new Intl.DateTimeFormat('en-US', options).format(date).replace(',', '');
}

const formateTime = function async(date){
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    if (isNaN(date)) {
        throw new Error('Invalid date');
    }
    
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true,  
        timeZone: 'Asia/Ho_Chi_Minh' 
    };
    return new Intl.DateTimeFormat('en-US', options).format(date).replace(',', '');
}


module.exports = {
    formatDateTime,
    formateDate,
    formateTime
};
