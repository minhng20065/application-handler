const applicationForm = {
    firstName: String,
    lastName: String,
    position: String,
    dateDay: Number,
    dateMonth: Number,
    dateYear: Number,
    url: String,
    status: String,
    salaryStart: Number,
    salaryEnd: Number,
    notes: String,
    id: Number,
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    get day() {
        return this.dateDay;
    },
    get month() {
        return this.dateMonth;
    },
    get year() {
        return this.dateYear;
    },
    get link() {
        return this.url;
    },
    get state() {
        return this.status;
    },
    get salStart() {
        return this.salaryStart;
    },
    get salEnd() {
        return this.salaryEnd;
    },
    get para() {
        return this.notes;
    },
    get iden() {
        return this.id;
    },
    set setFirst(firstName) {
        this.firstName = firstName;
    },
    set setLast(lastName) {
        this.lastName = lastName;
    },
    set setDay(dateDay) {
        this.dateDay = dateDay;
    },
    set setMonth(dateMonth) {
        this.dateMonth = dateMonth;
    },
    set setYear(dateYear) {
        this.dateYear = dateYear;
    },
    set setURL(url) {
        this.url = url;
    },
    set setStatus(status) {
        this.status = status;
    },
    set setStart(salaryStart) {
        this.salaryStart = salaryStart;
    },
    set setEnd(salaryEnd) {
        this.salaryEnd = salaryEnd;
    },
    set setNotes(notes) {
        this.notes = notes;
    },
    set setID(id) {
        this.id = id;
    },

}