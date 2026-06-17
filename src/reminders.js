const reminders = {
    type: String,
    reminderDay: Number,
    reminderMonth: Number,
    reminderYear: Number,
    notifType: String,
    message: String,
    get remType() {
        return this.type;
    },
    get day() {
        return this.reminderDay;
    },
    get month() {
        return this.reminderMonth;
    },
    get year() {
        return this.reminderYear;
    },
    get notType() {
        return this.notifType;
    },
    get mes() {
        return this.message;
    }
}