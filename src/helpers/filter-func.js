const SortFunc = (tasksData, sortByPriority, priorityType) => {
    if (sortByPriority === "LOW_TO_HIGH") {
        return tasksData.sort((a, b) => priorityType[a.priorityTag] - priorityType[b.priorityTag])
    }
    if (sortByPriority === "HIGH_TO_LOW") {
        return tasksData.sort((a, b) => priorityType[b.priorityTag] - priorityType[a.priorityTag])
    }
    return tasksData;
}
const SortTime = (tasksData, sortByTime) => {
    const data = [...tasksData]
    if (sortByTime && sortByTime === "NEW_TO_OLD") {
        return data.sort((a, b) =>b.time.localeCompare(a.time))
    }
    if (sortByTime && sortByTime === "OLD_TO_NEW") {
        return data.sort((a, b) => a.date.localeCompare(b.date))
    }
    return data;
}

const SearchTask = (tasksData, searchByTitle) =>
    tasksData.filter((task) => task.name.toLowerCase().includes(searchByTitle.toLowerCase()))

export {
    SortFunc,
    SortTime,
    SearchTask
}