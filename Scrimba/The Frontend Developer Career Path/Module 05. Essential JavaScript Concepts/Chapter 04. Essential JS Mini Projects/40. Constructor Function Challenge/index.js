function Character(name) {
    this.name = name;
    this.collectedItemsArr = [];
    this.addItem = function (item) {
        this.collectedItemsArr.push(item);
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`);
    };
}

const wizard = new Character('Merlin');
const witch = new Character('Hermione');
wizard.addItem('wand');
wizard.addItem('map');
wizard.addItem('potion');
witch.addItem('sword');
witch.addItem('cloak of invisibility');
