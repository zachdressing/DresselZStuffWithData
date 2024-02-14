const sortID = (a, b) =>{
    return a.Id - b.Id;
}

const sortFirst = (a, b) =>{
    return a.FirstName.localeCompare(b.FirstName);
}

const sortLast = (a, b) =>{
    return a.LastName.localeCompare(b.LastName);
}

const sortHeight = (a, b) =>{
    return a.Height.substring(0, 2) - b.Height.substring(0, 2);
}

const sortAge = (a, b) =>{
    return a.Age - b.Age;
}

export {sortID, sortFirst, sortLast, sortHeight, sortAge}