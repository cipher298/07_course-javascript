function getConsecutiveDays(I, n) {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let result = [];
    
    // Find the starting index of the first element of I
    let startIndex = daysOfWeek.indexOf(I[0]);
    
    // Generate n consecutive days
    for (let i = 0; i < n; i++) {
        result.push(daysOfWeek[(startIndex + i) % 7]);
    }
    
    return result;
}

// Test cases
console.log(getConsecutiveDays(["Mon"], 7));        // [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
console.log(getConsecutiveDays(["Mon"], 10));       // [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed' ]
console.log(getConsecutiveDays(["Fri", "Sun"], 5)); // [ 'Fri', 'Sat', 'Sun', 'Mon', 'Tue' ]
console.log(getConsecutiveDays(["Mon", "Thu", "Sat"], 5)); // [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ]
