function formatDateTime(date) {
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
        hour12: false, 
        timeZone: 'Asia/Ho_Chi_Minh' 
    };
    return new Intl.DateTimeFormat('en-US', options).format(date).replace(',', '');
}

module.exports = formatDateTime;
